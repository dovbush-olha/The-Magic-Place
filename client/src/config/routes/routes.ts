import type { RouteParams } from './route-params.ts';

export const ROUTES = {
  homeRoute: () => '/',
  settingsRoute: () => '/settings',
  profileRoute: () => '/profile',
  allSpellsRoutes: () => '/spells',
  viewSpellRoute: ({ spellName }: RouteParams['viewSpellParams']) => `/spells/${spellName}`,
};
