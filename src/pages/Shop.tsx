import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { useProducts } from "@/hooks/useProducts";
import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingBag } from "lucide-react";

export default function Shop() {
  const { products, isLoading, error } = useProducts(20);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Toko <span className="text-accent">Online</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Belanja makanan dan snack favorit Anda dengan mudah. 
            Dikirim langsung ke rumah Anda.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="aspect-square rounded-lg" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-destructive">{error}</p>
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.node.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <ShoppingBag className="h-20 w-20 mx-auto text-muted-foreground mb-6" />
              <h2 className="font-display text-2xl font-semibold mb-4">Belum Ada Produk</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Toko kami sedang dalam proses pengisian. Silakan beritahu kami produk apa yang ingin Anda tambahkan melalui chat.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
