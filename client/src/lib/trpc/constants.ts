import { AppRouter } from '@magic-place/server/src/trpc.ts';
import { createTRPCReact } from '@trpc/react-query';

export const serverApiClient = createTRPCReact<AppRouter>();
