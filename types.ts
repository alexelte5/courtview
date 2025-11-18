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

export type GameSet = {
    id: number;
    game_id: number;
    set_number: number;
    home_points: number;
    away_points: number;
}

export type Service = {
    id?: number;
    player_id: number;
    game_id: number;
    start_x: number;
    end_x: number;
    start_y: number;
    end_y: number;
}

export type Rating = {
    id?: number;
    player_id: number;
    attack_pp: number;
    attack_p: number;
    attack_o: number;
    attack_m: number;
    attack_mm: number;
    service_pp: number;
    service_p: number;
    service_o: number;
    service_m: number;
    service_mm: number;
    block_pp: number;
    block_p: number; 
    block_o: number;
    block_m: number;
    block_mm: number;
    receive_pp: number;
    receive_p: number;
    receive_o: number;
    receive_m: number;
    receive_mm: number;
    defense_pp: number;
    defense_p: number;
    defense_o: number;
    defense_m: number;
    defense_mm: number;
}