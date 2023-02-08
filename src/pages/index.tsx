import Head from "next/head";
import Image from "next/image";

// Components
import { CardIcon } from "@/components/CardIcon";
import { Counter } from "@/components/Counter";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { Accordion } from "@/components/Accordion";
import { CardCostumer } from "@/components/CardCostumer";
import { Slider } from "@/components/Slider";

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

const accordionItems = [
  {
    title: "Como se preparar para a consulta",
    text:
      "Anote todas as suas dúvidas caso esqueça na hora da consulta." +
      "Deixe as unhas livres de esmaltes e o rosto limpo, sem maquiagem" +
      "para não interferir na análise.",
  },
  {
    title: "Com que frequência devo ir ao dermatologista?",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta," +
      "deleniti! Adipisci tempora iusto dolores quas accusantium architecto" +
      "blanditiis possimus libero. Molestiae obcaecati ipsam minima" +
      "reprehenderit dolores culpa nemo maxime voluptas?",
  },
  {
    title: "Preciso de encaminhamento para consulta",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta," +
      "deleniti! Adipisci tempora iusto dolores quas accusantium architecto" +
      "blanditiis possimus libero. Molestiae obcaecati ipsam minima" +
      "reprehenderit dolores culpa nemo maxime voluptas?",
  },
  {
    title: "O que um dermatologista faz em uma consulta?",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta," +
      "deleniti! Adipisci tempora iusto dolores quas accusantium architecto" +
      "blanditiis possimus libero. Molestiae obcaecati ipsam minima" +
      "reprehenderit dolores culpa nemo maxime voluptas?",
  },
  {
    title: "O que devo esperar de uma análise de pele?",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta," +
      "deleniti! Adipisci tempora iusto dolores quas accusantium architecto" +
      "blanditiis possimus libero. Molestiae obcaecati ipsam minima" +
      "reprehenderit dolores culpa nemo maxime voluptas?",
  },
];

export default function Home() {
  return (
    <div className="bg-bg-theme-500 min-h-screen text-gray-100">
      <Head>
        <title>Dermato</title>
      </Head>

      <Header />

      <main className="">
        <Hero />
        <Counter />

        <section className="pt-20 pb-16 px-10 container">
          <h2 className="text-primary-500 font-bold text-2xl sm:text-5xl pb-[60px] text-center">
            Tratamentos estéticos
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-14 odd:text-red-500">
            {products.map((product, index) => (
              <CardIcon
                description={product.description}
                imageURL={product.image}
                title={product.title}
                isOdd={index % 2 === 0}
                key={
                  String(product.title.toLowerCase).replaceAll(" ", "_") + index
                }
              />
            ))}
          </div>
        </section>

        <section className="pt-20 pb-16 px-10 bg-white">
          <div className="container flex flex-col items-center sm:flex-row gap-5">
            <div className="hidden sm:flex sm:flex-[4] justify-center">
              <Image
                src="/picture.png"
                width={399}
                height={598}
                alt=""
                draggable={false}
              />
            </div>

            <div className="text-xl text-gray-900 sm:flex-[6]">
              <h2 className="text-2xl sm:text-5xl text-primary-500 font-bold mb-[38px]">
                Tratamentos dermatológicos
              </h2>

              <p className="mb-5">
                Há alguns anos, quando se falava em tecnologia, ela era
                associada apenas à engenharia e à ciência. Hoje a situação é
                diferente: nossas clientes já desfrutam de diversos tratamentos
                modernos, com segurança e rápida recuperação.
              </p>

              <ul className="text-lg text-black mb-5 list-disc list-inside">
                <li>Ultraformer III</li>
                <li>Laser de CO2</li>
                <li>Fotona 4D</li>
                <li>Reveal Imager</li>
              </ul>

              <p className="mb-6">
                Nossa clínica conta com softwares, sistemas e câmeras de alta
                resolução que nos ajudam a diagnosticar, mapear e documentar
                doenças da pele, cabelos e unhas, permitindo um diagnóstico e
                tratamento mais preciso.
              </p>

              <Button>Agendar Consulta</Button>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-16 px-10 bg-white text-black">
          <div className="container flex gap-20 items-start">
            <div className="sm:flex-[6]">
              <Accordion items={accordionItems} />
            </div>

            <div className="hidden sm:flex sm:flex-[4]">
              <Image
                src="/picture_2.png"
                width={399}
                height={598}
                draggable={false}
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="pt-20 pb-16 px-10">
          <div className="container">
            <h2 className="text-2xl sm:text-4xl text-primary-500 font-bold mb-20 text-center">
              O que as nossas clientes dizem?
            </h2>

            <Slider>
              <CardCostumer
                name="Débora Souza"
                description="Really good quality, lovely packaging & delivery. Love it!"
                imageURL="/customer.jpg"
                stars={5}
                className="keen-slider__slide"
              />

              <CardCostumer
                name="Daiene Rodrigues"
                description="Really good quality, lovely packaging & delivery. Love it!"
                imageURL="/customer_2.jpg"
                stars={5}
                className="keen-slider__slide"
              />

              <CardCostumer
                name="Débora Souza"
                description="Really good quality, lovely packaging & delivery. Love it!"
                imageURL="/customer.jpg"
                className="keen-slider__slide"
                stars={5}
              />

              <CardCostumer
                name="Daiene Rodrigues"
                description="Really good quality, lovely packaging & delivery. Love it!"
                imageURL="/customer_2.jpg"
                stars={5}
                className="keen-slider__slide"
              />
            </Slider>
          </div>
        </section>
      </main>
    </div>
  );
}
