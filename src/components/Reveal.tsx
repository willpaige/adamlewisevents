"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

type RevealProps = {
  as?: ElementType;
  className?: string;
  delay?: number;
  style?: CSSProperties;
  children: ReactNode;
  /** Any extra props (e.g. `href` when `as={Link}`) are forwarded to the element. */
  [prop: string]: unknown;
};

export function Reveal({
  as: Component = "div",
  className = "",
  delay,
  style,
  children,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("visible");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const combinedStyle: CSSProperties = {
    ...(delay !== undefined ? { transitionDelay: `${delay}s` } : {}),
    ...style,
  };

  return (
    <Component ref={ref} className={`reveal ${className}`.trim()} style={combinedStyle} {...rest}>
      {children}
    </Component>
  );
}
