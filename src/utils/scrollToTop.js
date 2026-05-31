import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
};

export const ScrollToTopOnNavigate = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return null;
};

export default scrollToTop;