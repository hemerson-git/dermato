import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  imageURL: string;
  isOdd: boolean;
};

export function CardIcon({ title, description, imageURL, isOdd }: CardProps) {
  return (
    <div className="bg-white rounded-[5px] pt-5 pl-5 pr-8 pb-8 hover:shadow-lg ">
      <div>
        <Image
          src={imageURL}
          alt=""
          width={90}
          height={89}
          className="float-left mr-4 h-auto"
        />
        <h3
          className={`text-xl font-bold py-5 ${
            isOdd ? "text-primary-500" : "text-black"
          }`}
        >
          {title}
        </h3>

        <span className="text-gray-900">{description}</span>
      </div>
    </div>
  );
}
