"use client";

import Image from "next/image";
import Link from "next/link";

type TeamProps = {
  id: number;
  logo?: string;
  name: string;
};

const TeamCard = ({ id, logo, name }: TeamProps) => {
  return (
    <Link href={`/teams/${id}`}>
      <div className="flex flex-col items-center justify-start w-40 h-56 p-4 border rounded-lg shadow-md gap-1">
        <Image
          src={logo || "/file.svg"}
          alt={name}
          width={150}
          height={150}
          className="object-cover"
        />
        <p className="mt-2 text-center text-base font-semibold wrap-break-word">
          {name}
        </p>
      </div>
    </Link>
  );
};

export default TeamCard;
