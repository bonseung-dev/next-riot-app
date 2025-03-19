"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { fetchItems } from "@/utils/fetchItems";
import { Item, DataDragonItems } from "@/types/Item";

interface ItemsListProps {
  initialData: DataDragonItems;
}

export default function ItemsList({ initialData }: ItemsListProps) {
  const { data } = useQuery<DataDragonItems>({
    queryKey: ["items"],
    queryFn: fetchItems,
    initialData,
    staleTime: Infinity,
  });

  const items = Object.values(data.data); // Items 객체 배열

  return (
    <ul>
      {items.map((item: Item) => (
        <li key={item.id}>
          <Image
            width={100}
            height={100}
            src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/${item.image.full}`}
            alt={item.name}
          />
          <h2>{item.name}</h2>
          <span dangerouslySetInnerHTML={{ __html: item.description }} />
          <span>{item.plaintext}</span>
        </li>
      ))}
    </ul>
  );
}
