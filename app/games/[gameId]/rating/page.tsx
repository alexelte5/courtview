import { fetchPlayersByTeamname, fetchTeams } from "@/app/lib/data";
import TeamSelect from "@/app/ui/rating/TeamSelect";
import RatingTable from "@/app/ui/rating/RatingTable";

export default async function Page({
  searchParams,
}: {
  searchParams: { team?: string };
}) {
  const teams = await fetchTeams();
  const { team } = await searchParams;
  const players = team ? await fetchPlayersByTeamname(team) : [];

  return (
    <div>
      <TeamSelect teams={teams} selectedTeam={team} />
      <RatingTable players={players} />
    </div>
  );
}
