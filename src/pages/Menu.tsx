import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Droplets, Leaf, Cookie } from "lucide-react";

const menuCategories = [
  {
    title: "Espresso Based",
    icon: Coffee,
    items: [
      { name: "Espresso", price: "18.000", desc: "Single shot espresso murni" },
      { name: "Americano", price: "22.000", desc: "Espresso dengan air panas" },
      { name: "Cappuccino", price: "28.000", desc: "Espresso, steamed milk, foam" },
      { name: "Latte", price: "28.000", desc: "Espresso dengan susu creamy" },
      { name: "Mocha", price: "32.000", desc: "Espresso, susu, coklat" },
      { name: "Caramel Macchiato", price: "35.000", desc: "Latte dengan caramel drizzle" },
    ],
  },
  {
    title: "Manual Brew",
    icon: Droplets,
    items: [
      { name: "V60", price: "30.000", desc: "Pour over single origin" },
      { name: "Chemex", price: "35.000", desc: "Clean & bright flavor" },
      { name: "French Press", price: "28.000", desc: "Full body extraction" },
      { name: "Cold Brew", price: "32.000", desc: "12 jam cold extraction" },
      { name: "Aeropress", price: "28.000", desc: "Smooth & rich" },
    ],
  },
  {
    title: "Non-Coffee",
    icon: Leaf,
    items: [
      { name: "Matcha Latte", price: "30.000", desc: "Matcha Jepang premium" },
      { name: "Chocolate", price: "28.000", desc: "Belgian dark chocolate" },
      { name: "Teh Tarik", price: "22.000", desc: "Teh susu khas Nusantara" },
      { name: "Fresh Juice", price: "25.000", desc: "Jeruk/Apel/Mangga" },
      { name: "Vanilla Milkshake", price: "30.000", desc: "Creamy & refreshing" },
    ],
  },
  {
    title: "Makanan & Snack",
    icon: Cookie,
    items: [
      { name: "Croissant", price: "25.000", desc: "Butter croissant freshly baked" },
      { name: "Banana Bread", price: "20.000", desc: "Homemade banana bread" },
      { name: "Cookies", price: "15.000", desc: "Chocolate chip cookies" },
      { name: "Toast", price: "28.000", desc: "Roti bakar dengan berbagai topping" },
      { name: "Pasta Carbonara", price: "45.000", desc: "Pasta creamy dengan bacon" },
      { name: "Nasi Goreng", price: "38.000", desc: "Nasi goreng spesial kedai" },
    ],
  },
];

export default function Menu() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Menu <span className="text-accent">Kami</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nikmati berbagai pilihan kopi berkualitas dan hidangan lezat yang siap 
            menemani hari-hari Anda
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {menuCategories.map((category, index) => (
              <div key={category.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold">
                    {category.title}
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((item) => (
                    <Card key={item.name} className="border-border/50 hover:border-accent/50 transition-colors">
                      <CardContent className="p-5">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-lg">{item.name}</h3>
                          <span className="font-bold text-accent whitespace-nowrap ml-4">
                            Rp {item.price}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            * Harga dapat berubah sewaktu-waktu. Untuk pemesanan snack dan makanan secara online, 
            kunjungi halaman <a href="/shop" className="text-accent hover:underline">Toko</a> kami.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
