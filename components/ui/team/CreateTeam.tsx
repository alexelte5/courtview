"use client";

import Image from "next/image";
import Link from "next/link";

const TeamCard = () => {
  return (
    <Link href={`/create/team`}>
      <div className="flex flex-col items-center justify-start w-40 h-56 p-4 border border-gray-500 rounded-lg shadow-md gap-1">
        <Image
          src={"/addteam.png"}
          alt="Team hinzufügen"
          width={150}
          height={150}
          className="object-cover"
        />
        <p className="mt-2 text-center text-base font-semibold wrap-break-word">
          Team hinzufügen
        </p>
      </div>
    </Link>
  );
};

export default TeamCard;
