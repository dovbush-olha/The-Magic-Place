import { router } from '../lib/trpc';

import { getSpellTrpcRoute } from './getSpell';
import { getSpellsTrpcRoute } from './getSpells';

export const trpcBackendRouter = router({
  getSpells: getSpellsTrpcRoute,
  getSpell: getSpellTrpcRoute,
});

export type TrpcBackendRouter = typeof trpcBackendRouter;
