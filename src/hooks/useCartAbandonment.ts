import { useEffect, useState } from 'react';
import { toast } from '@/hooks/use-toast';

interface CartData {
  plan: 'lifetime' | 'monthly';
  timestamp: number;
  userCity?: string;
  userState?: string;
}

export const useCartAbandonment = () => {
  const [hasAbandonedCart, setHasAbandonedCart] = useState(false);
  const [cartData, setCartData] = useState<CartData | null>(null);

  // Save cart intent
  const saveCartIntent = (plan: 'lifetime' | 'monthly', userCity?: string, userState?: string) => {
    const data: CartData = {
      plan,
      timestamp: Date.now(),
      userCity,
      userState
    };
    localStorage.setItem('mamaeZenCart', JSON.stringify(data));
    setCartData(data);
  };

  // Check for abandoned cart and redirect to recovery
  const checkAndRedirect = () => {
    const savedCart = localStorage.getItem('mamaeZenCart');
    if (savedCart) {
      const data: CartData = JSON.parse(savedCart);
      const minutesSinceAbandonment = (Date.now() - data.timestamp) / (1000 * 60);
      
      // If cart was abandoned recently (less than 30 minutes)
      if (minutesSinceAbandonment < 30) {
        setHasAbandonedCart(true);
        setCartData(data);
        return '/recuperacao-1';
      }
    }
    return null;
  };

  // Check for abandoned cart (disabled auto-toast to prevent funnel interruption)
  useEffect(() => {
    const checkAbandonedCart = () => {
      const savedCart = localStorage.getItem('mamaeZenCart');
      if (savedCart) {
        const data: CartData = JSON.parse(savedCart);
        const hoursSinceAbandonment = (Date.now() - data.timestamp) / (1000 * 60 * 60);
        
        // If cart was abandoned more than 1 hour ago but less than 7 days
        if (hoursSinceAbandonment > 1 && hoursSinceAbandonment < 168) {
          setHasAbandonedCart(true);
          setCartData(data);
          // Toast removed to prevent funnel interruption
        }
      }
    };

    checkAbandonedCart();
  }, []);

  // Clear cart
  const clearCart = () => {
    localStorage.removeItem('mamaeZenCart');
    setHasAbandonedCart(false);
    setCartData(null);
  };

  return {
    hasAbandonedCart,
    cartData,
    saveCartIntent,
    clearCart,
    checkAndRedirect
  };
};
