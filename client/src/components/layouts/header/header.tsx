import Logo from '@/assets/icons/png/logo-icon.png';
import { Container } from '@/components/layouts/container';
import { NavLink } from '@/components/navigation/nav-link';
import { ROUTES } from '@/config/routes';

import styles from './header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
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
      </Container>
    </header>
  );
}
