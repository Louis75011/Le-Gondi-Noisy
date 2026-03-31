/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  Truck, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  ChevronRight, 
  Star, 
  Clock, 
  Info, 
  Accessibility, 
  ShieldCheck,
  Menu as MenuIcon,
  X,
  Plus,
  Minus,
  ArrowRight
} from 'lucide-react';
import { MENU_DATA, PLAT_DU_JOUR, PROMO_MOMENT, MenuItem } from './data/menu';

// --- Types ---
type View = 'home' | 'menu' | 'order' | 'reservations';

// --- Components ---

const Navbar = ({ currentView, setView, cartCount }: { currentView: View, setView: (v: View) => void, cartCount: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'ACCUEIL' },
    { id: 'menu', label: 'CARTE RESTAURANT' },
    { id: 'order', label: 'COMMANDER' },
    { id: 'reservations', label: 'RÉSERVATIONS' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => setView('home')}>
            <h1 className="text-3xl font-bold tracking-tighter text-[#1e3a8a] flex items-center">
              <span className="mr-2">LE</span>
              <span className="border-l-4 border-[#1e3a8a] pl-2">GONDI</span>
            </h1>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setView(link.id as View)}
                className={`text-sm font-medium tracking-widest transition-colors hover:text-[#1e3a8a] ${
                  currentView === link.id ? 'text-[#1e3a8a] border-b-2 border-[#1e3a8a] pb-1' : 'text-gray-500'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => setView('order')}
              className="relative p-2 text-gray-600 hover:text-[#1e3a8a] transition-colors"
            >
              <ShoppingBag size={24} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={() => setView('order')}
              className="relative p-2 text-gray-600"
            >
              <ShoppingBag size={24} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setView(link.id as View);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a]"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ setView }: { setView: (v: View) => void }) => {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-1 bg-blue-50 text-[#1e3a8a] text-xs font-bold tracking-widest uppercase rounded-full mb-6">
            Authentique & Généreux
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-[#1e3a8a] leading-tight mb-6">
            Le goût de l'Italie à <span className="italic font-serif">Noisy-le-Roi</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
            Découvrez nos pizzas préparées avec des ingrédients au maximum locaux, 
            notre sélection de pâtes et salades fraîches ainsi que des desserts gourmands.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setView('reservations')}
              className="px-8 py-4 bg-[#1e3a8a] text-white font-bold rounded-lg hover:bg-blue-900 transition-all shadow-lg shadow-blue-200 flex items-center"
            >
              Réserver une table
            </button>
            <button 
              onClick={() => setView('order')}
              className="px-8 py-4 bg-white text-[#1e3a8a] border-2 border-[#1e3a8a] font-bold rounded-lg hover:bg-gray-50 transition-all flex items-center"
            >
              Commander en ligne
            </button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1200" 
              alt="Pizza Gondi" 
              className="w-full h-[600px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs">
            <div className="flex items-center text-yellow-400 mb-2">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <span className="ml-2 text-gray-400 text-xs">4.9/5</span>
            </div>
            <p className="text-sm font-medium text-gray-800 italic">
              "La meilleure pizza de la région, pâte fine et croustillante !"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const PromoSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Plat du Jour */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#1e3a8a] text-white rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 overflow-hidden relative"
          >
            <div className="flex-1 z-10">
              <span className="text-xs font-bold tracking-widest uppercase opacity-70 mb-2 block">Aujourd'hui</span>
              <h3 className="text-3xl font-bold mb-4">Plat du Jour</h3>
              <h4 className="text-xl font-semibold text-yellow-400 mb-2">{PLAT_DU_JOUR.name}</h4>
              <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                {PLAT_DU_JOUR.description}
              </p>
              <div className="text-2xl font-bold">{PLAT_DU_JOUR.price}€</div>
            </div>
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/20 flex-shrink-0 z-10">
              <img src={PLAT_DU_JOUR.image} alt="Plat du jour" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20"></div>
          </motion.div>

          {/* Promo du Moment */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-yellow-50 border-2 border-yellow-200 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="z-10">
              <span className="text-xs font-bold tracking-widest uppercase text-yellow-700 mb-2 block">Promotion</span>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{PROMO_MOMENT.title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {PROMO_MOMENT.description}
              </p>
              <div className="flex items-center text-sm font-bold text-yellow-800">
                <Clock size={16} className="mr-2" />
                Valable jusqu'au {PROMO_MOMENT.validUntil}
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-10">
              <Star size={200} fill="currentColor" className="text-yellow-400" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MenuSection = ({ onAddToCart }: { onAddToCart: (item: MenuItem) => void }) => {
  const categories = ['Pizzas', 'Pastas', 'Insalatas', 'Dolci'];
  const [activeCat, setActiveCat] = useState('Pizzas');

  return (
    <section className="py-20 bg-gray-50" id="menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1e3a8a] mb-4">La Carte</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Chaque plat est cuisiné avec passion selon les traditions italiennes.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
                activeCat === cat 
                ? 'bg-[#1e3a8a] text-white shadow-lg' 
                : 'bg-white text-gray-500 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MENU_DATA.filter(item => item.category === activeCat).map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {item.isNew && (
                  <span className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 text-[10px] font-black uppercase px-2 py-1 rounded">Nouveau</span>
                )}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button 
                    onClick={() => onAddToCart(item)}
                    className="bg-white text-[#1e3a8a] p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform"
                  >
                    <Plus size={24} />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-gray-900">{item.name}</h4>
                  <span className="text-lg font-bold text-[#1e3a8a]">{item.price}€</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <button 
                  onClick={() => onAddToCart(item)}
                  className="w-full py-2 bg-gray-50 text-[#1e3a8a] font-bold text-sm rounded-lg hover:bg-[#1e3a8a] hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  Ajouter au panier
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OrderSection = ({ cart, updateQty, onCheckout }: { cart: any[], updateQty: (id: string, delta: number) => void, onCheckout: (type: 'takeaway' | 'delivery') => void }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-[#1e3a8a] mb-12 text-center">Votre Commande</h2>
        
        {cart.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
            <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg">Votre panier est vide.</p>
            <button className="mt-6 text-[#1e3a8a] font-bold flex items-center mx-auto hover:underline">
              Voir la carte <ChevronRight size={20} />
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center p-6 border-b border-gray-50 last:border-0">
                  <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover" referrerPolicy="no-referrer" />
                  <div className="ml-6 flex-1">
                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.price}€ / unité</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button onClick={() => updateQty(item.id, -1)} className="p-1 rounded-md hover:bg-gray-100 text-gray-500">
                      <Minus size={18} />
                    </button>
                    <span className="font-bold w-6 text-center">{item.quantity}</span>
                    <button onClick={() => updateQty(item.id, 1)} className="p-1 rounded-md hover:bg-gray-100 text-gray-500">
                      <Plus size={18} />
                    </button>
                  </div>
                  <div className="ml-8 font-bold text-gray-900 w-16 text-right">
                    {item.price * item.quantity}€
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="flex justify-between text-xl font-bold text-gray-900 mb-8">
                <span>Total</span>
                <span>{total}€</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button 
                  onClick={() => onCheckout('takeaway')}
                  className="flex flex-col items-center justify-center p-6 bg-white border-2 border-gray-100 rounded-2xl hover:border-[#1e3a8a] hover:bg-blue-50 transition-all group"
                >
                  <ShoppingBag size={32} className="text-gray-400 group-hover:text-[#1e3a8a] mb-3" />
                  <span className="font-bold text-gray-900">À Emporter</span>
                  <span className="text-xs text-gray-500 mt-1">Prêt en 20 min</span>
                </button>
                
                <button 
                  onClick={() => onCheckout('delivery')}
                  className="flex flex-col items-center justify-center p-6 bg-white border-2 border-gray-100 rounded-2xl hover:border-green-500 hover:bg-green-50 transition-all group"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Truck size={32} className="text-gray-400 group-hover:text-green-600" />
                    <span className="text-[10px] bg-green-600 text-white px-2 py-0.5 rounded-full font-bold uppercase">Uber Direct</span>
                  </div>
                  <span className="font-bold text-gray-900">Livraison</span>
                  <span className="text-xs text-gray-500 mt-1">Livré sans perte en 30-45 min</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#1e3a8a] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">LE GONDI</h2>
            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              Votre escale italienne à Noisy-le-Roi. Des produits frais, une pâte artisanale et tout l'amour de l'Italie dans votre assiette.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Phone size={20} /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <MapPin size={20} className="text-yellow-400" /> Adresse
            </h4>
            <p className="text-blue-100 text-sm">
              3 Avenue Albert de Gondi<br />
              78590 Noisy-le-Roi
            </p>
            <h4 className="font-bold text-lg mt-8 mb-6 flex items-center gap-2">
              <Clock size={20} className="text-yellow-400" /> Horaires
            </h4>
            <p className="text-blue-100 text-sm">
              Mardi - Jeudi: 12h-14h / 19h-21h<br />
              Vendredi - Samedi: 12h-14h / 19h-21h30
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Navigation</h4>
            <ul className="space-y-4 text-blue-100 text-sm">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Accueil</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">La Carte</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Commander</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Réservations</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Mentions Légales</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <Accessibility size={20} className="text-yellow-400" /> Accessibilité & SEO
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl">
                <ShieldCheck size={20} className="text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold mb-1">Conformité RGPD</p>
                  <p className="text-[10px] text-blue-200">Vos données sont protégées et traitées selon les normes européennes.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl">
                <Info size={20} className="text-blue-300 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold mb-1">Contexte IA</p>
                  <p className="text-[10px] text-blue-200">Site optimisé pour les agents conversationnels et l'accessibilité numérique (WCAG 2.1).</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-blue-300 uppercase tracking-widest">
          <p>© 2026 Le Gondi - Tous droits réservés</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Plan du site</a>
            <a href="#" className="hover:text-white">Accessibilité: Partielle</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [view, setView] = useState<View>('home');
  const [cart, setCart] = useState<any[]>([]);
  const [showCheckoutSuccess, setShowCheckoutSuccess] = useState(false);

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    // Optional: show toast
  };

  const updateQty = (id: string, delta: number) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === id) {
          const newQty = Math.max(0, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const handleCheckout = (type: 'takeaway' | 'delivery') => {
    setShowCheckoutSuccess(true);
    setCart([]);
    setTimeout(() => setShowCheckoutSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen font-sans text-gray-900 selection:bg-blue-100 selection:text-[#1e3a8a]">
      <Navbar currentView={view} setView={setView} cartCount={cart.reduce((a, b) => a + b.quantity, 0)} />
      
      <main>
        <AnimatePresence mode="wait">
          {view === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Hero setView={setView} />
              <PromoSection />
              <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12">
                  <div className="text-center p-8 bg-white rounded-3xl shadow-sm">
                    <div className="w-16 h-16 bg-blue-50 text-[#1e3a8a] rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <ShoppingBag size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Click & Collect</h3>
                    <p className="text-gray-500 text-sm">Commandez en ligne et retirez votre repas en 20 minutes.</p>
                  </div>
                  <div className="text-center p-8 bg-white rounded-3xl shadow-sm">
                    <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Truck size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Livraison Uber Direct</h3>
                    <p className="text-gray-500 text-sm">Livraison express sans perte de qualité, directement chez vous.</p>
                  </div>
                  <div className="text-center p-8 bg-white rounded-3xl shadow-sm">
                    <div className="w-16 h-16 bg-yellow-50 text-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Star size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Produits Locaux</h3>
                    <p className="text-gray-500 text-sm">Nous privilégions les circuits courts pour nos ingrédients.</p>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {view === 'menu' && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <MenuSection onAddToCart={addToCart} />
            </motion.div>
          )}

          {view === 'order' && (
            <motion.div
              key="order"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
            >
              <OrderSection cart={cart} updateQty={updateQty} onCheckout={handleCheckout} />
            </motion.div>
          )}

          {view === 'reservations' && (
            <motion.div
              key="reservations"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-20 bg-gray-50 min-h-screen flex items-center justify-center"
            >
              <div className="max-w-md w-full bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-[#1e3a8a] mb-8 text-center">Réserver une table</h2>
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Réservation envoyée !'); }}>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Nom complet</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] outline-none" placeholder="Mario Rossi" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Date</label>
                      <input type="date" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] outline-none" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Heure</label>
                      <input type="time" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] outline-none" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Nombre de personnes</label>
                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] outline-none">
                      <option>2 personnes</option>
                      <option>3 personnes</option>
                      <option>4 personnes</option>
                      <option>5+ personnes</option>
                    </select>
                  </div>
                  <button className="w-full py-4 bg-[#1e3a8a] text-white font-bold rounded-xl hover:bg-blue-900 transition-all shadow-lg shadow-blue-100">
                    Confirmer la réservation
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />

      {/* Success Modal */}
      <AnimatePresence>
        {showCheckoutSuccess && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-3xl p-10 max-w-sm w-full text-center shadow-2xl"
            >
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck size={48} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Commande Reçue !</h3>
              <p className="text-gray-500 mb-8">Votre commande est en cours de préparation. Vous recevrez un SMS de confirmation sous peu.</p>
              <button 
                onClick={() => setShowCheckoutSuccess(false)}
                className="w-full py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-black transition-colors"
              >
                Fermer
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
