import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationhange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationhange);

    return () => {
      window.removeEventListener("popstate", onLocationhange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
