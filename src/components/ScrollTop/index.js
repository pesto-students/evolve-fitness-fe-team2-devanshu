import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

const ScrolltoTop = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};
export default ScrolltoTop;
