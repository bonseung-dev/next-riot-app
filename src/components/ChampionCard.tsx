import Link from "next/link";
import Image from "next/image";
import { Champion } from "@/types/Champion";

interface ChampionCardProps {
  champion: Champion;
}

const ChampionCard = ({ champion }: ChampionCardProps) => {
  return (
    <Link href={`/champions/${champion.id}`} passHref>
      <div className="border p-4 rounded-lg cursor-pointer hover:shadow-lg">
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/15.6.1/img/champion/${champion.image.full}`}
          alt={champion.name}
          width={120}
          height={120}
        />
        <h3 className="text-lg font-bold mt-2">{champion.name}</h3>
        <p className="text-sm text-gray-500">{champion.title}</p>
      </div>
    </Link>
  );
};

export default ChampionCard;
