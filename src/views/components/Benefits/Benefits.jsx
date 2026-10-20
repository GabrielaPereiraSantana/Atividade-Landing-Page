import styles from './Benefits.module.css';

const benefitIcons = {
  moon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  ),
  sunrise: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    </svg>
  ),
  focus: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 16v-4M12 8h.01"/>
    </svg>
  ),
  relax: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5 5"/>
      <path d="M8.5 8.5v.01M12 12v.01M15.5 8.5v.01"/>
    </svg>
  ),
  sync: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 1v4M12 19v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    </svg>
  ),
  design: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
      <path d="M3 9h18M9 21V9"/>
    </svg>
  )
};

export function Benefits({ benefits }) {
  return (
    <section id="benefits" className={styles.section} aria-labelledby="benefits-title">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Benefícios</span>
          <h2 id="benefits-title" className={styles.title}>Por que escolher Lumina</h2>
          <p className={styles.description}>
            Cada benefício é respaldado por ciência circadiana rigorosa e validado por usuários reais.
            Não são promessas — são resultados mensuráveis.
          </p>
        </div>

        <ul className={styles.grid} role="list">
          {benefits.map(benefit => (
            <li key={benefit.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon} aria-hidden="true">
                  {benefitIcons[benefit.icon] || benefitIcons.moon}
                </span>
              </div>
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              <p className={styles.cardText}>{benefit.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Benefits;