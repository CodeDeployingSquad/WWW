import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import cn from "classnames";
import styles from "./index.module.css";
import Image from "next/image";
import CDSLogo from "/public/cds_circle.png";

const variants = {
  hidden: { opacity: 0 },
  active: { opacity: 1 },
};

function Card({
  alt,
  href,
  title,
  icon: Icon,
  className,
  children,
}: {
  href: string;
  icon: React.ElementType;
  title: "repo" | "pack";
  alt?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const [hovering, setHovering] = React.useState(false);
  return (
    <Link
      className={cn(
        styles["counter-border"],
        "w-[calc(100%_-_0px)] h-[304]px sm:!w-[488px] sm:h-[352px]"
      )}
      href={href}
      onMouseEnter={() => {
        setHovering(true);
      }}
      onMouseLeave={() => {
        setHovering(false);
      }}
    >
      <motion.i
        animate={hovering ? "active" : "active  "}
        aria-hidden="true"
        initial="hidden"
        variants={variants}
      />
      <div
        className={cn(
          "relative w-full h-full max-w-full !pb-12 pt-8 md:!pb-4 md:!pt-4 p-3 rounded-xl overflow-hidden flex flex-col items-center justify-center border border-[rgba(255,255,255,0.05)]",
          className
        )}
      >
        <div className="flex items-center justify-center flex-1 mb-7 md:mb-0">
          <Icon />
        </div>

        <div className="flex flex-col items-center flex-1">
          {title === "pack" ? (
            <Image
              src={CDSLogo}
              alt={alt}
              className="w-[160px] md:w-[220px] mb-3 fill-black dark:fill-white"
            />
          ) : (
            <Image
              src={CDSLogo}
              alt={alt}
              className="w-[160px] md:w-[220px] mb-3 fill-black dark:fill-white"
            />
          )}
          {children}
        </div>
      </div>
    </Link>
  );
}

export default Card;
