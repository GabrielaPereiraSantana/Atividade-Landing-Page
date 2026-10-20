import styles from './FAQ.module.css';

export function FAQ({ faqItems, isExpanded, toggleItem, handleKeyDown }) {
  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-title">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Perguntas Frequentes</span>
          <h2 id="faq-title" className={styles.title}>Tudo o que você precisa saber</h2>
          <p className={styles.description}>
            Selecionamos as dúvidas mais comuns. Se a sua não estiver aqui, nossa equipe está pronta para ajudar.
          </p>
        </div>

        <div className={styles.accordion} role="list">
          {faqItems.map(item => (
            <article
              key={item.id}
              className={`${styles.item} ${isExpanded(item.id) ? styles.open : ''}`}
              role="listitem"
            >
              <button
                className={styles.trigger}
                onClick={() => toggleItem(item.id)}
                onKeyDown={(e) => handleKeyDown(e, item.id)}
                aria-expanded={isExpanded(item.id)}
                aria-controls={`faq-answer-${item.id}`}
                id={`faq-question-${item.id}`}
              >
                <span className={styles.question}>{item.question}</span>
                <span className={styles.icon} aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </span>
              </button>
              <div
                id={`faq-answer-${item.id}`}
                className={styles.content}
                role="region"
                aria-labelledby={`faq-question-${item.id}`}
                hidden={!isExpanded(item.id)}
              >
                <div className={styles.answer}>
                  <p>{item.answer}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;