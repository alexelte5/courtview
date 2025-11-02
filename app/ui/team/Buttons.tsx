import { deleteTeam } from "@/app/lib/actions";

export default function Buttons({ id }: { id: string }) {
  const deleteTeamWithId = deleteTeam.bind(null, id);
  return (
    <form action={deleteTeamWithId}>
      <button type="submit" className="hover:cursor-pointer">Team löschen</button>
    </form>
  );
}
