function getRouteParams<T extends Record<string, true>>(object: T) {
  return Object.keys(object).reduce((acc, key) => ({ ...acc, [key]: `:${key}` }), {} as Record<keyof T, string>);
}

export const routesParams = {
  viewSpellParams: getRouteParams({ spellName: true }),
};

export const ROUTES = {
  allSpellsRoutes: () => '/spells',
  viewSpellRoute: ({ spellName }: typeof routesParams.viewSpellParams) => `/spells/${spellName}`,
};
