"use client";

import Rating from "@/components/Rating";
import Service from "@/components/Serivce";

export default function LiveData() {
  const players = [
    {
      id: 1,
      name: "Lisa Müller",
      number: 8,
      position: "Außenangriff",
      team_id: 0,
    },
    {
      id: 2,
      name: "Tom Schmidt",
      number: 3,
      position: "Mittelblocker",
      team_id: 0,
    },
    {
      id: 3,
      name: "Julia Fischer",
      number: 12,
      position: "Zuspielerin",
      team_id: 0,
    },
  ];

  return (
    <div>
      <Rating players={players} />
      <Service />
    </div>
  );
}
