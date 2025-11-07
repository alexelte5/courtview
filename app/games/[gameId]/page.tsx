import { fetchGame } from "@/lib/data";
import Buttons from "@/components/ui/game/Buttons";

export default async function Page(props: {
  params: Promise<{ gameId: string }>;
}) {
  const params = await props.params;
  const gameId = params.gameId;
  const game = await fetchGame(gameId);

  return (
    <div>
      <p className="pt-4 text-center font-semibold text-3xl">
        {game.home_team} vs. {game.away_team}
      </p>
      <Buttons id={gameId} />
    </div>
  );
}
