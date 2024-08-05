import { initTRPC } from '@trpc/server';

const spells = [
  {
    name: 'revelio',
    book: 'Book 1',
    description: 'Description 1',
  },
  {
    name: 'flipendo',
    book: 'Book 2',
    description: 'Description 2',
  },
  {
    name: 'alohomora',
    book: 'Book 3',
    description: 'Description 3',
  },
];

const t = initTRPC.create();

const router = t.router;
const publicProcedure = t.procedure;

export const appRouter = router({
  getSpells: publicProcedure.query(() => {
    return { spells };
  }),
});

export type AppRouter = typeof appRouter;
