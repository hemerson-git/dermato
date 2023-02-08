import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

export function Button({ children }: ButtonProps) {
  return (
    <button
      className="
        bg-primary-500 px-8 py-[18px] text-xl font-bold rounded-md transition-opacity
        hover:opacity-80 text-gray-50
      "
    >
      {children}
    </button>
  );
}
