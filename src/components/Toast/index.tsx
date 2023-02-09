import * as PrimitiveToast from "@radix-ui/react-toast";
import { Dispatch, SetStateAction } from "react";
import { X } from "phosphor-react";
import * as Separator from "@radix-ui/react-separator";

type Props = {
  title: string;
  description: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export function Toast({ title, description, isOpen, setIsOpen }: Props) {
  return (
    <PrimitiveToast.Provider swipeDirection="right">
      <PrimitiveToast.Root
        open={isOpen}
        onOpenChange={setIsOpen}
        className="
          fixed bottom-6 right-6 bg-gray-50 p-4 rounded-[5px] border-t-4 border-green-400
          max-w-xs z-50 text-gray-900"
      >
        <div className="flex justify-between">
          <PrimitiveToast.Title className="font-bold">
            {title}
          </PrimitiveToast.Title>

          <PrimitiveToast.Close>
            <X size={24} className="text-primary-500" />
          </PrimitiveToast.Close>
        </div>

        <Separator.Root className="bg-green-400 w-full h-[1px] mb-4 mt-4" />

        <PrimitiveToast.Description>{description}</PrimitiveToast.Description>
        <PrimitiveToast.Action altText="Saindo" />
      </PrimitiveToast.Root>

      <PrimitiveToast.Viewport />
    </PrimitiveToast.Provider>
  );
}
