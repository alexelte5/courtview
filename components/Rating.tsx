"use client";
import { useState } from "react";

// Kategorien laut deiner DB
type Kategorie = "Aufschlag" | "Annahme" | "Angriff" | "Block" | "Abwehr";
// Bewertungsstufen
type Bewertung = "--" | "-" | "o" | "+" | "++";

// Eine Kategorie enthält Zähler für jede Bewertungsstufe
type KategorieStats = Record<Bewertung, number>;

// Ein Spieler hat Stats für jede Kategorie
interface Spieler {
  id: number;
  name: string;
  stats: Record<Kategorie, KategorieStats>;
}

// Initialwerte für eine Kategorie (alle Bewertungen = 0)
const initialKategorieStats: KategorieStats = {
  "--": 0,
  "-": 0,
  o: 0,
  "+": 0,
  "++": 0,
};

export default function VolleyballStatsTable() {
  // Beispielhafte Initialdaten – du würdest die Spieler aus DB/API holen
  const [spieler, setSpieler] = useState<Spieler[]>([
    {
      id: 1,
      name: "Spieler 1",
      stats: {
        Aufschlag: { ...initialKategorieStats },
        Annahme: { ...initialKategorieStats },
        Angriff: { ...initialKategorieStats },
        Block: { ...initialKategorieStats },
        Abwehr: { ...initialKategorieStats },
      },
    },
    {
      id: 2,
      name: "Spieler 2",
      stats: {
        Aufschlag: { ...initialKategorieStats },
        Annahme: { ...initialKategorieStats },
        Angriff: { ...initialKategorieStats },
        Block: { ...initialKategorieStats },
        Abwehr: { ...initialKategorieStats },
      },
    },
  ]);

  // Hilfsarrays für Rendering
  const kategorien: Kategorie[] = [
    "Aufschlag",
    "Annahme",
    "Angriff",
    "Block",
    "Abwehr",
  ];
  const bewertungen: Bewertung[] = ["--", "-", "o", "+", "++"];

  /**
   * ↑ Diese Funktion wird aufgerufen, wenn du z. B. auf „Angriff ++“ klickst.
   * Sie erhöht nur den passenden Zähler im State.
   */
  const increment = (
    spielerId: number,
    kategorie: Kategorie,
    bewertung: Bewertung
  ) => {
    setSpieler((prev) =>
      prev.map((s) =>
        s.id === spielerId
          ? {
              ...s,
              stats: {
                ...s.stats,
                [kategorie]: {
                  ...s.stats[kategorie],
                  [bewertung]: s.stats[kategorie][bewertung] + 1,
                },
              },
            }
          : s
      )
    );
  };

  return (
    <table
      style={{
        borderCollapse: "collapse",
        width: "100%",
        textAlign: "center",
      }}
    >
      <thead>
        <tr>
          <th style={{ border: "1px solid #000" }}>Spieler</th>
          {kategorien.map((kat) => (
            <th key={kat} style={{ border: "1px solid #000" }}>
              {kat}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {spieler.map((s) => (
          <tr key={s.id}>
            <td style={{ border: "1px solid #000", fontWeight: "bold" }}>
              {s.name}
            </td>

            {kategorien.map((kat) => (
              <td key={kat} style={{ border: "1px solid #000" }}>
                {bewertungen.map((b) => (
                  <button
                    key={b}
                    onClick={() => increment(s.id, kat, b)}
                    style={{
                      margin: "2px",
                      padding: "4px 6px",
                      fontSize: "0.9rem",
                      cursor: "pointer",
                    }}
                  >
                    {b} ({s.stats[kat][b]})
                  </button>
                ))}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
