import Link from "next/link";
import { fetchGames } from "@/app/lib/data";
import GameList from "@/app/ui/game/GameList";

export default async function Page() {
  const games = await fetchGames();

  return (
    <div>
      <p className="pt-4 text-center font-semibold text-3xl">Spiele</p>
      <div className="flex flex-wrap items-center justify-center gap-10 p-4 pt-8">
        <GameList games={games} />
      </div>
      <div>
        <Link href="/create/game">Neues Spiel hinzufügen</Link>
      </div>
    </div>
  );
}
