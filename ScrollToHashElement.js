import { useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
  let location = useLocation();

  let hashElement = useMemo(() => {
    let hash = location.hash;
    const removeHashCharacter = (str) => {
      const result = str.slice(1);
      return result;
    };

    if (hash) {
      let element = document.getElementById(removeHashCharacter(hash));
      return element;
    } else {
      return null;
    }
  }, [location]);

  useEffect(() => {
    if (hashElement) {
      hashElement.scrollIntoView({
        behavior: "smooth",
        // block: "end",
        inline: "nearest",
      });
    }
  }, [hashElement]);

  return null;
};

export default ScrollToHashElement;
