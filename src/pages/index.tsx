import { Counter } from "@/components/Counter";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import Image from "next/image";

const products = [
  {
    title: "Limpeza de pele",
    description:
      "Remoção de cravos e impurezas da pele, proporcionando a renovação celular e a redução dos poros.",
    image: "/icon.svg",
  },
  {
    title: "Peeling",
    description:
      "Promove a renovação celular, de forma progressiva, estimulando a regeneração natural dos tecidos.",
    image: "/icon_1.svg",
  },
  {
    title: "Radiesse",
    description:
      "Proporciona uma correção imediata de efeitos comuns do envelhecimento, como flacidez e perda de sustentação da pele.",
    image: "/icon_2.svg",
  },
  {
    title: "Lifting não invasivo",
    description:
      "Tratamento que devolve o tônus à pele e amenizar sinais de envelhecimento sem demandar internação hospitalar.",
    image: "/icon_3.svg",
  },
  {
    title: "Drenagem linfática",
    description:
      "Ajuda na eliminação de toxinas, melhora o sistema imunológico, melhora a aparência de celulite.",
    image: "/icon_4.svg",
  },
  {
    title: "Microagulhamento",
    description:
      "Indicado para remover cicatrizes de acne, amenizar estrias, eliminar rugas, diminuir a flacidez da pele e prevenir a queda de cabelo .",
    image: "/icon_5.svg",
  },
];

export default function Home() {
  return (
    <div className="bg-bg-theme-500 min-h-screen text-gray-100">
      <Header />

      <main className="">
        <Hero />
        <Counter />

        <section className="pt-20 pb-16 container px-10">
          <h2 className="text-primary-500 font-bold text-4xl pb-[60px] text-center">
            Tratamentos estéticos
          </h2>

          <div className="grid grid-cols-3 gap-14 odd:text-primary-500">
            {products.map((product, index) => (
              <div
                key={
                  String(product.title.toLowerCase).replaceAll(" ", "_") + index
                }
                className="bg-white rounded-[5px] pt-5 pl-5 pr-8 pb-8"
              >
                <div>
                  <Image
                    src={product.image}
                    alt=""
                    width={90}
                    height={90}
                    className="float-left mr-4"
                  />
                  <h3 className="text-xl text-black font-bold py-5">
                    {product.title}
                  </h3>

                  <span className="text-gray-900">{product.description}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
