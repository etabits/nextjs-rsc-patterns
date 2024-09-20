export type Person = {
  name: string;
  age: number;
};

type ListPeopleProps = {
  Render: React.FC<Person>;
};

const getPeople = async (): Promise<Person[]> => [
  { name: "Sarah", age: 23 },
  { name: "Danial", age: 29 },
  { name: "Sam", age: 31 },
];

const ListPeople: React.FC<ListPeopleProps> = async ({ Render }) => {
  const people = await getPeople();
  return (
    <ul className="flex justify-around">
      {people.map((p, i) => (
        <Render key={i} {...p} />
      ))}
    </ul>
  );
};

export default ListPeople;
