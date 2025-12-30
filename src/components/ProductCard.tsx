import { Link } from "react-router-dom";
import { ShopifyProduct } from "@/lib/shopify/types";
import { useCartStore } from "@/stores/cartStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Plus } from "lucide-react";
import { toast } from "sonner";

interface ProductCardProps {
  product: ShopifyProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const { node } = product;
  
  const firstVariant = node.variants.edges[0]?.node;
  const firstImage = node.images.edges[0]?.node;
  const price = node.priceRange.minVariantPrice;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!firstVariant) {
      toast.error("Produk tidak tersedia");
      return;
    }
    
    addItem({
      product,
      variantId: firstVariant.id,
      variantTitle: firstVariant.title,
      price: firstVariant.price,
      quantity: 1,
      selectedOptions: firstVariant.selectedOptions || [],
    });
    
    toast.success("Ditambahkan ke keranjang", {
      description: node.title,
      position: "top-center",
    });
  };

  return (
    <Link to={`/product/${node.handle}`}>
      <Card className="group overflow-hidden border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-warm bg-card">
        <div className="aspect-square overflow-hidden bg-muted">
          {firstImage ? (
            <img
              src={firstImage.url}
              alt={firstImage.altText || node.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-secondary">
              <ShoppingCart className="h-12 w-12 text-muted-foreground" />
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-display font-semibold text-lg mb-1 line-clamp-1 group-hover:text-accent transition-colors">
            {node.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3 h-10">
            {node.description || "Deskripsi produk"}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-accent">
              {price.currencyCode} {parseFloat(price.amount).toLocaleString('id-ID')}
            </span>
            <Button
              size="sm"
              variant="outline"
              className="group/btn hover:bg-accent hover:text-accent-foreground hover:border-accent"
              onClick={handleAddToCart}
            >
              <Plus className="h-4 w-4 mr-1" />
              Tambah
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
