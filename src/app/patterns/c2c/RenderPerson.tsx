"use client";

import { useState } from "react";
import type { Person } from "./ListPeople";

export type RenderPersonProps = {
  person: Person;
  RenderAge: React.FC<{
    children: number;
  }>;
};

const RenderPerson: React.FC<RenderPersonProps> = ({
  person: { name, age },
  RenderAge,
}) => {
  const [ageRevealed, setAgeRevealed] = useState(false);

  return (
    <div
      onClick={() => setAgeRevealed((r) => !r)}
      className={`cursor-pointer border rounded-sm inline p-2 m-4 ${
        ageRevealed ? "border-solid" : "border-dotted"
      }`}
    >
      {name} -{" "}
      {ageRevealed ? (
        <RenderAge>{age}</RenderAge>
      ) : (
        age.toString().substring(0, 1) + "?"
      )}
    </div>
  );
};

export default RenderPerson;
