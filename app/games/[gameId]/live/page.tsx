import { fetchGame } from "@/lib/data";
import TeamSelect from "@/components/ui/live/TeamSelect";
import LiveData from "@/components/LiveData";

interface PageProps {
  params: { gameId: string };
  searchParams?: { team?: string };
}

export default async function Page({ params, searchParams }: PageProps) {
  const { gameId } = await params;
  const game = await fetchGame(gameId);
  const team = await searchParams?.team;

  return (
    <div className="flex flex-col">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">
            {game.home_team} vs {game.away_team}
          </h1>
          <p className="text-sm text-gray-500">{game.location}</p>
        </div>
      </header>
      <TeamSelect options={[game.home_team, game.away_team]} />
      <LiveData />
    </div>
  );
}
