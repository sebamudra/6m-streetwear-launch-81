import { toast } from "sonner";
import ProductCard, { Product } from "./ProductCard";

const products: Product[] = [
  {
    id: "hoodie-001",
    name: "6M Classic Hoodie",
    price: 79.99,
    image: "/placeholder.svg",
    category: "Hoodie",
  },
  {
    id: "tshirt-001",
    name: "6M Essential Tee",
    price: 39.99,
    image: "/placeholder.svg",
    category: "T-Shirt",
  },
  {
    id: "cap-001",
    name: "6M Street Cap",
    price: 29.99,
    image: "/placeholder.svg",
    category: "Cap",
  },
];

const ShopSection = () => {
  const handleBuy = (product: Product) => {
    toast.info(`Checkout coming soon!`, {
      description: `${product.name} - $${product.price.toFixed(2)}`,
    });
  };

  return (
    <section id="shop" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
            THE DROP
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Premium streetwear essentials. Limited quantities.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onBuy={handleBuy} />
          ))}
        </div>

        {/* Coming Soon Note */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            More drops coming soon. Stay tuned.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
