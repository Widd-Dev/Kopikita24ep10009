import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Camera } from "lucide-react";
import heroCoffeeShop from "@/assets/hero-coffee-shop.jpg";
import cappuccino from "@/assets/products/cappuccino.jpg";

const galleryImages = [
  {
    src: heroCoffeeShop,
    alt: "Interior kedai kopi",
    caption: "Suasana nyaman di Kopi Kita"
  },
  {
    src: cappuccino,
    alt: "Cappuccino signature",
    caption: "Cappuccino dengan latte art"
  },
  {
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80",
    alt: "Biji kopi",
    caption: "Biji kopi pilihan terbaik"
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    alt: "Kopi dan suasana",
    caption: "Momen santai bersama kopi"
  },
  {
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80",
    alt: "Interior cafe",
    caption: "Area duduk yang cozy"
  },
  {
    src: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=800&q=80",
    alt: "Barista bekerja",
    caption: "Barista profesional kami"
  },
];

export default function Shop() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Galeri <span className="text-accent">Toko</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lihat suasana dan momen-momen indah di Kopi Kita
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {galleryImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-square">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-medium text-lg">{image.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Camera className="h-20 w-20 mx-auto text-muted-foreground mb-6" />
              <h2 className="font-display text-2xl font-semibold mb-4">Belum Ada Foto</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Galeri sedang dalam proses pengisian.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
