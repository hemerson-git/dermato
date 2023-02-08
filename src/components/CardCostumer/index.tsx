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
        <span className="font-bold font-xl text-black mb-3">{name}</span>
        <span>{description}</span>
      </div>
    </div>
  );
}
