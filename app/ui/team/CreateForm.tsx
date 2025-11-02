import { createTeam } from "@/app/lib/actions";
import Link from "next/link";

export default async function Form() {
  return (
    <form action={createTeam}>
      <div className="card">
        <input
          type="text"
          placeholder="Teamname"
          name="name"
          required
          className="text-2xl"
        />
        <div className="flex pt-4 justify-between">
          <button type="submit" className="text-2xl hover:cursor-pointer">
            Erstellen
          </button>
          <Link href="/" className="text-2xl">
            Abbrechen
          </Link>
        </div>
      </div>
    </form>
  );
}
