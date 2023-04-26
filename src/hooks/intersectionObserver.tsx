import React, { useEffect } from "react";

const useIntersectionObserver = (ref: React.RefObject<HTMLInputElement>, cb: (entries: IntersectionObserverEntry[]) => void) => {
  useEffect(() => {
    const { current: currentLoader } = ref;
    if (!currentLoader) return;
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0.5
    };
    const observer = new IntersectionObserver(cb, option);
    observer.observe(currentLoader);
    return () => {
      observer.unobserve(currentLoader);
    }
  }, [cb]);
};

export default useIntersectionObserver;