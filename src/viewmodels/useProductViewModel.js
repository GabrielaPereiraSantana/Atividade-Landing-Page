import { useState, useCallback, useMemo } from 'react';
import { productData } from '../models/productModel';

export function useProductViewModel() {
  const [activeSection, setActiveSection] = useState('hero');

  const navigationItems = useMemo(() => [
    { id: 'product', label: 'O Produto', href: '#product' },
    { id: 'benefits', label: 'Benefícios', href: '#benefits' },
    { id: 'how-it-works', label: 'Como Funciona', href: '#how-it-works' },
    { id: 'testimonials', label: 'Depoimentos', href: '#testimonials' },
    { id: 'pricing', label: 'Planos', href: '#pricing' },
    { id: 'faq', label: 'FAQ', href: '#faq' }
  ], []);

  const handleNavigation = useCallback((sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const top = element.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  const product = useMemo(() => productData, []);

  return {
    product,
    activeSection,
    setActiveSection,
    navigationItems,
    handleNavigation
  };
}

export default useProductViewModel;