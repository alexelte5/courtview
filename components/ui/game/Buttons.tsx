import { deleteGame } from "@/lib/actions";
import Link from "next/link";

export default async function Buttons({ id }: { id: string }) {
  const deleteGameWithId = deleteGame.bind(null, id);
  return (
    <div>
      <form action={deleteGameWithId}>
        <button type="submit" className="hover:cursor-pointer">
          Spiel löschen
        </button>
      </form>
      <Link href={`/games/${id}/live`}>Live</Link>
    </div>
  );
}
