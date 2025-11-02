"use client";

import { Team } from "@/types";
import { useRouter } from "next/navigation";

export default function Page({
  teams,
  selectedTeam,
}: {
  teams: Team[];
  selectedTeam?: string;
}) {
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const team = e.target.value;
    router.push(`/rating${team ? `?team=${team}` : ""}`);
  };

  return (
    <div>
      <select
        name="selectedTeam"
        defaultValue={selectedTeam || ""}
        onChange={handleChange}
        className="text-2xl border rounded-xl p-2"
      >
        <option value="" disabled>
          Team wählen
        </option>
        {teams.map((team) => (
          <option key={team.id} value={team.name}>
            {team.name}
          </option>
        ))}
      </select>
    </div>
  );
}
