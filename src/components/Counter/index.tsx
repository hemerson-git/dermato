import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Odometer = dynamic(import("react-odometerjs"), {
  ssr: false,
  loading: () => <></>,
});

export function Counter() {
  const [totalClients, setTotalClients] = useState(1000);
  const [totalXpYears, setTotalXpYears] = useState(0);
  const [totalBranches, setTotalBranches] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTotalClients(3000);
      setTotalXpYears(10);
      setTotalBranches(15);
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section
      className="
      relative before:content-[''] 
      before:absolute before:top-0 before:h-1/2 before:w-full before:bg-white before:left-0 "
    >
      <div
        className="
        container bg-gray-50 text-gray-900 font-bold flex flex-col justify-between py-12 gap-12 
        px-10 mx-auto text-center items-center relative z-10 sm:gap-0 sm:py-5 sm:flex-row 
      "
      >
        <div className="flex flex-1 flex-col sm:border-r border-secondary-500">
          <span className="text-black text-[52px]">
            +
            <Odometer value={totalClients} duration={2000} />
          </span>
          <span className="text-xl text-primary-500 sm:text-gray-900">
            Clientes satisfeitas
          </span>
        </div>

        <div className="flex flex-1 flex-col sm:border-r border-secondary-500">
          <span className="text-black text-[52px]">
            +<Odometer value={totalXpYears} duration={2000} />
          </span>
          <span className="text-xl text-primary-500 sm:text-gray-900">
            Anos de experiência
          </span>
        </div>

        <div className="flex flex-1 flex-col">
          <span className="text-black text-[52px]">
            +<Odometer value={totalBranches} duration={2000} />
          </span>
          <span className="text-xl text-primary-500 sm:text-gray-900">
            Filiais
          </span>
        </div>
      </div>
    </section>
  );
}
