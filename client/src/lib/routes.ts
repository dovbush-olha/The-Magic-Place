export const ROUTES = {
  getAllSpells: () => '/spells',
  getSpell: ({ spellName }: { spellName: string }) => `/spells/${spellName}`,
};
