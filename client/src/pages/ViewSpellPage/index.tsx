import { useParams } from 'react-router-dom';

import type { RouteParams } from '../../lib/routes/config';
import { serverApiClient } from '../../lib/trpc.tsx';

export function ViewSpellPage() {
  const { spellName } = useParams() as RouteParams['viewSpellParams'];
  const { data, isLoading, isFetching, isError } = serverApiClient.getSpell.useQuery({ spellName });

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error</span>;
  }

  if (!data?.spell) {
    return <span>Spell not found</span>;
  }

  return (
    <div>
      <h1>Spell {data.spell.spellName}</h1>
      <p>{data.spell.description}</p>
      <p>{data.spell.book}</p>
    </div>
  );
}
