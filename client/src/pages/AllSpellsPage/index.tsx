import { serverApiClient } from '../../lib/trpc';

export function AllSpellsPage() {
  const { data, isLoading, isFetching, isError } = serverApiClient.getSpells.useQuery();

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error</span>;
  }

  return (
    <div>
      <h1>All Spells Page</h1>
      <ul>
        {data?.spells.map((spell) => (
          <li key={spell.name}>
            <p>{spell.name}</p>
            <p>{spell.book}</p>
            <p>{spell.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
