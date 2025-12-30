import Logo from "./Logo";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <Logo size="sm" />

          {/* Instagram */}
          <a
            href="https://www.instagram.com/6m_clothing_brand/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="h-5 w-5" />
            <span>Follow @6M_clothing_brand</span>
          </a>

          {/* Email */}
          <a 
            href="mailto:sixmotorsbrand@gmail.com" 
            className="font-graffiti text-xl text-primary hover:underline"
          >
            sixmotorsbrand@gmail.com
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © 2025 6 Motors. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
