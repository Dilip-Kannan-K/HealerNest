
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingCart, ShoppingBag, X, Plus, Minus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const CartDrawer = () => {
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    calculateTotal 
  } = useCart();

  return (
    <>
      {/* Cart button */}
      <button 
        className={`fixed bottom-6 right-6 bg-green text-white p-4 rounded-full shadow-lg z-50 ${
          cartItems.length > 0 ? "animate-bounce-gentle" : ""
        }`}
        onClick={() => setIsCartOpen(true)}
      >
        <div className="relative">
          <ShoppingCart size={24} />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems.reduce((total, item) => total + item.quantity, 0)}
            </span>
          )}
        </div>
      </button>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/50 z-50 flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsCartOpen(false);
            }}
          >
            <motion.div 
              className="bg-white dark:bg-gray-900 w-full max-w-md h-full overflow-auto shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold flex items-center">
                    <ShoppingCart className="mr-2" size={20} /> Your Cart
                  </h2>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <X size={20} />
                  </button>
                </div>

                {cartItems.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingBag className="mx-auto mb-4 text-gray-400" size={48} />
                    <p className="text-gray-500">Your cart is empty</p>
                    <button 
                      className="mt-4 text-green font-medium"
                      onClick={() => setIsCartOpen(false)}
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {cartItems.map(item => (
                        <div key={item.id} className="flex gap-4 border-b pb-4">
                          <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-green font-semibold">{item.price}</p>
                            <div className="flex items-center mt-2">
                              <button 
                                className="p-1 rounded-full bg-gray-100 dark:bg-gray-800"
                                onClick={() => updateQuantity(item.id, -1)}
                                disabled={item.quantity <= 1}
                              >
                                <Minus size={14} />
                              </button>
                              <span className="mx-2">{item.quantity}</span>
                              <button 
                                className="p-1 rounded-full bg-gray-100 dark:bg-gray-800"
                                onClick={() => updateQuantity(item.id, 1)}
                              >
                                <Plus size={14} />
                              </button>
                              <button 
                                className="ml-auto text-red-500"
                                onClick={() => removeFromCart(item.id)}
                              >
                                <X size={16} />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between font-bold text-lg mb-6">
                        <span>Total:</span>
                        <span>${calculateTotal()}</span>
                      </div>
                      <button className="w-full py-3 bg-green text-white rounded-md font-medium">
                        Proceed to Checkout
                      </button>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CartDrawer;
