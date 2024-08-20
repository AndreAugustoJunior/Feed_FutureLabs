import styles from './Header.module.css';

import Logo from '../assets/F.png';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo FutureLabs" />
      <h1>FutureLabs</h1>
    </header>
  );
}
