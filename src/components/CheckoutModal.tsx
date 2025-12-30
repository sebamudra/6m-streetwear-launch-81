import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { CreditCard, Building2, Check } from "lucide-react";
import { Product } from "./ProductCard";

interface CheckoutModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

type PaymentMethod = "bank" | "paypal" | null;

const CheckoutModal = ({ product, isOpen, onClose }: CheckoutModalProps) => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    quantity: 1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate order submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast.success("Order submitted!", {
      description: "Check your email for confirmation.",
    });
  };

  const handleClose = () => {
    setPaymentMethod(null);
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      quantity: 1,
    });
    onClose();
  };

  if (!product) return null;

  const totalPrice = product.price * formData.quantity;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg bg-card border-border max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">
            {isSubmitted ? "Order Confirmed!" : "Complete Your Purchase"}
          </DialogTitle>
        </DialogHeader>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Thank you for your order!
            </h3>
            <p className="text-muted-foreground mb-4">
              A confirmation email has been sent to your inbox.
            </p>
            <p className="text-sm text-muted-foreground">
              Please send payment confirmation to:{" "}
              <a href="mailto:sixmotorsbrand@gmail.com" className="text-primary hover:underline">
                sixmotorsbrand@gmail.com
              </a>
            </p>
            <Button onClick={handleClose} className="mt-6">
              Close
            </Button>
          </div>
        ) : (
          <>
            {/* Product Summary */}
            <div className="bg-secondary/50 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-foreground">{product.name}</h4>
                  <p className="text-sm text-muted-foreground">{product.tagline}</p>
                </div>
                <span className="text-lg font-bold text-primary">€{product.price.toFixed(2)}</span>
              </div>
            </div>

            {/* Payment Method Selection */}
            {!paymentMethod ? (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Select your payment method:
                </p>
                <Button
                  variant="outline"
                  className="w-full justify-start h-auto py-4 px-4 border-border hover:border-primary"
                  onClick={() => setPaymentMethod("bank")}
                >
                  <Building2 className="h-5 w-5 mr-3 text-primary" />
                  <div className="text-left">
                    <p className="font-medium">Bank Transfer</p>
                    <p className="text-sm text-muted-foreground">Pay via bank transfer</p>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start h-auto py-4 px-4 border-border hover:border-primary"
                  onClick={() => setPaymentMethod("paypal")}
                >
                  <CreditCard className="h-5 w-5 mr-3 text-primary" />
                  <div className="text-left">
                    <p className="font-medium">PayPal / Stripe</p>
                    <p className="text-sm text-muted-foreground">Coming soon - order via email</p>
                  </div>
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Customer Details */}
                <div className="space-y-3">
                  <Input
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-secondary border-border"
                  />
                  <Input
                    type="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-secondary border-border"
                  />
                  <Input
                    type="tel"
                    placeholder="Phone *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-secondary border-border"
                  />
                  <Textarea
                    placeholder="Shipping Address *"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    required
                    className="bg-secondary border-border resize-none"
                    rows={3}
                  />
                  <div className="flex items-center gap-3">
                    <label className="text-sm text-muted-foreground">Quantity:</label>
                    <Input
                      type="number"
                      min={1}
                      max={10}
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 1 })}
                      className="w-20 bg-secondary border-border"
                    />
                  </div>
                </div>

                {/* Payment Instructions */}
                {paymentMethod === "bank" && (
                  <div className="bg-secondary/50 rounded-lg p-4 text-sm">
                    <h4 className="font-semibold text-foreground mb-2">Bank Transfer Instructions:</h4>
                    <p className="text-muted-foreground mb-2">
                      IBAN / Account number: <span className="text-foreground">(PLACEHOLDER)</span>
                    </p>
                    <p className="text-muted-foreground mb-2">
                      Variable symbol: <span className="text-foreground">order #XXXX</span>
                    </p>
                    <p className="text-muted-foreground">
                      Please send payment confirmation to:{" "}
                      <a href="mailto:sixmotorsbrand@gmail.com" className="text-primary hover:underline">
                        sixmotorsbrand@gmail.com
                      </a>
                    </p>
                  </div>
                )}

                {paymentMethod === "paypal" && (
                  <div className="bg-secondary/50 rounded-lg p-4 text-sm">
                    <h4 className="font-semibold text-foreground mb-2">PayPal / Stripe</h4>
                    <p className="text-muted-foreground mb-2">
                      Coming soon! For now, submit your order and we'll contact you with payment details.
                    </p>
                    <p className="text-muted-foreground">
                      Contact:{" "}
                      <a href="mailto:sixmotorsbrand@gmail.com" className="text-primary hover:underline">
                        sixmotorsbrand@gmail.com
                      </a>
                    </p>
                  </div>
                )}

                {/* Total */}
                <div className="flex justify-between items-center py-3 border-t border-border">
                  <span className="font-semibold text-foreground">Total:</span>
                  <span className="text-xl font-bold text-primary">€{totalPrice.toFixed(2)}</span>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setPaymentMethod(null)}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Order"}
                  </Button>
                </div>
              </form>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;
