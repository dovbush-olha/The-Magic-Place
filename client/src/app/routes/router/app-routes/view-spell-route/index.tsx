import { useParams } from 'react-router-dom';

import type { RouteParams } from '@/app/routes/config';
import { Spell } from '@/features/spells/components/spell.tsx';
import { serverApiClient } from '@/lib/trpc/constants.ts';

export function ViewSpellRoute() {
  const { spellName } = useParams() as RouteParams['viewSpellParams'];
  const { isLoading, isFetching, isError } = serverApiClient.getSpell.useQuery({ spellName });

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error</span>;
  }

  return <Spell />;
}
