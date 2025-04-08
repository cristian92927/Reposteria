import Link from "next/link";
import { Phone } from "lucide-react";

export const Header = () => {
  const whatsappNumber = "573197332683";

  return (
    <header className="sticky top-0 z-50 glass-effect shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link href="/" className="flex items-center gap-2 mb-4 md:mb-0 group">
            <h1 className="text-3xl md:text-4xl font-bold gradient-text group-hover:animate-pulse-slow">
              Kry cake
            </h1>
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/productos"
              className="text-gray-600 hover:text-pink-500 transition-colors hover-lift px-4 py-2 rounded-full"
            >
              Productos
            </Link>
            <Link
              href="/nosotros"
              className="text-gray-600 hover:text-pink-500 transition-colors hover-lift px-4 py-2 rounded-full"
            >
              Nosotros
            </Link>
            <Link
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="modern-button flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone size={20} className="animate-float" />
              <span className="font-medium">Contactar</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
