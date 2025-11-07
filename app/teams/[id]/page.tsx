"use server";

import { fetchTeam, fetchPlayers } from "@/lib/data";
import PlayerList from "@/components/ui/player/PlayerList";
import Buttons from "@/components/ui/team/Buttons";
import CreatePlayer from "@/components/ui/player/CreatePlayer";

export default async function page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const team = await fetchTeam(id);
  const players = await fetchPlayers(id);

  return (
    <div className="flex flex-col">
      <p className="pt-4 text-center font-semibold text-3xl">{team.name}</p>
      <div className="mt-20 flex flex-col items-center justify-center gap-1">
        <CreatePlayer id={id} />
        {players.map((player) => (
          <PlayerList key={player.id} {...player} />
        ))}
      </div>
      <Buttons id={id} />
    </div>
  );
}
