import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const spells = [
  {
    spellName: 'revelio',
    book: 'Book 1',
    description: 'Description 1',
  },
  {
    spellName: 'flipendo',
    book: 'Book 2',
    description: 'Description 2',
  },
  {
    spellName: 'alohomora',
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
  getSpell: publicProcedure
    .input(
      z.object({
        spellName: z.string().min(1),
      }),
    )
    .query(({ input }) => {
      const spell = spells.find((spell) => spell.spellName === input.spellName);
      return { spell: spell ?? null };
    }),
});

export type AppRouter = typeof appRouter;
