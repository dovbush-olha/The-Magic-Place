export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
} as const;

export type ButtonVariants = (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];
