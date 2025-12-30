import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";
import Logo from "./Logo";
import { Button } from "./ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="hover:opacity-80 transition-opacity">
            <Logo size="sm" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/6m_clothing_brand/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="hidden lg:inline">@6M_clothing_brand</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {/* Instagram Link Mobile */}
            <a
              href="https://www.instagram.com/6m_clothing_brand/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Instagram className="h-5 w-5" />
              <span>Follow @6M_clothing_brand</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
