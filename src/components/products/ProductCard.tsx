import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { ImageGallery } from "../ui/ImageGallery";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: string;
  images: string[]; // Ahora es un array de imágenes
  whatsapp: string;
}

export const ProductCard = ({
  name,
  description,
  price,
  images,
  whatsapp,
}: ProductCardProps) => {
  const whatsappNumber = "573197332683";
  const createWhatsAppLink = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover-lift glass-effect">
      <ImageGallery images={images} alt={name} />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold gradient-text">{name}</h3>
          <span className="text-lg font-bold text-pink-500 animate-pulse-slow">
            {price}
          </span>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link
          href={createWhatsAppLink(whatsapp)}
          target="_blank"
          rel="noopener noreferrer"
          className="modern-button flex items-center justify-center gap-2 w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-medium py-3 px-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <ShoppingBag size={18} className="animate-float" />
          <span>Ordenar por WhatsApp</span>
        </Link>
      </div>
    </div>
  );
};
