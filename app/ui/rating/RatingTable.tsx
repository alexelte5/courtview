"use client";

import type { Player } from "@/types";

export default function Page({ players }: { players: Player[] }) {
  return (
    <div>
      {players.map((player) => (
        <p key={player.id}>{player.name}</p>
      ))}
    </div>
  );
}
