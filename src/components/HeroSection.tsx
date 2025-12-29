import Logo from "./Logo";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background noise overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background pointer-events-none" />
      
      {/* Red glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 text-center px-4">
        {/* Main Logo */}
        <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <Logo size="hero" className="text-glow" />
        </div>

        {/* Tagline */}
        <h1 
          className="mt-4 text-lg md:text-2xl font-light tracking-[0.3em] uppercase text-muted-foreground animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          Modern streetwear. Real style.
        </h1>

        {/* CTA Button */}
        <div 
          className="mt-12 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-6 text-lg uppercase tracking-widest animate-pulse-glow"
          >
            <a href="#shop">Shop Now</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#shop" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
