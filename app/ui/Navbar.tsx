"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <Link href="/teams">Teams</Link> | <Link href="/games">Games</Link>
    </nav>
  );
}
