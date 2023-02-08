import Image from "next/image";

type Props = {
  imageURL: string;
  name: string;
  description: string;
  stars: 1 | 2 | 3 | 4 | 5;
  className?: string;
};

export function CardCostumer({
  imageURL,
  name,
  description,
  stars,
  className,
}: Props) {
  return (
    <div
      className={`flex items-center gap-3 sm:gap-5 text-gray-900 bg-white p-5 sm:p-10 rounded-[5] ${className}`}
    >
      <Image
        src={imageURL}
        alt={name}
        width={170}
        height={170}
        className="rounded-full w-[85px] h-[85px] sm:w-[170px] sm:h-[170px]"
      />

      <div className="flex flex-col">
        <span className="font-bold text-sm sm:text-xl text-black mb-3 border-b-2 pb-2 border-gray-900">
          {name}
        </span>
        <span className="sm:pr-8 text-xs sm:text-lg">{description}</span>
      </div>
    </div>
  );
}
