export const ICON_STATE = {
  SOLID: 'solid',
  OUTLINE: 'outline',
  BULK: 'bulk',
} as const;

export type IconState = (typeof ICON_STATE)[keyof typeof ICON_STATE];

export const ICON_NAME = {
  BEHANCE: 'behance',
  DIRECTION_RIGHT: 'direction-right',
  FACEBOOK: 'facebook',
  FACEBOOK_PLAIN: 'facebook-plain',
  HOME: 'home',
  LINKEDIN: 'linkedin',
  LINKEDIN_PLAIN: 'linkedin-plain',
  REMOVE: 'remove',
  SPELLS: 'spell',
  TICK: 'tick',
} as const;

export type IconName = (typeof ICON_NAME)[keyof typeof ICON_NAME];
