const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-8">
            THE <span className="text-primary">MINDSET</span>
          </h2>

          {/* Brand Story */}
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              <span className="text-foreground font-semibold">6 Motors</span> is more than clothing. It's a mindset.
            </p>
            <p>
              Built from the streets, designed for people who don't follow trends — 
              <span className="text-primary font-medium"> they create them.</span>
            </p>
            <p>
              Every piece we make carries the raw energy of the city, the pulse of the culture, 
              and the ambition of those who refuse to blend in.
            </p>
          </div>

          {/* Decorative line */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-primary/50" />
            <span className="font-display text-2xl text-primary">6M</span>
            <div className="h-px w-16 bg-primary/50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
