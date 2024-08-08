import type { RouteParams } from './routeParams.ts';

export const ROUTES = {
  homeRoute: () => '/',
  allSpellsRoutes: () => '/spells',
  viewSpellRoute: ({ spellName }: RouteParams['viewSpellParams']) => `/spells/${spellName}`,
};
