import { Player, Service } from "@/types";

type Props = {
  players: Player[],
  services: Service[],
  gameId: string,
}

export default function ServiceCanvas({players, services, gameId}: Props) {
  return <div>Hier ist Service</div>;
}
