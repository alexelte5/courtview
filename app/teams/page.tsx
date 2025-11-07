"use server";

import type { Team } from "@/types";
import TeamCard from "@/components/ui/team/TeamCard";
import CreateButton from "@/components/ui/team/CreateTeam";
import { fetchTeams } from "@/lib/data";

export default async function Home() {
  const teams = await fetchTeams();

  return (
    <div>
      <p className="pt-4 text-center font-semibold text-3xl">Teams</p>
      <div className="flex flex-wrap items-center justify-center gap-10 p-4 pt-8">
        <CreateButton />
        {teams.map((team) => (
          <TeamCard
            key={team.id}
            id={team.id}
            name={team.name}
            logo={team?.logo}
          />
        ))}
      </div>
    </div>
  );
}
