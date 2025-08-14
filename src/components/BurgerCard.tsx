import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";

interface BurgerCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  onAddToCart: (item: { id: number; name: string; price: number; image: string }) => void;
}

export const BurgerCard = ({ id, name, description, price, image, onAddToCart }: BurgerCardProps) => {
  const handleAddToCart = () => {
    console.log('Adding burger to cart:', { id, name, price, image });
    onAddToCart({ id, name, price, image });
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 bg-white">
      <CardHeader className="text-center">
        <div className="text-6xl mb-4">{image}</div>
        <CardTitle className="text-xl font-bold text-gray-800">{name}</CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="text-center">
        <div className="text-3xl font-bold text-red-600">${price}</div>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Agregar al Carrito
        </Button>
      </CardFooter>
    </Card>
  );
};