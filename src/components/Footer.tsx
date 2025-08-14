import { MapPin, Phone, Clock, Mail } from "lucide-react";

export const Footer = () => {
  console.log('Footer component rendered');

  return (
    <footer id="contacto" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl">🍔</div>
              <h3 className="text-2xl font-bold">BurgerMania</h3>
            </div>
            <p className="text-gray-300">
              Las mejores hamburguesas de la ciudad, preparadas con amor y los ingredientes más frescos.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@burgermania.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Burger Street, Ciudad</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Horarios</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <div>
                  <p>Lun - Jue: 11:00 - 22:00</p>
                  <p>Vie - Sáb: 11:00 - 23:00</p>
                  <p>Domingo: 12:00 - 21:00</p>
                </div>
              </div>
            </div>
          </div>

          <div id="nosotros">
            <h4 className="text-lg font-bold mb-4">Sobre Nosotros</h4>
            <p className="text-gray-300 text-sm">
              Desde 2020, BurgerMania ha sido el lugar favorito para los amantes de las hamburguesas. 
              Nos enorgullecemos de usar solo ingredientes frescos y de la más alta calidad.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 BurgerMania. Todos los derechos reservados. Hecho con ❤️ para los amantes de las hamburguesas.
          </p>
        </div>
      </div>
    </footer>
  );
};