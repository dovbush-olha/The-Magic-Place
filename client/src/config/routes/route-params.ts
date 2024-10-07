import { getRouteParams } from './route-utils.ts';

export const routeParams = {
  viewSpellParams: getRouteParams(['spellName']),
};

export type RouteParams = {
  [K in keyof typeof routeParams]: (typeof routeParams)[K];
};
