import Logo from '@/assets/logo-icon.png';
import { NavLink } from '@/components/navigation/nav-link';
import { ROUTES } from '@/config/routes';

import styles from './header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.navLeft}>
          <NavLink to={ROUTES.homeRoute()}>Home</NavLink>
        </div>

        <div className={styles.logo}>
          <img
            src={Logo}
            alt="logo"
            height={100}
            width={100}
          />
        </div>

        <div className={styles.navRight}>
          <NavLink to={ROUTES.profileRoute()}>Profile</NavLink>
          <NavLink to={ROUTES.settingsRoute()}>Settings</NavLink>
        </div>
      </nav>
    </header>
  );
}
