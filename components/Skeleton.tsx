import React from "react";

interface SkeletonProps {
  variant?: "default" | "text";
  rounded?: string;
}

const Skeleton: React.FC<
  React.HTMLAttributes<HTMLDivElement> & SkeletonProps
> = ({
  className,
  children,
  variant = "default",
  rounded = "md",
  ...props
}) => {
  return (
    <div
      className={`animate-pulse ${`rounded-${rounded}`} ${
        variant === "default"
          ? "bg-slate-200 dark:bg-zinc-900"
          : "bg-white dark:bg-zinc-800"
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Skeleton;
