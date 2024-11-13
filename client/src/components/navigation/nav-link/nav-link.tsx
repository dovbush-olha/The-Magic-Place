import { NavLink as ReactRouterNavLink, NavLinkProps } from 'react-router-dom';

import styles from './nav-link.module.scss';

export function NavLink({ children, to, ...props }: NavLinkProps) {
  if (!children) return null;

  return (
    <ReactRouterNavLink
      className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.active}` : styles.navLink)}
      to={to}
      {...props}
    >
      {children}
    </ReactRouterNavLink>
  );
}
