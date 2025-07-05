import { Input } from "@/components/ui/input";
import React from "react";
interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  required?: boolean;
}
export const InputField = ({
  label,
  type,
  placeholder,
  name,
  required = false,
}: InputFieldProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="mb-1 block font-medium">
        {label}
      </label>
      <Input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full border-4 border-black bg-neutral-100 px-4 py-3 transition-colors focus:bg-white focus:ring-2 focus:ring-black focus:outline-none"
      />
    </div>
  );
};
