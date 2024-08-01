import { serverApiClient } from '../../lib/trpc';

export function AllIdeasPage() {
  const result = serverApiClient.getIdeas.useQuery();
  return (
    <div>
      <h1>All Ideas Page</h1>
    </div>
  );
}
