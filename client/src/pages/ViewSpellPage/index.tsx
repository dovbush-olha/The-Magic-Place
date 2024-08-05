import { useParams } from 'react-router-dom';

export function ViewSpellPage() {
  const { spellName } = useParams();

  return (
    <div>
      <h1>Spell {spellName}</h1>
      <p>Description of spell 1...</p>
      <div>
        <p>Text paragraph 1 for spell 1</p>
        <p>Text paragraph 2 for spell 1</p>
        <p>Text paragraph 3 for spell 1</p>
      </div>
    </div>
  );
}
