import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "hero";
}

const sizeClasses = {
  sm: "text-2xl",
  md: "text-4xl",
  lg: "text-6xl",
  xl: "text-8xl",
  hero: "text-[12rem] md:text-[16rem] lg:text-[20rem]",
};

const Logo = ({ className, size = "md" }: LogoProps) => {
  return (
    <div className={cn("font-display tracking-tight select-none", sizeClasses[size], className)}>
      <span className="text-foreground">6</span>
      <span className="text-primary">M</span>
    </div>
  );
};

export default Logo;
