import * as trpcExpress from '@trpc/server/adapters/express';
import cors from 'cors';
import express from 'express';

import { appRouter } from './trpc';

const expressApp = express();
expressApp.use(cors());
expressApp.use('/api', trpcExpress.createExpressMiddleware({ router: appRouter }));

expressApp.listen('3000', () => {
  console.info('Listening on port 3000');
});
