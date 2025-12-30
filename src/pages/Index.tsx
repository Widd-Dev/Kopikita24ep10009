import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { useProducts } from "@/hooks/useProducts";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Coffee, MapPin, Clock, ArrowRight, ShoppingBag } from "lucide-react";

export default function Index() {
  const { products, isLoading } = useProducts(4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/60 to-foreground/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Coffee className="h-10 w-10 text-accent" />
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Selamat Datang di{" "}
              <span className="text-accent">Kopi Kita</span>
            </h1>
            <p className="font-serif text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Nikmati secangkir kopi terbaik dengan suasana hangat dan nyaman. 
              Setiap tegukan adalah cerita, setiap kunjungan adalah kenangan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <Link to="/menu">
                  Lihat Menu
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foreground">
                <Link to="/shop">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Belanja Sekarang
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Coffee className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Kopi Berkualitas</h3>
              <p className="text-muted-foreground">
                Biji kopi pilihan dari petani lokal terbaik Indonesia
              </p>
            </div>
            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Lokasi Nyaman</h3>
              <p className="text-muted-foreground">
                Suasana cozy dengan interior rustic yang hangat
              </p>
            </div>
            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Buka Setiap Hari</h3>
              <p className="text-muted-foreground">
                Melayani Anda dari pagi hingga malam hari
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Produk <span className="text-accent">Terbaru</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Jelajahi koleksi makanan dan snack pilihan kami yang siap menemani waktu ngopi Anda
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="aspect-square rounded-lg" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.node.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground text-lg mb-4">
                Belum ada produk tersedia
              </p>
              <p className="text-sm text-muted-foreground">
                Silakan tambahkan produk melalui chat dengan memberitahu nama dan harga produk
              </p>
            </div>
          )}

          {products.length > 0 && (
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline">
                <Link to="/shop">
                  Lihat Semua Produk
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Cerita <span className="text-accent">Kami</span>
              </h2>
              <p className="font-serif text-primary-foreground/80 text-lg leading-relaxed mb-6">
                Kopi Kita lahir dari kecintaan kami terhadap kopi Indonesia. Kami percaya bahwa 
                secangkir kopi yang baik bisa menghubungkan orang-orang dan menciptakan momen 
                berharga dalam keseharian.
              </p>
              <p className="font-serif text-primary-foreground/80 text-lg leading-relaxed mb-8">
                Dengan suasana rustic yang hangat dan barista yang berdedikasi, kami menghadirkan 
                pengalaman ngopi yang tak terlupakan.
              </p>
              <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <Link to="/about">
                  Selengkapnya
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80"
                alt="Interior Kopi Kita"
                className="rounded-lg shadow-warm"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-lg">
                <p className="font-display text-3xl font-bold">5+</p>
                <p className="text-sm">Tahun Melayani</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Kunjungi Kedai Kami
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Rasakan sendiri kehangatan dan kenyamanan Kopi Kita. Kami tunggu kehadiran Anda!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/contact">
                <MapPin className="mr-2 h-5 w-5" />
                Lihat Lokasi
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
