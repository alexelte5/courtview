"use client";

import { Player, Rating } from "@/types";
import { useEffect, useState } from "react";

type Props = {
  players: Player[];
  ratings: Rating[];
  gameId: string;
};

const ratingFieldMap: Record<string, Record<string, keyof Rating>> = {
  Angriff: {
    "++": "attack_pp",
    "+": "attack_p",
    o: "attack_o",
    "-": "attack_m",
    "--": "attack_mm",
  },
  Angabe: {
    "++": "service_pp",
    "+": "service_p",
    o: "service_o",
    "-": "service_m",
    "--": "service_mm",
  },
  Annahme: {
    "++": "receive_pp",
    "+": "receive_p",
    o: "receive_o",
    "-": "receive_m",
    "--": "receive_mm",
  },
  Abwehr: {
    "++": "defense_pp",
    "+": "defense_p",
    o: "defense_o",
    "-": "defense_m",
    "--": "defense_mm",
  },
  Block: {
    "++": "block_pp",
    "+": "block_p",
    o: "block_o",
    "-": "block_m",
    "--": "block_mm",
  },
};

export default function RatingTable({ players, ratings, gameId }: Props) {
  const [data, setData] = useState<Rating[]>(ratings);
  const categories = [
    "Angriff",
    "Angabe",
    "Annahme",
    "Abwehr",
    "Block",
  ] as const;
  const subRatings = ["++", "+", "o", "-", "--"] as const;

  const handleIncrement = (
    playerId: number,
    category: string,
    subrating: string,
    delta: number = 1,
  ) => {
    const field = ratingFieldMap[category][subrating];
    setData((prev) =>
      prev.map((r) =>
        r.player_id === playerId
          ? { ...r, [field]: (r[field] as number) + delta }
          : r
      )
    );
  };

  useEffect(() => {
    const stored = localStorage.getItem("ratings");
    if (stored) {
      try {
        setData(JSON.parse(stored));
      } catch {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ratings", JSON.stringify(data)); 
  }, [data]);

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>Spieler</th>
          {categories.map((cat) => (
            <th key={cat} colSpan={5} className="text-center">
              {cat}
            </th>
          ))}
        </tr>
        <tr>
          <th></th>
          {categories.map((cat) =>
            subRatings.map((sub) => <th key={`${cat}-${sub}`}>{sub}</th>)
          )}
        </tr>
      </thead>

      <tbody>
        {players.map((p) => {
          const rating = data.find((r) => r.player_id === p.id);
          return (
            <tr key={p.id}>
              <td>{p.name}</td>

              {categories.map((cat) =>
                subRatings.map((sub) => {
                  const field = ratingFieldMap[cat][sub];
                  const value = rating ? (rating[field] as number) : 0;

                  return (
                    <td key={`${p.id}-${cat}-${sub}`}>
                      <button
                        onClick={() => handleIncrement(p.id, cat, sub)}
                        onContextMenu={(e) => {
                          e.preventDefault();
                          handleIncrement(p.id, cat, sub, -1);
                        }}
                        className="border rounded px-2 py-1"
                      >
                        {value}
                      </button>
                    </td>
                  );
                })
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
