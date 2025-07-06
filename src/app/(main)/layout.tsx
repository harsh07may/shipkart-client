import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import React, { PropsWithChildren } from "react";

function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
