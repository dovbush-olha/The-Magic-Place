import { Link } from 'react-router-dom';

import { ROUTES } from '@/app/routes/config';
import { serverApiClient } from '@/lib/trpc/constants.ts';

export function SpellsList() {
  const { data } = serverApiClient.getSpells.useQuery();

  return (
    <ul>
      {data?.spells.map((spell) => (
        <li key={spell.spellName}>
          <Link to={ROUTES.viewSpellRoute({ spellName: spell.spellName })}>{spell.spellName}</Link>
          <p>{spell.book}</p>
          <p>{spell.description}</p>
        </li>
      ))}
    </ul>
  );
}
