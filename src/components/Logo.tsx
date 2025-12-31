import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  variant?: "text" | "image";
}

const sizeClasses = {
  sm: "h-8 md:h-10",
  md: "h-12 md:h-14",
  lg: "h-16 md:h-20",
  xl: "h-24 md:h-32",
  hero: "h-48 md:h-64 lg:h-80",
};

const textSizeClasses = {
  sm: "text-2xl",
  md: "text-4xl",
  lg: "text-6xl",
  xl: "text-8xl",
  hero: "text-[8rem] md:text-[12rem] lg:text-[16rem]",
};

const Logo = ({ className, size = "md", variant = "image" }: LogoProps) => {
  // Image/text-based logo (graffiti bubble style)
  if (variant === "image") {
    return (
      <div className={cn("relative flex items-center justify-center", sizeClasses[size], className)}>
        <div className={cn(
          "flex items-center justify-center font-display tracking-tight select-none",
          textSizeClasses[size]
        )}>
          <span className="text-foreground">6</span>
          <span className="text-primary ml-2">M</span>
        </div>
      </div>
    );
  }

  // Text fallback
  return (
    <div className={cn("font-display tracking-tight select-none", textSizeClasses[size], className)}>
      <span className="text-foreground">6</span>
      <span className="text-primary ml-2">M</span>
    </div>
  );
};

export default Logo;
