import { NavLink as ReactRouterNavLink, NavLinkProps } from 'react-router-dom';

import styles from './nav-link.module.scss';

export function NavLink({ children, to, ...props }: NavLinkProps) {
  return (
    <ReactRouterNavLink
      className={styles.navLink}
      to={to}
      {...props}
    >
      {children}
    </ReactRouterNavLink>
  );
}
