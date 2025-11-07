"use client";

import type { Player } from "@/types";
import Link from "next/link";

const PlayerList = ({ id, name, position, number }: Player) => {
  return (
    <Link href={`/players/${id}`}>
      <div>
        {number} | {name} | {position}
      </div>
    </Link>
  );
};

export default PlayerList;
