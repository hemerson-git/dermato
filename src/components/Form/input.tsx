import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="
        bg-white py-3 px-4 rounded text-sm 
        placeholder:text-gray-400 selection:bg-primary-500 selection:color-gray-50
      "
    />
  );
}
