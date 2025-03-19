import { ChampionDetail } from "@/types/ChampionDetail";

export const fetchChampionDetail = async (
  id: string
): Promise<{ data: Record<string, ChampionDetail> }> => {
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/15.6.1/data/ko_KR/champion/${id}.json`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch champion details for ${id}`);
  }

  return response.json();
};
