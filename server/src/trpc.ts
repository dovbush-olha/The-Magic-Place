import { initTRPC } from '@trpc/server';

const ideas = [
  {
    id: 1,
    title: 'Idea 1',
    description: 'Description 1',
  },
  {
    id: 2,
    title: 'Idea 2',
    description: 'Description 2',
  },
  {
    id: 3,
    title: 'Idea 3',
    description: 'Description 3',
  },
];

const t = initTRPC.create();

const router = t.router;
const publicProcedure = t.procedure;

export const appRouter = router({
  getIdeas: publicProcedure.query(() => {
    return { ideas };
  }),
});

export type AppRouter = typeof appRouter;
