import styles from './Hero.module.css';

export function Hero({ hero, onPrimaryCTA, onSecondaryCTA }) {
  return (
    <section id="hero" className={styles.section} aria-labelledby="hero-title">
      <div className={styles.background} aria-hidden="true">
        <div className={styles.gradientOrb}></div>
        <div className={styles.gradientOrbSecondary}></div>
        <div className={styles.gridPattern}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true"></span>
            <span>Primeira iluminação circadiana certificada no Brasil</span>
          </div>

          <h1 id="hero-title" className={styles.headline}>
            {hero.headline}
          </h1>

          <p className={styles.subheadline}>
            {hero.subheadline}
          </p>

          <div className={styles.ctaGroup}>
            <button
              className={styles.ctaPrimary}
              onClick={onPrimaryCTA}
              aria-label={hero.primaryCTA}
            >
              {hero.primaryCTA}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>

            <button
              className={styles.ctaSecondary}
              onClick={onSecondaryCTA}
              aria-label={hero.secondaryCTA}
            >
              {hero.secondaryCTA}
            </button>
          </div>

          <div className={styles.trustIndicators}>
            <div className={styles.trustItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span>Certificado ANVISA</span>
            </div>
            <div className={styles.trustItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              <span>30 noites de teste</span>
            </div>
            <div className={styles.trustItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12V7H12v5M3 12v5h9v-5"/>
                <path d="M21 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h18z"/>
              </svg>
              <span>Frete grátis Brasil</span>
            </div>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.visualContainer}>
            <div className={styles.deviceFrame}>
              <div className={styles.screen}>
                <div className={styles.appInterface}>
                  <div className={styles.appHeader}>
                    <div className={styles.appTitle}>Lumina</div>
                    <div className={styles.appStatus}>
                      <span className={styles.statusDot}></span>
                      <span>Sincronizado</span>
                    </div>
                  </div>
                  <div className={styles.circadianChart}>
                    <svg viewBox="0 0 280 140" className={styles.chartSvg}>
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.3"/>
                          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                      <path
                        className={styles.chartArea}
                        d="M20,110 C40,80 80,50 140,40 C200,30 240,60 260,90"
                        fill="url(#chartGradient)"
                      />
                      <path
                        className={styles.chartLine}
                        d="M20,110 C40,80 80,50 140,40 C200,30 240,60 260,90"
                        stroke="var(--color-accent)"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g className={styles.chartPoints}>
                        <circle cx="40" cy="80" r="4" fill="var(--color-secondary)"/>
                        <circle cx="140" cy="40" r="4" fill="var(--color-accent)"/>
                        <circle cx="240" cy="60" r="4" fill="var(--color-secondary)"/>
                      </g>
                    </svg>
                    <div className={styles.chartLabels}>
                      <span>06h</span>
                      <span>12h</span>
                      <span>18h</span>
                      <span>00h</span>
                    </div>
                  </div>
                  <div className={styles.appMetrics}>
                    <div className={styles.metric}>
                      <span className={styles.metricValue}>40%</span>
                      <span className={styles.metricLabel}>menos tempo p/ dormir</span>
                    </div>
                    <div className={styles.metric}>
                      <span className={styles.metricValue}>27%</span>
                      <span className={styles.metricLabel}>mais sono profundo</span>
                    </div>
                    <div className={styles.metric}>
                      <span className={styles.metricValue}>18%</span>
                      <span className={styles.metricLabel}>mais foco</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.floatingCard} ${styles.card1}`}>
              <div className={styles.cardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2a6 6 0 0 0-6 6v10a6 6 0 0 0 12 0V8a6 6 0 0 0-6-6z"/>
                  <path d="M12 14v4M12 8v2"/>
                </svg>
              </div>
              <div className={styles.cardContent}>
                <span className={styles.cardValue}>06:30</span>
                <span className={styles.cardLabel}>Nascer do sol simulado</span>
              </div>
            </div>

            <div className={`${styles.floatingCard} ${styles.card2}`}>
              <div className={styles.cardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <div className={styles.cardContent}>
                <span className={styles.cardValue}>480nm</span>
                <span className={styles.cardLabel}>Pico matinal ideal</span>
              </div>
            </div>

            <div className={`${styles.floatingCard} ${styles.card3}`}>
              <div className={styles.cardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div className={styles.cardContent}>
                <span className={styles.cardValue}>590nm</span>
                <span className={styles.cardLabel}>Âmbar noturno seguro</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>
    </section>
  );
}

export default Hero;