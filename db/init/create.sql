CREATE TABLE team (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    logo TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE player (
    id SERIAL PRIMARY KEY,
    team_id INTEGER NOT NULL REFERENCES team(id) ON DELETE CASCADE,
    name TEXT,
    number INTEGER,
    position TEXT,
    image TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE game (
    id SERIAL PRIMARY KEY,
    home_team_id INTEGER NOT NULL REFERENCES team(id),
    away_team_id INTEGER NOT NULL REFERENCES team(id),
    date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    location TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CHECK(home_team_id <> away_team_id)
);

CREATE TABLE game_set (
    id SERIAL PRIMARY KEY,
    game_id INTEGER REFERENCES game(id) ON DELETE CASCADE,
    set_number INTEGER NOT NULL,
    home_points INTEGER NOT NULL,
    away_points INTEGER NOT NULL,
    CHECK (home_points <> away_points)
);

CREATE TABLE service (
    id SERIAL PRIMARY KEY,
    player_id INTEGER REFERENCES player(id),
    game_id INTEGER REFERENCES game(id),
    start_x DOUBLE PRECISION NOT NULL,
    end_x DOUBLE PRECISION NOT NULL,
    start_y DOUBLE PRECISION NOT NULL,
    end_y DOUBLE PRECISION NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE rating (
    id SERIAL PRIMARY KEY,
    player_id INTEGER REFERENCES player(id),
    game_id INTEGER REFERENCES game(id),
    attack_pp INTEGER,
    attack_p INTEGER,
    attack_o INTEGER,
    attack_m INTEGER,
    attack_mm INTEGER,
    service_pp INTEGER,
    service_p INTEGER,
    service_o INTEGER,
    service_m INTEGER,
    service_mm INTEGER,
    block_pp INTEGER,
    block_p INTEGER, 
    block_o INTEGER,
    block_m INTEGER,
    block_mm INTEGER,
    receive_pp INTEGER,
    receive_p INTEGER,
    receive_o INTEGER,
    receive_m INTEGER,
    receive_mm INTEGER,
    defense_pp INTEGER,
    defense_p INTEGER,
    defense_o INTEGER,
    defense_m INTEGER,
    defense_mm INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)