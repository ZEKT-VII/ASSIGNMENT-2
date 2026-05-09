import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../hooks/CartContext';
import { ShoppingCart, ArrowRight } from 'lucide-react';

export default function Store() {
  const { addToCart } = useCart();
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-grid">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Hardware <span className="text-gradient-green">Store</span>
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Browse our custom-built embedded systems, IoT nodes, and power solutions. 
            Ready to deploy for your next project.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-mono text-sm transition-all ${
                filter === cat 
                  ? 'bg-accent-green text-void shadow-glow font-semibold' 
                  : 'bg-surface text-text-secondary hover:text-white border border-border-subtle'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-xl overflow-hidden group border border-border-subtle hover:border-accent-green/50 transition-colors flex flex-col"
            >
              <Link to={`/store/${product.id}`} className="relative h-64 overflow-hidden bg-void block">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                {!product.inStock && (
                  <div className="absolute top-4 right-4 bg-red-500/80 text-white px-3 py-1 text-xs font-bold rounded backdrop-blur-md">
                    OUT OF STOCK
                  </div>
                )}
                <div className="absolute bottom-4 left-4 bg-void/80 backdrop-blur-md px-3 py-1 text-xs font-mono text-accent-green border border-accent-green/30 rounded">
                  {product.category}
                </div>
              </Link>
              
              <div className="p-6 flex flex-col flex-1">
                <Link to={`/store/${product.id}`} className="flex justify-between items-start mb-2 group/link">
                  <h3 className="font-display font-semibold text-xl line-clamp-1 group-hover/link:text-accent-green transition-colors">{product.name}</h3>
                </Link>
                <p className="text-text-secondary text-sm mb-6 line-clamp-2 flex-1">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-mono text-xl font-bold text-white">
                    Rs. {product.price}
                  </span>
                  
                  <div className="flex gap-2">
                    <Link
                      to={`/store/${product.id}`}
                      className="p-3 rounded-lg flex items-center justify-center transition-all bg-surface hover:bg-white hover:text-void text-text-secondary hover:text-white"
                      title="View Details"
                    >
                      <ArrowRight size={20} />
                    </Link>
                    <button
                      onClick={() => addToCart(product)}
                      disabled={!product.inStock}
                      className={`p-3 rounded-lg flex items-center justify-center transition-all ${
                        product.inStock
                          ? 'bg-surface hover:bg-accent-green hover:text-void text-white'
                          : 'bg-surface/50 text-text-muted cursor-not-allowed'
                      }`}
                      title="Add to Cart"
                    >
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
