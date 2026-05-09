import { X, Minus, Plus, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../hooks/CartContext';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    // Format WhatsApp message
    let message = `*New Order Request*\n\n`;
    cart.forEach(item => {
      message += `- ${item.name} (x${item.quantity}) - Rs. ${item.price * item.quantity}\n`;
    });
    message += `\n*Total: Rs. ${cartTotal}*\n\nPlease confirm availability.`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/923000000000?text=${encodedMessage}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-void border-l border-border-subtle shadow-2xl z-[101] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border-subtle bg-surface/50">
              <h2 className="font-display font-semibold text-xl flex items-center gap-2">
                <ShoppingCart size={24} className="text-accent-green" />
                Your Cart
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-elevated rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-text-muted">
                  <ShoppingCart size={64} className="opacity-20 mb-4" />
                  <p>Your cart is empty</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex gap-4 p-4 rounded-xl border border-border-subtle bg-surface/30">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-medium text-sm line-clamp-1">{item.name}</h3>
                        <p className="text-accent-green text-sm font-mono mt-1">Rs. {item.price}</p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-3 bg-elevated rounded-lg p-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-surface rounded"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm font-mono w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-surface rounded"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-text-muted hover:text-destructive transition-colors text-xs uppercase font-medium"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-border-subtle bg-surface/50">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-text-secondary">Subtotal</span>
                  <span className="font-display font-semibold text-xl text-accent-green">
                    Rs. {cartTotal}
                  </span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-accent-green text-void font-bold py-4 rounded-lg hover:shadow-glow-strong transition-all duration-300"
                >
                  Checkout via WhatsApp
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
