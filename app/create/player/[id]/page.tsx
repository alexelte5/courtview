"use server";

import CreateForm from "@/components/ui/player/CreateForm";
import { fetchTeam } from "@/lib/data";

const page = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  const id = params.id;
  const team = await fetchTeam(id);
  const teamName = team.name;

  return (
    <div className="flex flex-col">
      <p className="pt-4 text-center font-semibold text-3xl">
        Neuen Spieler/in anlegen
      </p>
      <div className="pt-16 self-center">
        <CreateForm name={teamName} />
      </div>
    </div>
  );
};

export default page;
