"use client";

import { useRouter } from "next/navigation";

export default function Select({ options }: { options: string[] }) {
  const router = useRouter();

  return (
    <div>
      <p>Dein Team Auswählen</p>
      {options.map((o, i) => (
        <div key={i}>
          <input
            type="radio"
            name="team"
            id="team"
            value={o}
            onChange={(e) => router.push(`?team=${e.target.value}`)}
          />
          <label htmlFor="team">{o}</label>
        </div>
      ))}
    </div>
  );
}
