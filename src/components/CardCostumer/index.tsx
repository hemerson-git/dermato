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
      className={`flex items-center gap-5 text-gray-900 px-10 bg-white p-10 rounded-[5] ${className}`}
    >
      <Image
        src={imageURL}
        alt={name}
        width={170}
        height={170}
        className="rounded-full"
      />

      <div className="flex flex-col">
        <span className="font-bold text-xl text-black mb-3 border-b-2 pb-2 border-gray-900">
          {name}
        </span>
        <span className="pr-8 text-lg">{description}</span>
      </div>
    </div>
  );
}
