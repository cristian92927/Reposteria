import { Header } from "@/components/layout/Header";
import { ProductCard } from "@/components/products/ProductCard";

export default function ReposteriePage() {
  const products = [
    {
      id: 1,
      name: "Red velvet",
      description:
        "El pastel de terciopelo rojo es un pastel en capas de color rojo con glaseado de queso crema.",
      price: "$350",
      images: [
        "/images/products/red-velvet/RedVelvet.jpg",
        "/images/products/red-velvet/Redvelvet1.jpg",
        "/images/products/red-velvet/Redvelvet2.jpg",
        // Puedes añadir más imágenes nuevas aquí
      ],
      whatsapp: "Hola, me interesa el Red Velvet. ¿Está disponible?",
    },
    {
      id: 2,
      name: "Cupcakes Variados",
      description: "Surtido de cupcakes con diferentes sabores y decoraciones.",
      price: "$180",
      images: [
        "/images/products/Cake/Cakes1.jpg",
        "/images/products/Cake/Cakes2.jpg",
        "/images/products/Cake/Cake3.jpg",
      ],
      whatsapp: "Hola, me interesan los Cupcakes Variados. ¿Están disponibles?",
    },
    {
      id: 3,
      name: "Tres Leches",
      description:
        "El pastel, tarta o torta de tres leches es un postre tradicional latinoamericano. Consiste en un bizcocho bañado con tres tipos de lácteo",
      price: "$120",
      images: [
        "/images/products/Tres-leches/Tres_leches1.jpg",
        "/images/products/Tres-leches/Tres_leches2.jpg",
        "/images/products/Tres-leches/Tres_leches3.jpg",
      ],
      whatsapp: "Hola, me interesa la tres leches. ¿Está disponible?",
    },
    {
      id: 4,
      name: "Tarta de Frutas",
      description: "Tarta fresca con crema pastelera y frutas de temporada.",
      price: "$280",
      images: [
        "/placeholder.svg?height=300&width=300&text=Tarta+1",
        "/placeholder.svg?height=300&width=300&text=Tarta+2",
      ],
      whatsapp: "Hola, me interesa la Tarta de Frutas. ¿Está disponible?",
    },
    {
      id: 5,
      name: "Macarons Franceses",
      description: "Delicados macarons en variedad de sabores y colores.",
      price: "$220",
      images: [
        "/placeholder.svg?height=300&width=300&text=Macarons+1",
        "/placeholder.svg?height=300&width=300&text=Macarons+2",
        "/placeholder.svg?height=300&width=300&text=Macarons+3",
      ],
      whatsapp:
        "Hola, me interesan los Macarons Franceses. ¿Están disponibles?",
    },
    {
      id: 6,
      name: "Cheesecake",
      description: "Cremoso cheesecake con coulis de frutos rojos.",
      price: "$320",
      images: [
        "/placeholder.svg?height=300&width=300&text=Cheesecake+1",
        "/placeholder.svg?height=300&width=300&text=Cheesecake+2",
      ],
      whatsapp: "Hola, me interesa el Cheesecake. ¿Está disponible?",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nuestros Productos de Repostería
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Descubre nuestra selección de productos artesanales elaborados con
            los mejores ingredientes y mucho amor. ¡Haz tu pedido directamente
            por WhatsApp!
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </section>
      </main>

      <footer className="bg-pink-600 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-2">Kry cake</h2>
              <p className="text-pink-100">
                Repostería artesanal para cada ocasión
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <p className="mb-4 text-lg">¿Tienes alguna pregunta?</p>
              <a
                href={`https://wa.me/573197332683?text=${encodeURIComponent(
                  "Hola, me gustaría recibir más información sobre sus productos."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-pink-600 hover:bg-pink-50 transition-colors py-3 px-6 rounded-full font-medium"
              >
                <span>Contáctanos por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
