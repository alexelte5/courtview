-- 🏐 Teams
INSERT INTO team (name)
VALUES 
  ('Volleystars Berlin'),
  ('Spikers Hamburg'),
  ('Blockbusters München');

-- 👤 Players
INSERT INTO player (team_id, name, number, position)
VALUES
  (1, 'Max Schröder', 7, 'Setter'),
  (1, 'Tobias Klein', 5, 'Outside Hitter'),
  (2, 'Jonas Fischer', 10, 'Middle Blocker'),
  (2, 'Lukas Weber', 3, 'Opposite'),
  (3, 'Patrick Hoffmann', 9, 'Libero');

-- 🏟️ Matches
INSERT INTO game (home_team_id, away_team_id, date)
VALUES
  (1, 2, '2025-10-20 18:00:00+02'),
  (2, 3, '2025-10-23 19:30:00+02');

-- 🧮 Match Sets
INSERT INTO game_set (game_id, set_number, home_points, away_points)
VALUES
  (1, 1, 25, 21),
  (1, 2, 23, 25),
  (1, 3, 25, 18),
  (1, 4, 25, 22),
  (2, 1, 26, 24),
  (2, 2, 25, 19),
  (2, 3, 22, 25),
  (2, 4, 25, 20);

-- 🎯 Services (Beispielhafte Koordinaten)
INSERT INTO service (player_id, game_id, start_x, start_y, end_x, end_y)
VALUES
  (1, 1, 1.2, 0.5, 7.5, 2.0),
  (2, 1, 1.1, 1.0, 8.0, 2.5),
  (3, 2, 1.3, 0.8, 7.8, 3.2),
  (4, 2, 1.0, 0.7, 8.2, 2.1);

-- ⭐ Ratings (vereinfachte Testdaten)
INSERT INTO rating (
    player_id, game_id,
    attack_pp, attack_p, attack_o, attack_m, attack_mm,
    service_pp, service_p, service_o, service_m, service_mm,
    block_pp, block_p, block_o, block_m, block_mm,
    receive_pp, receive_p, receive_o, receive_m, receive_mm,
    defense_pp, defense_p, defense_o, defense_m, defense_mm
)
VALUES
  (1, 1, 3, 5, 4, 2, 1, 4, 6, 3, 1, 0, 2, 5, 1, 0, 0, 4, 6, 1, 2, 3, 4, 2, 0, 2, 1),
  (2, 1, 4, 4, 3, 2, 0, 3, 4, 5, 2, 0, 1, 6, 2, 0, 0, 5, 4, 2, 1, 3, 5, 3, 0, 1, 0),
  (3, 2, 2, 5, 5, 3, 1, 2, 3, 4, 2, 1, 0, 5, 2, 1, 0, 4, 6, 1, 1, 2, 4, 2, 1, 0, 3),
  (4, 2, 5, 6, 2, 1, 0, 4, 5, 3, 1, 0, 3, 4, 1, 0, 0, 6, 5, 2, 1, 4, 3, 1, 0, 1, 1);
