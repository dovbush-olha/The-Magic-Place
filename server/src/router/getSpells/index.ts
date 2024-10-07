import { spells } from '../../lib/spells';
import { publicProcedure } from '../../lib/trpc';

export const getSpellsTrpcRoute = publicProcedure.query(() => {
  return { spells };
});
