import { useState } from "react";
import ProductCard, { Product } from "./ProductCard";
import CheckoutModal from "./CheckoutModal";

const products: Product[] = [
  {
    id: "snapback-001",
    name: "6M Snapback Hat",
    price: 20,
    image: "snapback.png",
    category: "Hat",
    tagline: "Official 6 Motors drop",
  },
  {
    id: "tshirt-001",
    name: "6M Unisex T-Shirt",
    price: 27,
    image: "tshirt.png",
    category: "T-Shirt",
    tagline: "Official 6 Motors drop",
  },
  {
    id: "hoodie-001",
    name: "6M Unisex Hoodie",
    price: 40,
    image: "hoodie.png",
    category: "Hoodie",
    tagline: "Official 6 Motors drop",
  },
];

const ShopSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleBuy = (product: Product) => {
    setSelectedProduct(product);
    setIsCheckoutOpen(true);
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

      {/* Checkout Modal */}
      <CheckoutModal
        product={selectedProduct}
        isOpen={isCheckoutOpen}
        onClose={() => {
          setIsCheckoutOpen(false);
          setSelectedProduct(null);
        }}
      />
    </section>
  );
};

export default ShopSection;
