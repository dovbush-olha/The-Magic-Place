import { z } from 'zod';

import { spells } from '../../lib/spells';
import { publicProcedure } from '../../lib/trpc';

export const getSpellTrpcRoute = publicProcedure
  .input(
    z.object({
      spellName: z.string().min(1),
    }),
  )
  .query(({ input }) => {
    const spell = spells.find((spell) => spell.spellName === input.spellName);
    return { spell: spell ?? null };
  });
