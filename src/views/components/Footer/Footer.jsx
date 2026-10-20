import styles from './Footer.module.css';

const socialIcons = {
  instagram: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  linkedin: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  youtube: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.44 22.17 22.17 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.44 22.17 22.17 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/>
      <path d="M10 10l6 3-6 3z"/>
    </svg>
  ),
  github: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
};

export function Footer({ footer }) {
  const currentYear = 2026;

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <a href="#hero" className={styles.logo} aria-label="Lumina - Início">
              <svg className={styles.logoIcon} viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 6v20M6 16h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="16" cy="16" r="6" fill="currentColor"/>
              </svg>
              <span className={styles.logoText}>Lumina</span>
            </a>
            <p className={styles.tagline}>{footer.tagline}</p>
            <p className={styles.description}>{footer.description}</p>

            <div className={styles.social} role="list" aria-label="Redes sociais">
              {footer.social.map(item => (
                <a
                  key={item.name}
                  href={item.url}
                  className={styles.socialLink}
                  aria-label={item.name}
                  role="listitem"
                >
                  {socialIcons[item.icon]}
                </a>
              ))}
            </div>
          </div>

          <nav className={styles.nav} aria-label="Navegação do rodapé">
            {Object.entries(footer.navigation).map(([category, links]) => (
              <div key={category} className={styles.navColumn}>
                <h4 className={styles.navTitle}>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                <ul className={styles.navList}>
                  {links.map((link, index) => (
                    <li key={index}>
                      <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className={styles.navLink}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Lumina. Todos os direitos reservados.
          </p>
          <p className={styles.disclaimer}>{footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;