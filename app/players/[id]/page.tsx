"use server";

import { fetchPlayer } from "@/lib/data";
import Buttons from "@/components/ui/player/Buttons";

export default async function page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const player = await fetchPlayer(id);

  return (
    <div className="flex flex-col">
      <p className="pt-4 text-center font-semibold text-3xl">{player.name}</p>
      <Buttons id={id} />
    </div>
  );
}
