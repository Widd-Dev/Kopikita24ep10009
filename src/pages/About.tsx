import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Coffee, Heart, Users, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Tentang <span className="text-accent">Kopi Kita</span>
          </h1>
          <p className="font-serif text-lg md:text-xl max-w-2xl mx-auto text-white/90">
            Lebih dari sekadar kedai kopi, kami adalah rumah kedua bagi pecinta kopi
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Cerita <span className="text-accent">Kami</span>
              </h2>
              <div className="space-y-4 font-serif text-muted-foreground leading-relaxed">
                <p>
                  Kopi Kita didirikan pada tahun 2019 dengan satu misi sederhana: 
                  menghadirkan kopi berkualitas tinggi dalam suasana yang hangat dan nyaman.
                </p>
                <p>
                  Berawal dari kecintaan kami terhadap kopi Indonesia, kami bermitra langsung 
                  dengan petani kopi lokal di berbagai daerah seperti Aceh, Toraja, dan Flores 
                  untuk mendapatkan biji kopi terbaik.
                </p>
                <p>
                  Setiap cangkir kopi yang kami sajikan adalah hasil dari proses yang teliti, 
                  mulai dari pemilihan biji, roasting, hingga penyajian. Kami percaya bahwa 
                  kopi yang baik adalah kopi yang disajikan dengan cinta.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=800&q=80"
                alt="Barista menyajikan kopi"
                className="rounded-lg shadow-warm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Nilai-Nilai <span className="text-accent">Kami</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Coffee className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Kualitas</h3>
              <p className="text-muted-foreground text-sm">
                Hanya biji kopi terbaik yang kami gunakan untuk setiap cangkir
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Passion</h3>
              <p className="text-muted-foreground text-sm">
                Dibuat dengan kecintaan dan dedikasi terhadap seni kopi
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Komunitas</h3>
              <p className="text-muted-foreground text-sm">
                Membangun hubungan yang hangat dengan setiap pelanggan
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Lokal</h3>
              <p className="text-muted-foreground text-sm">
                Mendukung petani kopi lokal Indonesia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Tim <span className="text-accent">Kami</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-secondary">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display text-lg font-semibold">Budi Santoso</h3>
              <p className="text-muted-foreground text-sm">Founder & Head Roaster</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-secondary">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80"
                  alt="Head Barista"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display text-lg font-semibold">Sari Dewi</h3>
              <p className="text-muted-foreground text-sm">Head Barista</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-secondary">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80"
                  alt="Operations Manager"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display text-lg font-semibold">Andi Pratama</h3>
              <p className="text-muted-foreground text-sm">Operations Manager</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
