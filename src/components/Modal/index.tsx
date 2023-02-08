import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { ReactNode } from "react";

type Props = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function Modal({ children, title }: Props) {
  return (
    <Dialog.Portal className="">
      <Dialog.Overlay className="fixed w-screen min-h-screen flex items-center justify-center top-0 left-0 bg-gray-200/70 backdrop-blur-sm">
        <Dialog.Content className="  ">
          <div className="bg-gray-50 w-[600px] max-w-full rounded-[5px] p-6">
            <div className="flex items-center justify-between mb-4">
              <Dialog.Title className="text-primary-500 font-bold text-xl sm:text-2xl">
                {title}
              </Dialog.Title>

              <Dialog.Close>
                <X size={24} className="text-primary-500" />
              </Dialog.Close>
            </div>

            <Dialog.Description />
            {children}
          </div>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
}
