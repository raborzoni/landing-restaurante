"use client"; // Marca este componente como Client Component

import styles from '../styles/Header.module.css';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="/2.png" alt="Logo do Restaurante" className={styles.logo} />
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
        <a href="#cardapio" className={styles.navLink}>Cardápio</a>
        <a href="#contato" className={styles.navLink}>Contato</a>
        <a href="#endereco" className={styles.navLink}>Endereço</a>
      </nav>
      <Link href="https://www.ifood.com.br/inicio" passHref>
        <button className={styles.orderButton}>Faça seu pedido</button>
      </Link>
      <button className={styles.menuButton} onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
  
  // return (
  //   <header className={styles.header}>
  //     <img src="/2.png" alt="Logo do Restaurante" className={styles.logo} />
  //     <nav>
  //       <a href="#cardapio" className={styles.navLink}>Cardápio</a>
  //       <a href="#contato" className={styles.navLink}>Contato</a>
  //       <a href="#endereco" className={styles.navLink}>Endereço</a>
  //     </nav>
  //     <Link href="https://www.ifood.com.br/inicio" passHref>
  //       <button className={styles.orderButton}>Faça seu pedido</button>
  //     </Link>
  //   </header>
  // );
}