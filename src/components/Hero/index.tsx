import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button";

export function Hero() {
  return (
    <section className="bg-gray-50 flex px-10">
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

          <Button>Agendar consulta</Button>
        </div>

        <div className="flex-1">
          <Image
            src="/destaque.png"
            width={617}
            height={480}
            alt="Mulher segurando um produto de beleza"
          />
        </div>
      </div>
    </section>
  );
}
