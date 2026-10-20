import styles from './CTA.module.css';

export function CTA({ cta, onPrimaryCTA, onSecondaryCTA }) {
  return (
    <section id="cta" className={styles.section} aria-labelledby="cta-title">
      <div className={styles.background} aria-hidden="true">
        <div className={styles.gradientOrb}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h2 id="cta-title" className={styles.title}>{cta.title}</h2>
          <p className={styles.description}>{cta.description}</p>

          <div className={styles.ctaGroup}>
            <button
              className={styles.ctaPrimary}
              onClick={onPrimaryCTA}
              aria-label={cta.primaryCTA}
            >
              {cta.primaryCTA}
            </button>

            <button
              className={styles.ctaSecondary}
              onClick={onSecondaryCTA}
              aria-label={cta.secondaryCTA}
            >
              {cta.secondaryCTA}
            </button>
          </div>

          <div className={styles.trustBadges} role="list" aria-label="Garantias">
            {cta.trustBadges.map((badge, index) => (
              <div key={index} className={styles.badge} role="listitem">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;