import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { Instagram, Twitter, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Message sent!", {
      description: "We'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Twitter, label: "X / Twitter", href: "#" },
    { icon: Send, label: "TikTok", href: "#" },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
              GET IN <span className="text-primary">TOUCH</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Questions, collabs, or just want to say what's up? Hit us up.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-secondary border-border focus:border-primary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold uppercase tracking-wider"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Social Links */}
            <div className="flex flex-col justify-center">
              <h3 className="font-semibold text-foreground mb-6 uppercase tracking-wider">
                Follow Us
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                      <social.icon className="h-5 w-5" />
                    </div>
                    <span className="font-medium">{social.label}</span>
                  </a>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">Email:</span>{" "}
                  hello@6mclothing.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
