import RenderAge from "./RenderAge";
import type { RenderPersonProps } from "./RenderPerson";

export type Person = {
  name: string;
  age: number;
};

type ListPeopleProps = {
  RenderPerson: React.FC<RenderPersonProps>;
};

const getPeople = async (): Promise<Person[]> => [
  { name: "Sarah", age: 23 },
  { name: "Dani", age: 29 },
  { name: "Sam", age: 31 },
];

const ListPeople: React.FC<ListPeopleProps> = async ({ RenderPerson }) => {
  const people = await getPeople();
  return (
    <ul className="flex justify-around">
      {people.map((person, i) => (
        <RenderPerson key={i} {...{ person, RenderAge }} />
      ))}
    </ul>
  );
};

export default ListPeople;
