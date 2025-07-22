# ASP.NET Aspire

Aspire is like a toolkit helps you run and manage .NET apps that use multiple services connected together (APIs, databases, microservices & caches).

Aspire makes it easy to run and test your whole app locally (like Docker Compose but with .NET ecosystem.)

Aspire gives us ready-made tools, templates, and NuGet packages.

## Working

- Run the _.AppHost_ project which launches all child services, applies config and setups up eveything else.
- _.ServiceDefaults_ keeps configuration and resilience consistent everywhere.

## Steps I followed:

In Visual Studio:

1. Select `ASP.NET Core Empty Aspire Application` template and create project:

2. Follow this folder structure and create the `ASP.NET Core WebAPI` project:

```cs
MyAspireApp/
├── AspireDemo.AppHost/ // Aspire orchestrator
├── AspireDemo.WebApi/ // Web API (We need to create this)
├── AspireDemo.ServiceDefaults // config for health checks, logging, OpenTelemetry etc.
├── AspireDemo.sln // Solution
```

3. Add the references:
   - `AspireDemo.AppHost` --> AspireDemo.Web
   - `AspireDemo.WebApi` --> AspireDemo.ServiceDefaults

4. Install these packages:

   `AspireDemo.AppHost`
   - Aspire.Hosting.SqlServer (Can add any other DB)
   - Aspire.Hosting.Redis

   `AspireDemo.WebApi`
   - Microsoft.EntityFrameworkCore.Design
   - Aspire.StackExchange.Redis.DistributedCaching
   - Aspire.Microsoft.EntityFrameworkCore.SqlServer

5. In `AspireDemo.AppHost/Program.cs`,

- register the db & redis containers.
- add the API project with references.

```cs
var builder = DistributedApplication.CreateBuilder(args);

//1. Add redis + sqlserver containers
var sql = builder.AddSqlServer("sql")
                 .WithLifetime(ContainerLifetime.Persistent);
var db = sql.AddDatabase("database");

var redis = builder.AddRedis("redis")
                   .WithRedisInsight();


//2. Add the Web API project, and add redis + sqlserver references
builder.AddProject<Projects.AspireDemo_Web>("web")
       .WithReference(db)
       .WaitFor(db)
       .WithReference(redis);

builder.Build().Run();

```

6. In `AspireDemo.WebApi/Program.cs`,

- Add the service defaults which comes from `AspireDemo.ServiceDefaults`
- Add the default endpoints like `/health`, `/alive`.

```cs
var builder = WebApplication.CreateBuilder(args);

// 3. Add Aspire service defaults (health checks, telemetry, etc.)
builder.AddServiceDefaults();

var app = builder.Build();

// 4. Add health endpoints + root route
app.MapDefaultEndpoints();
app.MapGet("/", () => "Aspire Web API is running ✅");

app.Run();
```

7. To actually consume the actual redis+db, in `AspireDemo.WebApi/Program.cs`

- Register EF Core with DB & register Redis.

```cs
...
builder.AddServiceDefaults();

// 5. Inject services from aspire
builder.AddSqlServerDbContext<AppDbContext>(connectionName: "database");
builder.AddRedisDistributedCache(connectionName: "redis");

var app = builder.Build();
...
```

8. Finally, Add some endpoints which implement these services

`AspireDemo.WebApi/Program.cs`

```cs
...

// Get all users
app.MapGet("/users", async (AppDbContext db) =>
{
    return await db.Users.ToListAsync();
});

// Create user and cache name
app.MapPost("/users", async (AppDbContext db, IDistributedCache cache, User user) =>
{
    db.Users.Add(user);
    await db.SaveChangesAsync();
    await cache.SetStringAsync($"user:{user.Id}", user.Name);

    return Results.Created($"/users/{user.Id}", user);
});

// Get cached name
app.MapGet("/users/{id}/cached", async (int id, IDistributedCache cache) =>
{
    var name = await cache.GetStringAsync($"user:{id}");
    return name is not null ? Results.Ok(name) : Results.NotFound();
});
```
