import { useParams } from 'react-router-dom';

import { Head } from '@/components/seo/head.tsx';
import type { RouteParams } from '@/config/routes';
import { Spell } from '@/features/spells/components/spell.tsx';
import { serverApiClient } from '@/lib/trpc/constants.ts';

export function ViewSpellRoute() {
  const { spellName } = useParams() as RouteParams['viewSpellParams'];
  const { isLoading, isFetching, isError, data } = serverApiClient.getSpell.useQuery({ spellName });

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error</span>;
  }

  return (
    <>
      {data?.spell ? (
        <>
          <Head title={data.spell.spellName} />
          <Spell spell={data?.spell} />
        </>
      ) : (
        <span>Spell not found</span>
      )}
    </>
  );
}
