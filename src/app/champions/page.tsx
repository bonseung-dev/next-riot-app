import { fetchChampions } from "@/utils/fetchChampions";
import ChampionCard from "@/components/ChampionCard";

const ChampionsPage = async () => {
  const data = await fetchChampions();

  return (
    <div>
      <h1 className="text-2xl font-bold p-4">Champions</h1>
      <div className="grid grid-cols-4 gap-4 p-4">
        {Object.values(data.data).map((champion) => (
          <ChampionCard key={champion.id} champion={champion} />
        ))}
      </div>
    </div>
  );
};

export default ChampionsPage;
