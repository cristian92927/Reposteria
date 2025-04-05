import Image from "next/image";
import Link from "next/link";
import { Phone, ShoppingBag } from "lucide-react";

export default function ReposteriePage() {
  const products = [
    {
      id: 1,
      name: "Pastel de Chocolate",
      description:
        "Delicioso pastel de chocolate con ganache y fresas frescas.",
      price: "$350",
      image: "/placeholder.svg?height=300&width=300",
      whatsapp: "Hola, me interesa el Pastel de Chocolate. ¿Está disponible?",
    },
    {
      id: 2,
      name: "Cupcakes Variados",
      description: "Surtido de cupcakes con diferentes sabores y decoraciones.",
      price: "$180",
      image: "/placeholder.svg?height=300&width=300",
      whatsapp: "Hola, me interesan los Cupcakes Variados. ¿Están disponibles?",
    },
    {
      id: 3,
      name: "Galletas Decoradas",
      description: "Galletas artesanales decoradas con royal icing.",
      price: "$120",
      image: "/placeholder.svg?height=300&width=300",
      whatsapp:
        "Hola, me interesan las Galletas Decoradas. ¿Están disponibles?",
    },
    {
      id: 4,
      name: "Tarta de Frutas",
      description: "Tarta fresca con crema pastelera y frutas de temporada.",
      price: "$280",
      image: "/placeholder.svg?height=300&width=300",
      whatsapp: "Hola, me interesa la Tarta de Frutas. ¿Está disponible?",
    },
    {
      id: 5,
      name: "Macarons Franceses",
      description: "Delicados macarons en variedad de sabores y colores.",
      price: "$220",
      image: "/placeholder.svg?height=300&width=300",
      whatsapp:
        "Hola, me interesan los Macarons Franceses. ¿Están disponibles?",
    },
    {
      id: 6,
      name: "Cheesecake",
      description: "Cremoso cheesecake con coulis de frutos rojos.",
      price: "$320",
      image: "/placeholder.svg?height=300&width=300",
      whatsapp: "Hola, me interesa el Cheesecake. ¿Está disponible?",
    },
  ];

  const whatsappNumber = "573197332683";

  const createWhatsAppLink = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
  };

  return (
    <div className="min-h-screen bg-pink-50">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4 md:mb-0">
              Dulces Delicias
            </h1>
            <div className="flex items-center gap-4">
              <Link
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
              >
                <Phone size={20} />
                <span className="font-medium">Contacto</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <section className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Nuestros Productos de Repostería
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección de productos artesanales elaborados con
            los mejores ingredientes y mucho amor. ¡Haz tu pedido directamente
            por WhatsApp!
          </p>
        </section>

        {/* Products Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    {product.name}
                  </h3>
                  <span className="text-lg font-bold text-pink-600">
                    {product.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <Link
                  href={createWhatsAppLink(product.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  <ShoppingBag size={18} />
                  <span>Comprar por WhatsApp</span>
                </Link>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-pink-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">Dulces Delicias</h2>
              <p className="text-pink-100">
                Repostería artesanal para cada ocasión
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <p className="mb-2">¿Tienes alguna pregunta?</p>
              <Link
                href={createWhatsAppLink(
                  "Hola, me gustaría recibir más información sobre sus productos."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-green-600 hover:bg-green-100 transition-colors py-2 px-4 rounded-md font-medium"
              >
                <Phone size={18} />
                <span>Contáctanos por WhatsApp</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
