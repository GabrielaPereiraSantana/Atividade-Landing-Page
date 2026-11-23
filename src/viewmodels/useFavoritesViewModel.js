import { useState, useEffect } from 'react';

export function useFavoritesViewModel() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('lumina-favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('lumina-favorites', JSON.stringify(favorites));
  }, [favorites]);

  function toggleFavorite(planId) {
    if (favorites.includes(planId)) {
      setFavorites(favorites.filter((id) => id !== planId));
    } else {
      setFavorites([...favorites, planId]);
    }
  }

  function isFavorite(planId) {
    return favorites.includes(planId);
  }

  return { favorites, toggleFavorite, isFavorite };
}

export default useFavoritesViewModel;
