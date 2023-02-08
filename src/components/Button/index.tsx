import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="
        bg-primary-500 px-8 py-[18px] text-xl font-bold rounded-md transition-opacity
        hover:opacity-80 text-gray-50
      "
      {...rest}
    >
      {children}
    </button>
  );
}
