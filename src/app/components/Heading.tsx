import * as React from "react";

interface HeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

function Heading({
  title,
  subtitle,
  alignment = "center",
  className = "",
}:HeadingProps) {
  return (
    <div className={`text-${alignment} my-6 text-g ${className}`}>
      <h1 className="text-3xl font-bold tracking-wide text-gray-900  mt-16 lg:text-5xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-2 text-lg text-gray-600 md:text-xl">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 mx-auto ${
          alignment === "center" ? "w-24" : "w-16"
        } h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded`}
      />
    </div>
  );
};

export default Heading;
