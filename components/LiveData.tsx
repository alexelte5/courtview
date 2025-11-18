"use client";

import ServiceCanvas from "@/components/Serivce";
import RatingTable from "./RatingTable";
import { Player, Rating, Service } from "@/types";

type Props = {
  players: Player[];
  ratings: Rating[];
  services: Service[]
  gameId: string;
};

export default function LiveData({ players, ratings, services, gameId }: Props) {
  return (
    <div>
      <RatingTable players={players} ratings={ratings} gameId={gameId} />
      <ServiceCanvas players={players} services={services} gameId={gameId}/>
    </div>
  );
}
