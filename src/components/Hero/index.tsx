import { useState } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import * as Dialog from "@radix-ui/react-dialog";

// Components
import { Button } from "../Button";
import { ScheduleModal } from "../ScheduleModal";
import { FieldValues } from "react-hook-form/dist/types/fields";
import { Toast } from "../Toast";

export function Hero() {
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleSubmit(data: FieldValues) {
    setIsToastOpen(true);
    setIsModalOpen(false);
    console.log(data);
  }

  return (
    <section className="bg-light-200 flex px-9 sm:px-10 md:px-16">
      <div className="flex items-center container mx-auto flex-col sm:flex-row">
        <div className="flex-1 mb-8">
          <h2 className="text-primary-500 text-2xl sm:text-5xl font-bold mb-5">
            A sua beleza é única, <br /> O tratamento também{" "}
          </h2>

          <span className="text-gray-900 mb-5 block">
            A padronização de tratamentos estéticos gera resultados artificiais.
            Por isso analisamos sua pele e realizamos apenas procedimentos
            personalizados para você.
          </span>

          <Dialog.Root modal open={isModalOpen} onOpenChange={setIsModalOpen}>
            <Dialog.Trigger asChild>
              <Button title="agendar consulta">Agendar Consulta</Button>
            </Dialog.Trigger>

            <ScheduleModal onSubmit={handleSubmit} />
          </Dialog.Root>

          <Toast
            title="Agendamento Concluído"
            description={`Obrigado por agendar conosco! Agradecemos a preferência!`}
            isOpen={isToastOpen}
            setIsOpen={setIsToastOpen}
          />
        </div>

        <div className="flex-1">
          <Fade>
            <Image
              src="/destaque.png"
              width={617}
              height={480}
              alt="Mulher segurando um produto de beleza"
            />
          </Fade>
        </div>
      </div>
    </section>
  );
}
