"use client";

import { useEffect, useState } from "react";

export function useActiveNav(navHrefs: string[]) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    console.log(navHrefs);
    if (!("IntersectionObserver" in window)) return;

    const sections = navHrefs
      .map((href) => document.querySelector(href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.45, rootMargin: "0px 0px -45% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [navHrefs]);

  return activeId;
}
