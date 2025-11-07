import CreateForm from "@/components/ui/game/CreateForm";

export default async function Page() {
  return (
    <div className="flex flex-col">
      <p className="pt-4 text-center font-semibold text-3xl">
        Neues Spiel anlegen
      </p>
      <div className="pt-16 self-center">
        <CreateForm />
      </div>
    </div>
  );
}
