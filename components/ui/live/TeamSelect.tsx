"use client";

import { Dispatch, SetStateAction } from "react";

type Props = {
  options: string[];
  selectedTeam?: string;
  setTeam: Dispatch<SetStateAction<string>>;
};

export default function Select({ options, selectedTeam, setTeam }: Props) {

  function handleClick(team: string) {
    setTeam(team);
  }
  
  return (
    <div className="flex flex-col gap-2">
      <p className="font-semibold mb-2">Dein Team auswählen:</p>
      <div className="flex gap-2">
        {options.map((o, i) => {
          const isSelected = selectedTeam === o;
          return (
            <button
              key={i}
              onClick={() => handleClick(o)}
              disabled={isSelected}
              className={`
                px-4 py-2 rounded-lg font-semibold transition
                ${isSelected 
                  ? "bg-blue-500 text-white cursor-not-allowed" 
                  : "bg-gray-200 text-gray-800 hover:bg-blue-100"}
              `}
            >
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}
