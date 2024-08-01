import { serverApiClient } from '../../lib/trpc';

export function AllIdeasPage() {
  const { data, isLoading, isFetching, isError } = serverApiClient.getIdeas.useQuery();

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error</span>;
  }

  return (
    <div>
      <h1>All Ideas Page</h1>
      <ul>
        {data.ideas.map((idea) => (
          <li key={idea.id}>
            <p>{idea.title}</p>
            <p>{idea.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
