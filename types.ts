export type Team = {
    id: number;
    name: string;
    logo?: string;
}

export type Player = {
    id: number;
    team_id: number;
    name?: string;
    position?: string;
    number?: number;
    image?: string;
}

export type Game = {
    id: number;
    home_team: string;
    away_team: string;
    date?: string;
    location?: string;
}