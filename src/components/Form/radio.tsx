import { Dispatch, forwardRef, Ref, SetStateAction, useState } from "react";
import * as PrimitiveRadioGroup from "@radix-ui/react-radio-group";

type Props = {
  title: string;
  items: {
    value: string;
    title: string;
  }[];
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
};

export const Radio = forwardRef(function Radio(
  props: Props,
  ref: Ref<HTMLDivElement>
) {
  return (
    <PrimitiveRadioGroup.Root
      ref={ref}
      orientation="horizontal"
      className="flex flex-col"
      value={props.value}
    >
      <span className="font-bold mb-2 select-none">{props.title}</span>

      <div className="flex gap-2">
        {props?.items.map((item) => (
          <PrimitiveRadioGroup.Item
            value={item.value}
            key={item.value}
            onClick={(e) => props.onChange(e.currentTarget.value)}
          >
            <label className="flex items-center gap-1 justify-center uppercase">
              <span>{item.title}</span>

              <div className="flex w-5 h-5 border-2 border-gray-400 rounded-full items-center justify-center">
                <PrimitiveRadioGroup.Indicator className="w-3 h-3 bg-gray-400 block rounded-full" />
              </div>
            </label>
          </PrimitiveRadioGroup.Item>
        ))}
      </div>
    </PrimitiveRadioGroup.Root>
  );
});
