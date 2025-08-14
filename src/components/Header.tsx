import { ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export const Header = ({ cartItemsCount, onCartClick }: HeaderProps) => {
  console.log('Header rendered with cart items count:', cartItemsCount);
  
  return (
    <header className="bg-red-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-2xl">🍔</div>
          <h1 className="text-2xl font-bold">BurgerMania</h1>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#inicio" className="hover:text-red-200 transition-colors">Inicio</a>
          <a href="#menu" className="hover:text-red-200 transition-colors">Menú</a>
          <a href="#nosotros" className="hover:text-red-200 transition-colors">Nosotros</a>
          <a href="#contacto" className="hover:text-red-200 transition-colors">Contacto</a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onCartClick}
            className="text-white hover:bg-red-700 relative"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-red-600 text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                {cartItemsCount}
              </span>
            )}
          </Button>
          
          <Button variant="ghost" size="sm" className="md:hidden text-white hover:bg-red-700">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};