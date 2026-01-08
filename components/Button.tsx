import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: ReactNode;
}

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-sm hover:shadow",
    secondary: "bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500 shadow-sm hover:shadow",
    outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={classes}>
        {icon && <span>{icon}</span>}
        {children}
      </Link>
    );
  }
  
  return (
    <button onClick={onClick} className={classes}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}


