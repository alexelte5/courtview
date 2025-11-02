import { deletePlayer } from "@/app/lib/actions";
import { fetchPlayer } from "@/app/lib/data";

export default async function Buttons({ id }: { id: string }) {
  const player = await fetchPlayer(id);
  const teamId = player.team_id.toString();
  const deletePlayerWithId = deletePlayer.bind(null, id, teamId);
  return (
    <form action={deletePlayerWithId}>
      <button type="submit" className="hover:cursor-pointer">
        Spieler löschen
      </button>
    </form>
  );
}
