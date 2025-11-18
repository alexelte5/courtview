"use client";

import { useState, useEffect } from "react";
import TeamSelect from "./TeamSelect"; // dein Select UI
import LiveData from "@/components/LiveData";
import {
  fetchPlayersByTeamname,
  fetchRatingsByGameIdAndTeam,
  fetchServiceByGameIdAndTeam,
} from "@/lib/data";
import { Player, Rating, Service } from "@/types";

interface Props {
  options: string[];
  gameId: string;
}

export default function TeamSelectWrapper({ options, gameId }: Props) {
  const [team, setTeam] = useState<string>("");
  const [players, setPlayers] = useState<Player[]>([]);
  const [ratings, setRatings] = useState<Rating[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!team) return;

    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        const resultPlayers = await fetchPlayersByTeamname(team);
        if (!resultPlayers || resultPlayers.length === 0) {
          throw new Error(`Keine Spieler für das Team: ${team} gefunden`);
        }

        let resultRatings: Rating[];
        let resultRatingsDB = await fetchRatingsByGameIdAndTeam(gameId, team);
        if (!resultRatingsDB || resultRatingsDB.length === 0) {
          resultRatings = initializeRatings(resultPlayers, gameId);
        } else {
          resultRatings = [...resultRatingsDB];
        }

        let resultService: Service[];
        let resultServiceDB = await fetchServiceByGameIdAndTeam(gameId, team);

        setPlayers(resultPlayers);
        setRatings(resultRatings);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [team]);

  function initializeRatings(players: Player[], gameId: string): Rating[] {
    return players.map((player) => ({
      player_id: player.id,
      game_id: gameId,
      attack_pp: 0,
      attack_p: 0,
      attack_o: 0,
      attack_m: 0,
      attack_mm: 0,
      service_pp: 0,
      service_p: 0,
      service_o: 0,
      service_m: 0,
      service_mm: 0,
      block_pp: 0,
      block_p: 0,
      block_o: 0,
      block_m: 0,
      block_mm: 0,
      receive_pp: 0,
      receive_p: 0,
      receive_o: 0,
      receive_m: 0,
      receive_mm: 0,
      defense_pp: 0,
      defense_p: 0,
      defense_o: 0,
      defense_m: 0,
      defense_mm: 0,
    }));
  }

  function initializeServices(players: Player[], gameId: string): Service[] {
    return players.map((player) => ({
      player_id: player.id,
      game_id: Number(gameId),
      start_x: 0,
      end_x: 0,
      start_y: 0,
      end_y: 0,
    }));
  }

  return (
    <div className="flex flex-col gap-4">
      <TeamSelect options={options} selectedTeam={team} setTeam={setTeam} />
      {loading && <p>Lade Spieler und Ratings...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {team && !loading && !error && (
        <div>
          <LiveData
            players={players}
            ratings={ratings}
            services={services}
            gameId={gameId}
          />
        </div>
      )}
    </div>
  );
}
