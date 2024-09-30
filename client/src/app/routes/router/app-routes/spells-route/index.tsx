import { SpellsList } from '@/features/spells/components/spells-list.tsx';
import { serverApiClient } from '@/lib/trpc/constants.ts';

export function SpellsRoute() {
  const { isLoading, isFetching, isError } = serverApiClient.getSpells.useQuery();

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error</span>;
  }

  return (
    <div>
      <h1>All Spells Page</h1>
      <SpellsList />
    </div>
  );
}
