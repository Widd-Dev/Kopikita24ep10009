import { useState, useEffect } from "react";
import { ShopifyProduct } from "@/lib/shopify/types";
import { storefrontApiRequest, PRODUCTS_QUERY, PRODUCT_BY_HANDLE_QUERY } from "@/lib/shopify/api";

export function useProducts(limit: number = 20) {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        const data = await storefrontApiRequest(PRODUCTS_QUERY, { first: limit });
        
        if (data?.data?.products?.edges) {
          setProducts(data.data.products.edges);
        }
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch products");
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, [limit]);

  return { products, isLoading, error };
}

export function useProduct(handle: string) {
  const [product, setProduct] = useState<ShopifyProduct["node"] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      if (!handle) return;
      
      try {
        setIsLoading(true);
        const data = await storefrontApiRequest(PRODUCT_BY_HANDLE_QUERY, { handle });
        
        if (data?.data?.productByHandle) {
          setProduct(data.data.productByHandle);
        }
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch product");
      } finally {
        setIsLoading(false);
      }
    }

    fetchProduct();
  }, [handle]);

  return { product, isLoading, error };
}
