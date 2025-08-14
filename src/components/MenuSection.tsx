import { BurgerCard } from "@/components/BurgerCard";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface MenuSectionProps {
  onAddToCart: (item: Omit<MenuItem, 'description' | 'category'>) => void;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Clásica BurgerMania",
    description: "Carne de res, lechuga, tomate, cebolla, queso cheddar y nuestra salsa especial",
    price: 12.99,
    image: "🍔",
    category: "clásicas"
  },
  {
    id: 2,
    name: "BBQ Bacon",
    description: "Carne de res, bacon crujiente, queso, cebolla caramelizada y salsa BBQ",
    price: 15.99,
    image: "🥓",
    category: "premium"
  },
  {
    id: 3,
    name: "Mushroom Swiss",
    description: "Carne de res, champiñones salteados, queso suizo y salsa de ajo",
    price: 14.99,
    image: "🍄",
    category: "gourmet"
  },
  {
    id: 4,
    name: "Spicy Jalapeño",
    description: "Carne de res, jalapeños, queso pepper jack, aguacate y salsa picante",
    price: 13.99,
    image: "🌶️",
    category: "picantes"
  },
  {
    id: 5,
    name: "Veggie Deluxe",
    description: "Hamburguesa vegetal, lechuga, tomate, aguacate, cebolla morada y hummus",
    price: 11.99,
    image: "🥬",
    category: "vegetarianas"
  },
  {
    id: 6,
    name: "Double Cheese",
    description: "Doble carne, doble queso cheddar, lechuga, tomate y salsa especial",
    price: 17.99,
    image: "🧀",
    category: "premium"
  }
];

export const MenuSection = ({ onAddToCart }: MenuSectionProps) => {
  console.log('MenuSection rendered with', menuItems.length, 'items');

  return (
    <section id="menu" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestro Menú</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección de hamburguesas artesanales, preparadas con ingredientes frescos y de la más alta calidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <BurgerCard
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};