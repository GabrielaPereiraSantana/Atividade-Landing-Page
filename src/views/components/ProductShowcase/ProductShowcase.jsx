import styles from './ProductShowcase.module.css';

export function ProductShowcase({ problem, solution, targetAudience }) {
  return (
    <section id="product" className={styles.section} aria-labelledby="product-title">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>O Produto</span>
          <h2 id="product-title" className={styles.title}>O que é o Lumina</h2>
          <p className={styles.description}>
            Lumina não é apenas iluminação. É um sistema biológico que transforma a luz da sua casa
            no sinal mais poderoso para sincronizar seu relógio interno.
          </p>
        </div>

        <div className={styles.grid}>
          <article className={`${styles.card} ${styles.problemCard}`}>
            <div className={styles.cardIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>{problem.title}</h3>
            <p className={styles.cardText}>{problem.description}</p>
            <div className={styles.impact}>
              <strong>Impacto real:</strong> {problem.impact}
            </div>
          </article>

          <article className={`${styles.card} ${styles.solutionCard}`}>
            <div className={styles.cardIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>{solution.title}</h3>
            <p className={styles.cardText}>{solution.description}</p>
            <ul className={styles.differentiators} aria-label="Diferenciais do Lumina">
              {solution.differentiators.map((diff, index) => (
                <li key={index} className={styles.differentiatorItem}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {diff}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className={styles.audience}>
          <h3 className={styles.audienceTitle}>Para quem é o Lumina</h3>
          <div className={styles.audienceGrid}>
            <div className={styles.audienceItem}>
              <div className={styles.audienceIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <h4 className={styles.audienceLabel}>Público principal</h4>
              <p className={styles.audienceText}>{targetAudience.primary}</p>
            </div>
            <div className={styles.audienceItem}>
              <div className={styles.audienceIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h4 className={styles.audienceLabel}>Também ideal para</h4>
              <p className={styles.audienceText}>{targetAudience.secondary}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductShowcase;