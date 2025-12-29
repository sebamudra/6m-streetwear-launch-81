import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  onBuy: (product: Product) => void;
}

const ProductCard = ({ product, onBuy }: ProductCardProps) => {
  return (
    <div className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300">
      {/* Product Image */}
      <div className="aspect-square bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-6xl text-muted-foreground/30 group-hover:text-primary/30 transition-colors">
            6M
          </span>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
          <Button
            size="sm"
            onClick={() => onBuy(product)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
