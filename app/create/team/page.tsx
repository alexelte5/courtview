"use server";

import CreateForm from "@/app/ui/team/CreateForm";

const page = () => {
  return (
    <div className="flex flex-col">
      <p className="pt-4 text-center font-semibold text-3xl">
        Neues Team anlegen
      </p>
      <div className="pt-16 self-center">
        <CreateForm />
      </div>
    </div>
  );
};

export default page;
