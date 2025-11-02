"use server";

import postgres from "postgres";
import { revalidatePath } from "next/cache";
import {redirect} from "next/navigation";
import { z } from "zod";

const sql = postgres(process.env.POSTGRES_URL!);

const TeamFormSchema = z.object({
  name: z.string(),
  logo: z.string()
});

const PlayerFormSchema = z.object({
  teamName: z.string(),
  name: z.string(),
  position: z.enum(['Setter', 'Opposite', 'Middle Blocker', 'Outside Hitter', 'Libero']),
  number: z.string()
});

const GameFormSchema = z.object({
  home: z.number(),
  away: z.number(),
  date: z.date(),
  location: z.string()
})

export async function createTeam(formData: FormData) {
  const rawName = formData.get("name");
  const rawLogo = formData.get("logo");

  const name =
    typeof rawName === "string" ? rawName.trim() : "";
  const logo =
    typeof rawLogo === "string" && rawLogo.trim() !== ""
      ? rawLogo.trim()
      : null;

  await sql`INSERT INTO team (name, logo) VALUES (${name}, ${logo})`;

  revalidatePath('/create/team');
  redirect('/');
}

export async function deleteTeam(id: string) {
  await sql`DELETE FROM team WHERE id=${id}`;
  redirect('/')
}

export async function createPlayer(formData: FormData) {
  const rawTeamName = formData.get("teamname");
  const rawPlayerName = formData.get("playername");
  const rawPosition = formData.get("position");
  const rawNumber = formData.get("number");

  const teamName = typeof rawTeamName === "string" ? rawTeamName.trim(): "";
  const playerName = typeof rawPlayerName === "string" ? rawPlayerName.trim(): "";
  const position = typeof rawPosition === "string" ? rawPosition.trim(): "";
  const number = typeof rawNumber === "string" ? Number(rawNumber) : null;

  const result = await sql`INSERT INTO player (team_id, name, position, number) SELECT id, ${playerName}, ${position}, ${number} FROM team WHERE name=${teamName} RETURNING team_id;`;

  if (result.length === 0) {
    throw new Error("Team nicht gefunden");
  }
  const teamId = result[0].team_id;

  revalidatePath('/create/player');
  redirect(`/teams/${teamId}`);
}

export async function deletePlayer(id: string, teamId: string) {
  await sql`DELETE FROM player WHERE id=${id}`;
  redirect(`/teams/${teamId}`);
}

export async function createGame(formData: FormData) {
  
}

export async function deleteGame(id: string) {
  await sql`DELETE FROM game WHERE id=${id}`;
  redirect(`/games`);
}