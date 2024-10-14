import cors from 'cors';
import express from 'express';

import { applyTrpcToExpressApp } from './lib/express';
import { trpcBackendRouter } from './router';

const expressApp = express();
expressApp.use(cors());

applyTrpcToExpressApp(expressApp, trpcBackendRouter);

expressApp.listen('3000', () => {
  console.info('Listening on port 3000');
});
