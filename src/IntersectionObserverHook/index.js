import { useState, useEffect, useRef } from "react";

function useObserver({ params, domElement }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const callback = (entries) => {
      const [entry] = entries;

      setVisible(entry.isIntersecting);
    };
    /* const options = {
      root: null, // document.querySelector("#root"),
      rootMargin: "0px",
      threshold: 0.1,
    }; */

    const observer = new IntersectionObserver(callback, params);

    if (domRef.current) observer.observe(domRef.current);

    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, [params, domRef]);

  return [isVisible, domRef];
}

export default useObserver;
