import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToMenu = () => {
    console.log('Scrolling to menu section');
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Las Mejores Hamburguesas
            <span className="block text-yellow-400">de la Ciudad</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-red-100">
            Ingredientes frescos, sabores únicos y la mejor experiencia gastronómica
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-yellow-400 hover:bg-yellow-500 text-red-600 font-bold text-lg px-8 py-3"
              onClick={scrollToMenu}
            >
              Ver Menú 🍔
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-red-600 font-bold text-lg px-8 py-3"
            >
              Hacer Pedido 📞
            </Button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl mb-4">🥩</div>
            <h3 className="text-xl font-bold mb-2">Carne Premium</h3>
            <p className="text-red-100">100% carne de res, fresca y jugosa</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🧀</div>
            <h3 className="text-xl font-bold mb-2">Quesos Artesanales</h3>
            <p className="text-red-100">Selección de los mejores quesos</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-xl font-bold mb-2">Entrega Rápida</h3>
            <p className="text-red-100">Delivery en menos de 30 minutos</p>
          </div>
        </div>
      </div>
    </section>
  );
};