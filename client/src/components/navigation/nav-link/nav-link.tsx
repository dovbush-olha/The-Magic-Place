import { NavLink as ReactRouterNavLink, NavLinkProps } from 'react-router-dom';

import styles from './nav-link.module.scss';

export function NavLink({ children, to, ...props }: NavLinkProps) {
  if (!children) return null;

  return (
    <ReactRouterNavLink
      className={styles.navLink}
      to={to}
      data-testid="nav-link"
      {...props}
    >
      {children}
    </ReactRouterNavLink>
  );
}
