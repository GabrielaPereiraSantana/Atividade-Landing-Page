import { useState, useEffect, useCallback } from 'react';
import styles from './PurchaseForm.module.css';

export function PurchaseForm({
  isOpen,
  onClose,
  selectedPlan,
  formData,
  errors,
  submitStatus,
  onInputChange,
  onSubmit,
  plans,
  formatPrice
}) {
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    if (isOpen) {
      const firstField = document.querySelector('#purchase-name');
      firstField?.focus();
    }
  }, [isOpen]);

  const getPlan = useCallback((id) => plans.find(p => p.id === id), [plans]);

  const plan = selectedPlan ? getPlan(selectedPlan) : null;

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} onKeyDown={handleKeyDown} noValidate>
      <div className={styles.planSummary}>
        <span className={styles.planLabel}>Plano selecionado</span>
        <div className={styles.planInfo}>
          <strong>{plan?.name || 'Selecione um plano'}</strong>
          <span>{plan ? formatPrice(plan.price) : ''}</span>
        </div>
        <button
          type="button"
          className={styles.changePlan}
          onClick={onClose}
          aria-label="Alterar plano selecionado"
        >
          Alterar plano
        </button>
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="purchase-name" className={styles.label}>
          Nome completo <span className={styles.required} aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          id="purchase-name"
          name="name"
          className={`${styles.input} ${errors.name ? styles.error : ''} ${focusedField === 'name' ? styles.focused : ''}`}
          value={formData.name}
          onChange={(e) => onInputChange('name', e.target.value)}
          onFocus={() => setFocusedField('name')}
          onBlur={() => setFocusedField(null)}
          placeholder="Seu nome completo"
          required
          autoComplete="name"
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
          aria-required="true"
          disabled={submitStatus === 'submitting'}
        />
        {errors.name && (
          <p id="name-error" className={styles.errorMessage} role="alert">{errors.name}</p>
        )}
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="purchase-email" className={styles.label}>
          Email <span className={styles.required} aria-hidden="true">*</span>
        </label>
        <input
          type="email"
          id="purchase-email"
          name="email"
          className={`${styles.input} ${errors.email ? styles.error : ''} ${focusedField === 'email' ? styles.focused : ''}`}
          value={formData.email}
          onChange={(e) => onInputChange('email', e.target.value)}
          onFocus={() => setFocusedField('email')}
          onBlur={() => setFocusedField(null)}
          placeholder="seu@email.com"
          required
          autoComplete="email"
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
          aria-required="true"
          disabled={submitStatus === 'submitting'}
        />
        {errors.email && (
          <p id="email-error" className={styles.errorMessage} role="alert">{errors.email}</p>
        )}
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="purchase-phone" className={styles.label}>
          Telefone/WhatsApp <span className={styles.required} aria-hidden="true">*</span>
        </label>
        <input
          type="tel"
          id="purchase-phone"
          name="phone"
          className={`${styles.input} ${errors.phone ? styles.error : ''} ${focusedField === 'phone' ? styles.focused : ''}`}
          value={formData.phone}
          onChange={(e) => onInputChange('phone', e.target.value)}
          onFocus={() => setFocusedField('phone')}
          onBlur={() => setFocusedField(null)}
          placeholder="(11) 99999-9999"
          required
          autoComplete="tel"
          aria-invalid={errors.phone ? 'true' : 'false'}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          aria-required="true"
          disabled={submitStatus === 'submitting'}
        />
        {errors.phone && (
          <p id="phone-error" className={styles.errorMessage} role="alert">{errors.phone}</p>
        )}
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="purchase-message" className={styles.label}>
          Mensagem (opcional)
        </label>
        <textarea
          id="purchase-message"
          name="message"
          className={`${styles.textarea} ${focusedField === 'message' ? styles.focused : ''}`}
          value={formData.message}
          onChange={(e) => onInputChange('message', e.target.value)}
          onFocus={() => setFocusedField('message')}
          onBlur={() => setFocusedField(null)}
          placeholder="Dúvidas, preferências de instalação, melhor horário para contato..."
          rows={4}
          aria-describedby="message-hint"
          disabled={submitStatus === 'submitting'}
        />
        <p id="message-hint" className={styles.hint}>Opcional - nos ajuda a personalizar seu atendimento</p>
      </div>

      <div className={styles.submitArea}>
          <button
            type="submit"
            className={`${styles.submitBtn} ${submitStatus === 'submitting' ? styles.loading : ''}`}
            disabled={submitStatus === 'submitting' || submitStatus === 'success'}
            aria-busy={submitStatus === 'submitting'}
          >
          {submitStatus === 'submitting' && (
            <>
                <svg className={styles.spinner} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false">
                  <circle cx="12" cy="12" r="10" strokeOpacity="0.25"/>
                  <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round"/>
                </svg>
              <span>Processando...</span>
            </>
          )}
          {submitStatus === 'success' ? (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>Solicitação enviada!</span>
            </>
          ) : (
            'Confirmar interesse'
          )}
        </button>

        {submitStatus === 'success' && (
          <p className={styles.successMessage}>
            Entraremos em contato em até 24h. Enquanto isso, que tal conhecer mais sobre a ciência por trás do Lumina?
          </p>
        )}
      </div>

      <p className={styles.disclaimer}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
        <span>Simulação de interesse — nenhum pagamento será processado. Seus dados são usados apenas para contato comercial.</span>
      </p>
    </form>
  );
}

export default PurchaseForm;