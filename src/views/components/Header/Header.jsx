import styles from './Header.module.css';

export function Header({ navigationItems, onNavigate, onCTAClick, activeSection, favoritesCount }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    const sectionId = href.replace('#', '');
    onNavigate(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`} role="banner">
      <div className={styles.container}>
        <a href="#hero" className={styles.logo} aria-label="Lumina - Ir para início">
          <svg className={styles.logoIcon} viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
            <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2"/>
            <path d="M16 6v20M6 16h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="16" cy="16" r="6" fill="currentColor"/>
          </svg>
          <span className={styles.logoText}>Lumina</span>
        </a>

        <nav className={styles.nav} role="navigation" aria-label="Navegação principal">
          <ul className={styles.navList}>
            {navigationItems.map(item => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <span className={styles.favorites} data-testid="contador-favoritos" aria-label={`Planos favoritos: ${favoritesCount}`}>
            ♥ {favoritesCount}
          </span>
          <a
            href="#pricing"
            className={styles.ctaSecondary}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#pricing');
            }}
            aria-label="Ver planos"
          >
            Planos
          </a>
          <button
            className={styles.ctaPrimary}
            onClick={onCTAClick}
            type="button"
            aria-label="Começar minha jornada Lumina"
          >
            Começar
          </button>
        </div>

        <button
          className={styles.mobileToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <span className={styles.hamburger} aria-hidden="true">
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`}></span>
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}
        role="navigation"
        aria-label="Menu móvel"
      >
        <ul className={styles.mobileNavList}>
          {navigationItems.map(item => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`${styles.mobileNavLink} ${activeSection === item.id ? styles.active : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#pricing" className={styles.mobileCTA} onClick={(e) => {
              e.preventDefault();
              handleNavClick('#pricing');
            }}>
              Ver Planos
            </a>
          </li>
          <li>
          <button className={styles.mobileCTAPrimary} type="button" onClick={onCTAClick}>
            Começar minha jornada
          </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

import { useState, useEffect } from 'react';
export default Header;