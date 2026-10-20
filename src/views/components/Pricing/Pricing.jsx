import styles from './Pricing.module.css';

export function Pricing({ plans, onSelectPlan, formatPrice }) {
  return (
    <section id="pricing" className={styles.section} aria-labelledby="pricing-title">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Planos</span>
          <h2 id="pricing-title" className={styles.title}>Escolha seu kit Lumina</h2>
          <p className={styles.description}>
            Todos os kits incluem hub de controle, app completo, garantia e suporte.
            Frete grátis para todo o Brasil.
          </p>
        </div>

        <div className={styles.grid} role="list">
          {plans.map(plan => (
            <article
              key={plan.id}
              className={`${styles.card} ${plan.popular ? styles.popular : ''}`}
              role="listitem"
            >
              {plan.popular && (
                <div className={styles.popularBadge}>Mais escolhido</div>
              )}
              <header className={styles.cardHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planSubtitle}>{plan.subtitle}</p>
                <div className={styles.price}>
                  <span className={styles.priceValue}>{formatPrice(plan.price)}</span>
                  {plan.originalPrice > plan.price && (
                    <>
                      <span className={styles.originalPrice}>{formatPrice(plan.originalPrice)}</span>
                      <span className={styles.discount}>-{plan.discount}%</span>
                    </>
                  )}
                  <span className={styles.period}>{plan.billingPeriod}</span>
                </div>
              </header>
              <ul className={styles.features} aria-label={`${plan.name} features`}>
                {plan.features.map((feature, index) => (
                  <li key={index} className={styles.feature}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`${styles.cta} ${plan.popular ? styles.ctaPrimary : styles.ctaSecondary}`}
                onClick={() => onSelectPlan(plan.id)}
                aria-label={`${plan.cta} - ${plan.name}`}
              >
                {plan.cta}
              </button>
            </article>
          ))}
        </div>

        <div className={styles.guarantee}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          <div>
            <strong>Garantia de 30 noites</strong>
            <p>Teste Lumina por 30 noites. Se não melhorar seu sono, devolvemos 100% do valor — sem perguntas.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;