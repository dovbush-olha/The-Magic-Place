import { Link } from 'react-router-dom';

import { ROUTES } from '@/lib/routes/config';

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
          <li key={spell.spellName}>
            <Link to={ROUTES.viewSpellRoute({ spellName: spell.spellName })}>{spell.spellName}</Link>
            <p>{spell.book}</p>
            <p>{spell.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
