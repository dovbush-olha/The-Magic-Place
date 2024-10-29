import type { Spell } from '@magic-place/server/src/lib/constants';

type SpellProps = {
  readonly spell: Spell;
};

export function Spell({ spell }: SpellProps) {
  return (
    <div>
      <h1>Spell {spell.spellName}</h1>
      <p>{spell.description}</p>
      <p>{spell.book}</p>
    </div>
  );
}
