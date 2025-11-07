import { createPlayer } from "@/lib/actions";
import Link from "next/link";

export default async function Form(name: { name: string }) {
  return (
    <form action={createPlayer}>
      <div className="card">
        <input
          type="text"
          placeholder="Teamname"
          name="teamname"
          required
          className="text-2xl"
          defaultValue={name.name}
        />
        <input
          type="text"
          placeholder="Spielername"
          name="playername"
          className="text-2xl"
        />
        <select
          name="position"
          required
          defaultValue=""
          className="text-2xl border rounded-xl p-2"
        >
          <option value="" disabled>
            Position wählen
          </option>
          <option value="Setter">Zuspieler</option>
          <option value="Middle Blocker">Mittelblocker</option>
          <option value="Outside Hitter">Außenangreifer</option>
          <option value="Opposite">Diagonalangreifer</option>
          <option value="Libero">Libero</option>
        </select>
        <input
          type="number"
          placeholder="Trikot Nummer"
          name="number"
          className="text-2xl"
        />
        <div className="flex pt-4 justify-between">
          <button type="submit" className="text-2xl hover:cursor-pointer">
            Erstellen
          </button>
          <Link href="/games" className="text-2xl">
            Abbrechen
          </Link>
        </div>
      </div>
    </form>
  );
}
