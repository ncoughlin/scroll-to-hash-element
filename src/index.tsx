import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

interface ScrollToHashElementProps {
  behavior?: ScrollBehavior;
  inline?: ScrollLogicalPosition;
  block?: ScrollLogicalPosition;
}

const ScrollToHashElement = ({
  behavior = "auto",
  inline = "nearest",
  block = "start",
}: ScrollToHashElementProps) => {
  const location = useLocation();

  useLayoutEffect(() => {
    const { hash } = location;

    const removeHashCharacter = (str: string) => {
      const result = str.slice(1);
      return result;
    };

    if (hash) {
      const element = document.getElementById(removeHashCharacter(hash));

      if (element) {
        element.scrollIntoView({
          behavior: behavior,
          inline: inline,
          block: block,
        });
      }
    }
  }, [location]);

  return null;
};

export default ScrollToHashElement;
