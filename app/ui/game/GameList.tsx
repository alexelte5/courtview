import Link from "next/link";
import { Game } from "@/types";

export default function GameList(props: { games: Game[] }) {
  const games = props.games;

  return (
    <div className="flex flex-col hover:cursor-pointer">
      {games.map((game) => (
        <Link href={`/games/${game.id}`}>
          {game.home_team} : {game.away_team}
        </Link>
      ))}
    </div>
  );
}
