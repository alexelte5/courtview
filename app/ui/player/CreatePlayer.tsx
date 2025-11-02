import Link from "next/link";

const TeamCard = ({ id }: { id: string }) => {
  return (
    <Link href={`/create/player/${id}`}>
        <p className="mt-2 text-center text-base font-semibold wrap-break-word">
          Spieler hinzufügen
        </p>
    </Link>
  );
};

export default TeamCard;
