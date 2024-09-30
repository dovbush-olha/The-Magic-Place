import { useParams } from 'react-router-dom';

import type { RouteParams } from '@/app/routes/config';
import { serverApiClient } from '@/lib/trpc/constants.ts';

export function Spell() {
  const { spellName } = useParams() as RouteParams['viewSpellParams'];
  const { data } = serverApiClient.getSpell.useQuery({ spellName });

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
