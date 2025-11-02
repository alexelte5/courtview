"use server";

import type { Team, Player, Game } from "@/types"
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!);

export async function fetchTeams() {
    try {
        const data = await sql<Team[]>`SELECT id, name, logo FROM team ORDER BY id;`
        return data;
    } catch (error) {
        console.error('Database Error: ', error);
        throw new Error('Failed to fetch teams.');
    }
}

export async function fetchTeam(id: string) {
    try {
        const data = await sql<Team[]>`SELECT id, name, logo FROM team WHERE id=${id};`
        return data[0];
    } catch (error) {
        console.error('Database Error: ', error);
        throw new Error('Failed to fetch team.');
    }
}

export async function fetchPlayers(team_id: string) {
    try {
        const data = await sql<Player[]>`SELECT id, team_id, name, number, position, image FROM player WHERE team_id=${team_id}`
        return data;
    } catch (error) {
        console.error('Database error: ', error);
        throw new Error('Failed to fetch players.');
    }
}

export async function fetchPlayersByTeamname(team_name: string) {
    try {
        const data = await sql<Player[]>`SELECT p.id, p.name, p.number, p.position FROM player p JOIN team t ON p.team_id = t.id WHERE t.name = ${team_name}`;
        return data;
    } catch (error) {
        console.error('Databse error: ', error);
        throw new Error('Faield to fetch players.');
    }
}

export async function fetchAllPlayers() {
    try {
        const data = await sql<Player[]>`SELECT id, team_id, name, number, position, image FROM player`;
        return data;
    } catch (error) {
        console.error('Database error: ', error);
        throw new Error('Failed to fetch all players')
    }
}

export async function fetchPlayer(id: string) {
    try {
        const data = await sql<Player[]>`SELECT id, team_id, name, number, position, image FROM player WHERE id=${id}`;
        return data[0];
    } catch (error) {
        console.error('Database error: ', error);
        throw new Error('Failed to fetch player');
    }
}

export async function fetchGames() {
    try {
        const data = await sql<Game[]>`SELECT g.id, ht.name home_team, at.name away_team, g.date, g.location FROM game g JOIN team ht ON g.home_team_id = ht.id JOIN team at ON g.away_team_id = at.id`;
        return data; 
    } catch (error) {
        console.error('Database error: ', error);
        throw new Error('Failed to fetch games');
    }
}

export async function fetchGame(game_id: string) {
    try {
        const data = await sql<Game[]>`SELECT g.id, ht.name home_team, at.name away_team, g.date, g.location FROM game g JOIN team ht ON g.home_team_id = ht.id JOIN team at ON g.away_team_id = at.id WHERE g.id = ${game_id}`;
        return data[0];
    } catch (error) {
        console.error('Database error: ', error);
        throw new Error('Failed to fetch game');
    }
}