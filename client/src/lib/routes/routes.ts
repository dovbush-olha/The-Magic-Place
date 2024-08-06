import type { RouteParams } from './routeParams.ts';

export const ROUTES = {
  allSpellsRoutes: () => '/spells',
  viewSpellRoute: ({ spellName }: RouteParams['viewSpellParams']) => `/spells/${spellName}`,
};
