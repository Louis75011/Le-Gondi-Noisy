export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Pizzas' | 'Pastas' | 'Insalatas' | 'Dolci' | 'Boissons' | 'Vins';
  image?: string;
  isNew?: boolean;
  isPromo?: boolean;
}

export const MENU_DATA: MenuItem[] = [
  // Pizzas
  {
    id: 'p1',
    name: 'Margherita',
    description: 'Sauce tomate, mozza, basilic',
    price: 12,
    category: 'Pizzas',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p2',
    name: 'Reine',
    description: 'Sauce tomate, mozza, jambon aux herbes, champignons, basilic',
    price: 14,
    category: 'Pizzas',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p3',
    name: 'Gondi',
    description: 'Sauce tomate, mozza, jambon de Parme 24 mois, tomates cerises, crème de balsamique, basilic',
    price: 18,
    category: 'Pizzas',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
    isNew: true
  },
  {
    id: 'p4',
    name: 'Tartufata',
    description: 'Crème fraîche, brisures de truffe, champignons, grana padano, roquette, crème de balsamique',
    price: 20,
    category: 'Pizzas',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80&w=800'
  },
  // Pastas
  {
    id: 'pa1',
    name: 'Rigatoni au Pesto',
    description: 'Pesto maison, basilic, grana padano, stracciatella et pignons de pin et ciboulette',
    price: 15,
    category: 'Pastas',
    image: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pa2',
    name: 'Gnocchis à la Crème de Truffe',
    description: 'Carpaccio de truffe, grana padano et ciboulette',
    price: 18,
    category: 'Pastas',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800',
    isNew: true
  },
  // Insalatas
  {
    id: 's1',
    name: 'Burratina',
    description: 'Roquette, burrata 100gr, tomates cerises, pesto maison, grana padano, pignons de pin',
    price: 16,
    category: 'Insalatas',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
  },
  // Dolci
  {
    id: 'd1',
    name: 'Tiramisu Classique',
    description: 'Le grand classique maison',
    price: 7,
    category: 'Dolci',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800'
  }
];

export const PLAT_DU_JOUR = {
  name: "Gnocchis gratinés à la crème",
  description: "Avec du lard fumé et du taleggio. Fondant et savoureux.",
  price: 16,
  image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800"
};

export const PROMO_MOMENT = {
  title: "Offre Hivernale",
  description: "Une boisson offerte pour toute commande de pizza Signature le midi !",
  validUntil: "15 Avril 2026"
};
