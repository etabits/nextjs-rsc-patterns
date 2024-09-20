"use client";

import { useState } from "react";
import type { Person } from "./ListPeople";

const RenderPerson: React.FC<Person> = ({ name, age }) => {
  const [ageRevealed, setAgeRevealed] = useState(false);

  return (
    <div
      onClick={() => setAgeRevealed((r) => !r)}
      className={`cursor-pointer border rounded-sm inline p-2 m-4 text-center ${
        ageRevealed ? "border-solid" : "border-dotted"
      }`}
    >
      {name} - {ageRevealed ? age : age.toString().substring(0, 1) + "?"}
    </div>
  );
};

export default RenderPerson;
