import Image from "next/image";
import { ICardsProps } from "@/types/typeProps";

export const Cards: React.FC<ICardsProps> = ({ accommodationsFilter }) => {
  return (
    <ul className="p-3 bg-gray-200 flex flex-col gap-6 overflow-y-auto max-h-screen">
      {accommodationsFilter.length > 0 &&
        accommodationsFilter.map((el) => (
          <li key={el.id} className="  flex flex-col gap-2">
            <Image
              className="w-full rounded-md"
              width={200}
              height={200}
              alt="фото приміщення"
              src={el.photo}
            />
            <p>{el.accommodation}</p>
            <p> {el.place} </p>
            <p>{el.description}</p>
            <p>Вартість: {el.cost} грн.</p>
          </li>
        ))}
    </ul>
  );
};
