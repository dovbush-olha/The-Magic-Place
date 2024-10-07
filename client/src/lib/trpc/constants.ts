import { TrpcBackendRouter } from '@magic-place/server/src/router';
import { createTRPCReact } from '@trpc/react-query';

export const serverApiClient = createTRPCReact<TrpcBackendRouter>();
