import * as RadixAccordion from "@radix-ui/react-accordion";
import { CaretDown } from "phosphor-react";

type AccordionProps = {
  items: {
    title: string;
    text: string;
  }[];
};

export function Accordion({ items }: AccordionProps) {
  return (
    <RadixAccordion.Root type="single">
      {items.map((item, index) => (
        <RadixAccordion.Item
          value={`item-${index}`}
          className="mb-5 flex flex-col border border-gray-400"
          key={`item-${index}`}
        >
          <RadixAccordion.Trigger>
            <RadixAccordion.Header className="flex p-5 w-full justify-between items-center">
              <span className="text-xl font-bold text-gray-900">
                {item.title}
              </span>

              <CaretDown size={24} className="text-primary-500" />
            </RadixAccordion.Header>
          </RadixAccordion.Trigger>

          <RadixAccordion.Content className="p-5 pr-7">
            <p>{item.text}</p>
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  );
}
