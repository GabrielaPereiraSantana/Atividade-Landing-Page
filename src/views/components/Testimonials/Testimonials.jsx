import styles from './Testimonials.module.css';

export function Testimonials({ testimonials }) {
  return (
    <section id="testimonials" className={styles.section} aria-labelledby="testimonials-title">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Prova Social</span>
          <h2 id="testimonials-title" className={styles.title}>O que especialistas e usuários dizem</h2>
          <p className={styles.description}>
            Depoimentos de profissionais de saúde, pesquisadores e famílias que integraram Lumina à rotina.
            <br/>
            <em className={styles.disclaimer}>*Depoimentos ilustrativos para fins demonstrativos do protótipo.</em>
          </p>
        </div>

        <div className={styles.grid} role="list">
          {testimonials.map(testimonial => (
            <article key={testimonial.id} className={styles.card} role="listitem">
              <div className={styles.rating} aria-label={`${testimonial.rating} de 5 estrelas`}>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill={i < testimonial.rating ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className={styles.star}
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <blockquote className={styles.quote}>
                <p>{testimonial.text}</p>
              </blockquote>
              <footer className={styles.author}>
                <div className={styles.avatar} aria-hidden="true">
                  {testimonial.avatar}
                </div>
                <div className={styles.authorInfo}>
                  <cite className={styles.authorName}>{testimonial.name}</cite>
                  <p className={styles.authorRole}>{testimonial.role}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;