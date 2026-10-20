import { useState, useCallback, useRef, useEffect } from 'react';
import { productData } from '../models/productModel';

export function usePurchaseViewModel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('idle');
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);

  const plans = productData.pricing.plans;

  const openModal = useCallback((planId = null) => {
    previousActiveElement.current = document.activeElement;
    if (planId) {
      setSelectedPlan(planId);
      setFormData(prev => ({ ...prev, plan: planId }));
    }
    setIsModalOpen(true);
    setSubmitStatus('idle');
    setErrors({});
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
    setTimeout(() => {
      previousActiveElement.current?.focus();
    }, 0);
  }, []);

  const handleInputChange = useCallback((field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  }, [errors]);

  const validateForm = useCallback(() => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!formData.email.trim()) newErrors.email = 'Email é obrigatório';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email inválido';
    if (!formData.phone.trim()) newErrors.phone = 'Telefone é obrigatório';
    else if (!/^[\d\s()+-]{10,}$/.test(formData.phone)) newErrors.phone = 'Telefone inválido';
    if (!formData.plan) newErrors.plan = 'Selecione um plano';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitStatus('submitting');
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitStatus('success');
    setFormData({ name: '', email: '', phone: '', plan: '', message: '' });
    setSelectedPlan(null);
    setTimeout(() => {
      closeModal();
      setSubmitStatus('idle');
    }, 3000);
  }, [validateForm, closeModal]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape' && isModalOpen) {
      closeModal();
    }
    if (e.key === 'Tab' && isModalOpen && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }, [isModalOpen, closeModal]);

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      modalRef.current?.focus();
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, handleKeyDown]);

  const formatPrice = useCallback((price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: productData.pricing.currency
    }).format(price);
  }, []);

  return {
    isModalOpen,
    selectedPlan,
    formData,
    errors,
    submitStatus,
    plans,
    modalRef,
    openModal,
    closeModal,
    handleInputChange,
    handleSubmit,
    formatPrice
  };
}

export default usePurchaseViewModel;