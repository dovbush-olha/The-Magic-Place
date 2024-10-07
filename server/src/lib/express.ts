import * as trpcExpress from '@trpc/server/adapters/express';
import { type Express } from 'express';

import { TrpcBackendRouter } from '../router';

export function applyTrpcToExpressApp(expressApp: Express, trpcRouter: TrpcBackendRouter) {
  expressApp.use('/api', trpcExpress.createExpressMiddleware({ router: trpcRouter }));
}
