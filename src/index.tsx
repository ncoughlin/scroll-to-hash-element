import { useLayoutEffect, useState, useEffect } from "react";


interface ScrollToHashElementProps {
  behavior?: ScrollBehavior;
  inline?: ScrollLogicalPosition;
  block?: ScrollLogicalPosition;
}

const ScrollToHashElement = ({
  behavior = "auto",
  inline = "nearest",
  block = "start",
}: ScrollToHashElementProps):null => {
  const [hash, setHash] = useState(window.location.hash);
  const [count, setCount] = useState(0);
  
  const originalPushState = window.history.pushState;
  const originalReplaceState = window.history.replaceState;

  window.history.pushState = function (...args: any) {
    const result = originalPushState.apply(this, args);
    window.dispatchEvent(new Event('pushstate'));
    window.dispatchEvent(new Event('locationchange'));
    return result;
  };

  window.history.replaceState = function (...args: any) {
    const result = originalReplaceState.apply(this, args);
    window.dispatchEvent(new Event('replacestate'));
    window.dispatchEvent(new Event('locationchange'));
    return result;
  };

  window.addEventListener('popstate', () => {
    window.dispatchEvent(new Event('locationchange'));
  });

  useEffect(() => {
    const handleLocationChange = () => {
      setHash(window.location.hash);

      // We increment count just so the layout effect will run if the hash is the same.
      // Otherwise the user might click a hashlink a second time and it won't go anywhere.
      setCount(count=>count+1)
    };

    window.addEventListener('locationchange', handleLocationChange);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('locationchange', handleLocationChange);
    };
  }, []);


  useLayoutEffect(() => {

    const removeHashCharacter = (str: string) => {
      const result = str.slice(1);
      return result;
    };

    if (hash) {
      const element = document.getElementById(removeHashCharacter(hash));

      if (element) {
        console.log("scrollIntoView");
        element.scrollIntoView({
          behavior: behavior,
          inline: inline,
          block: block,
        });
      }
    }
  }, [hash, count]);

  return null;
};

export default ScrollToHashElement;
