import { createGame } from "@/lib/actions";
import { fetchTeams } from "@/lib/data";
import Link from "next/link";

export default async function Form() {
  const teams = await fetchTeams();

  return (
    <form action={createGame}>
      <div className="card">
        <input
          list="teams"
          id="home"
          name="home"
          placeholder="Heimteam auswählen"
        />
        <input
          list="teams"
          id="away"
          name="away"
          placeholder="Gastteam auswählen"
        />
        <input placeholder="Ort" name="location" />
        <input type="datetime-local" name="date" />

        <datalist id="teams">
          {teams.map((team) => (
            <option value={team.name} key={team.id}></option>
          ))}
        </datalist>
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
