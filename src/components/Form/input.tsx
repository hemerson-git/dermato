import { InputHTMLAttributes, forwardRef, LegacyRef } from "react";
import InputMask from "react-input-mask";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask?: string;
}

export const Input = forwardRef(function Input(
  props: InputProps,
  ref: LegacyRef<HTMLInputElement>
) {
  if (props.mask) {
    return (
      <InputMask
        ref={ref as LegacyRef<InputMask>}
        mask={props.mask || ""}
        {...props}
        className="
        bg-white py-3 px-4 rounded text-sm 
        placeholder:text-gray-400 selection:bg-primary-500 selection:text-gray-50
      "
      />
    );
  }

  return (
    <input
      ref={ref}
      {...props}
      className="
        bg-white py-3 px-4 rounded text-sm 
        placeholder:text-gray-400 selection:bg-primary-500 selection:text-gray-50
      "
    />
  );
});
