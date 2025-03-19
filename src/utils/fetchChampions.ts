import { DataDragonChampions } from "@/types/Champion";

const CHAMPION_API_URL =
  "https://ddragon.leagueoflegends.com/cdn/15.6.1/data/ko_KR/champion.json";

export const fetchChampions = async (): Promise<DataDragonChampions> => {
  const response = await fetch(CHAMPION_API_URL, {
    next: { revalidate: 86400 }, // ISR 적용
  });

  if (!response.ok) {
    throw new Error("Failed to fetch champion data");
  }

  return response.json();
};
