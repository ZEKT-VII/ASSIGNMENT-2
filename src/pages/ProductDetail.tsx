import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { useCart } from '../hooks/CartContext';
import { ArrowLeft, ShoppingCart, CheckCircle2, Recycle, HardDrive, Cpu, Battery } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'origins'>('overview');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center">
        <h1 className="font-display text-4xl mb-4">Product Not Found</h1>
        <Link to="/store" className="text-accent-green hover:underline">Return to Store</Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(`Hi, I'm interested in the ${product.name}. Is it currently available?`);
    window.open(`https://wa.me/923000000000?text=${message}`, '_blank');
  };

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        <Link to="/store" className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-green transition-colors mb-8 font-mono text-sm">
          <ArrowLeft size={16} /> BACK TO STORE
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          
          {/* Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-2xl overflow-hidden glass border border-border-subtle aspect-square relative"
          >
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {!product.inStock && (
              <div className="absolute top-6 right-6 bg-red-500/90 text-white px-4 py-2 text-sm font-bold rounded backdrop-blur-md">
                OUT OF STOCK
              </div>
            )}
            <div className="absolute bottom-6 left-6 bg-void/80 backdrop-blur-md px-4 py-2 text-xs font-mono text-accent-green border border-accent-green/30 rounded">
              {product.category}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 text-white">
              {product.name}
            </h1>
            <p className="font-mono text-3xl font-bold text-accent-green mb-8">
              Rs. {product.price}
            </p>

            <div className="flex gap-4 mb-10">
              <button
                onClick={() => addToCart(product)}
                disabled={!product.inStock}
                className={`flex-1 py-4 rounded-lg flex items-center justify-center gap-2 font-display font-bold transition-all ${
                  product.inStock
                    ? 'bg-accent-green text-void hover:shadow-glow'
                    : 'bg-surface text-text-muted cursor-not-allowed border border-border-subtle'
                }`}
              >
                <ShoppingCart size={20} />
                {product.inStock ? 'ADD TO CART' : 'UNAVAILABLE'}
              </button>
              <button
                onClick={handleWhatsAppInquiry}
                className="flex-1 py-4 rounded-lg flex items-center justify-center gap-2 font-display font-bold glass hover:border-accent-green hover:text-accent-green transition-all"
              >
                INQUIRE VIA WHATSAPP
              </button>
            </div>

            {/* Tabs */}
            <div className="border-b border-border-subtle flex gap-8 mb-6">
              {(['overview', 'specs', 'origins'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 font-mono text-sm tracking-[0.05em] uppercase relative transition-colors ${
                    activeTab === tab ? 'text-accent-green' : 'text-text-secondary hover:text-white'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-green"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="min-h-[200px]">
              {activeTab === 'overview' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                  <p className="font-body text-text-secondary leading-relaxed">
                    {product.description}
                  </p>
                  <div>
                    <h4 className="font-display font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {product.features.map(f => (
                        <li key={f} className="flex items-center gap-2 text-text-secondary">
                          <CheckCircle2 size={16} className="text-accent-green" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {activeTab === 'specs' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                  {product.specs.map(spec => {
                    const [key, value] = spec.split(': ');
                    return (
                      <div key={key} className="flex flex-col sm:flex-row sm:items-center py-3 border-b border-border-subtle/50 last:border-0">
                        <span className="font-mono text-sm text-text-muted w-32">{key}</span>
                        <span className="font-body text-white">{value}</span>
                      </div>
                    );
                  })}
                </motion.div>
              )}

              {activeTab === 'origins' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass p-6 rounded-lg border-l-2 border-l-accent-green">
                  <div className="flex items-center gap-3 mb-4 text-accent-green">
                    <Recycle size={24} />
                    <h4 className="font-display font-semibold text-lg">E-Waste Origins</h4>
                  </div>
                  <p className="font-body text-text-secondary leading-relaxed">
                    {product.origins}
                  </p>
                  <div className="flex gap-4 mt-6 text-text-muted">
                    <HardDrive size={20} />
                    <Cpu size={20} />
                    <Battery size={20} />
                  </div>
                </motion.div>
              )}
            </div>

          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="pt-16 border-t border-border-subtle">
            <h3 className="font-display font-semibold text-2xl mb-8">Related Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <Link to={`/store/${p.id}`} key={p.id} className="glass rounded-xl overflow-hidden group border border-border-subtle hover:border-accent-green transition-colors block">
                  <div className="aspect-video overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-display font-semibold text-lg line-clamp-1">{p.name}</h4>
                    <p className="font-mono text-accent-green text-sm mt-1">Rs. {p.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
