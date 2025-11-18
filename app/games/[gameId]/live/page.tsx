import { fetchGame } from "@/lib/data";
import TeamSelectWrapper from "@/components/ui/live/TeamSelectWrapper";

interface PageProps {
  params: { gameId: string };
}

export default async function Page({ params }: PageProps) {
  const { gameId } = await params;
  const game = await fetchGame(gameId);

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

      {/* Client Component */}
      <TeamSelectWrapper
        options={[game.home_team, game.away_team]}
        gameId={gameId}
      />
    </div>
  );
}
