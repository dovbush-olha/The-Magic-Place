import { Spell } from '../../lib/constants';
import { spells } from '../../lib/spells';
import { publicProcedure } from '../../lib/trpc';

export const getSpellsTrpcRoute = publicProcedure.query((): { spells: Spell[] } => {
  return { spells };
});
