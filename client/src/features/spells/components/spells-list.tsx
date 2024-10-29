import { Link } from 'react-router-dom';
import type { Spell } from '@magic-place/server/src/lib/constants';

import { ROUTES } from '@/config/routes';

type SpellsListProps = {
  spells: Spell[];
};

export function SpellsList({ spells }: SpellsListProps) {
  return (
    <ul>
      {spells.map((spell) => (
        <li key={spell.spellName}>
          <Link to={ROUTES.viewSpellRoute({ spellName: spell.spellName })}>{spell.spellName}</Link>
          <p>{spell.book}</p>
          <p>{spell.description}</p>
        </li>
      ))}
    </ul>
  );
}
