import { Link } from "react-router-dom";
import { Coffee, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Coffee className="h-8 w-8 text-accent" />
              <span className="font-display text-2xl font-bold">Kopi Kita</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Tempat terbaik untuk menikmati kopi berkualitas dengan suasana hangat dan nyaman.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Menu</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/menu" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Menu Minuman
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Toko Online
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <span>Jl. Puter, Rawajarit, Menganti, Kesugihan, Cilacap, Jawa Tengah</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 text-accent" />
                <a href="https://wa.me/6288213407868" className="hover:text-accent transition-colors">
                  +62 882 1340 7868
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 text-accent" />
                <span>halo@kopikita.id</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Jam Buka</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="flex justify-between">
                <span>Senin - Jumat</span>
                <span>07:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sabtu - Minggu</span>
                <span>08:00 - 23:00</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 Kopi Kita. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
