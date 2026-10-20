import { useState, useCallback, useMemo } from 'react';
import { productData } from '../models/productModel';

export function useFAQViewModel() {
  const [expandedItems, setExpandedItems] = useState(new Set());

  const faqItems = useMemo(() => productData.faq, []);

  const toggleItem = useCallback((id) => {
    setExpandedItems(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const isExpanded = useCallback((id) => expandedItems.has(id), [expandedItems]);

  const expandAll = useCallback(() => {
    setExpandedItems(new Set(faqItems.map(item => item.id)));
  }, [faqItems]);

  const collapseAll = useCallback(() => {
    setExpandedItems(new Set());
  }, []);

  const handleKeyDown = useCallback((event, id) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleItem(id);
    } else if (event.key === 'Escape') {
      setExpandedItems(new Set());
    }
  }, [toggleItem]);

  return {
    faqItems,
    expandedItems,
    isExpanded,
    toggleItem,
    expandAll,
    collapseAll,
    handleKeyDown
  };
}

export default useFAQViewModel;