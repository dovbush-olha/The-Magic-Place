import type { RouteParams } from './route-params.ts';

export const ROUTES = {
  homeRoute: () => '/',
  allSpellsRoutes: () => '/spells',
  viewSpellRoute: ({ spellName }: RouteParams['viewSpellParams']) => `/spells/${spellName}`,
};
