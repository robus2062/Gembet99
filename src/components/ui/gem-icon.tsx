
import { cn } from "@/lib/utils";

interface GemIconProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const GemIcon = ({ className, size = "md" }: GemIconProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(sizeClasses[size], "text-gem-400", className)}
    >
      <path
        d="M12 2L2 8L12 14L22 8L12 2Z"
        fill="currentColor"
        fillOpacity="0.8"
      />
      <path
        d="M2 8V16L12 22L22 16V8L12 14L2 8Z"
        fill="currentColor"
        fillOpacity="0.6"
      />
      <path
        d="M12 2L2 8L12 14L22 8L12 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 8V16L12 22L22 16V8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default GemIcon;
