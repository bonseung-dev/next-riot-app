import { fetchChampionDetail } from "@/utils/serverApi";
import { ChampionDetail } from "@/types/ChampionDetail"; // 새로 만든 타입 사용

type Props = {
  params: { id: string };
};

const ChampionDetailPage = async ({ params }: Props) => {
  const championData = await fetchChampionDetail(params.id);
  const champion: ChampionDetail = championData.data[params.id]; // ✅ 타입 적용

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{champion.name}</h1>
      <h2 className="text-xl text-gray-600">{champion.title}</h2>
      <p className="mt-4">{champion.blurb}</p>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Abilities</h3>
        {champion.spells.map((spell) => (
          <div key={spell.id} className="mt-2">
            <p className="font-bold">{spell.name}</p>
            <p>{spell.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChampionDetailPage;
