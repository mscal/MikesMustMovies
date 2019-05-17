import React, { useState } from "react";

const useHideOnScroll = () => {
  const [hidden, setHidden] = useState(true);

  const handleScroll = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    setHidden(top <= 750);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return hidden;
};

export default useHideOnScroll;