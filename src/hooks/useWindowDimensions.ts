
import { useState, useEffect } from "react";

const getWindowDimensions = () => {
  if(typeof window !== 'undefined'){ 
    const { innerWidth: width, innerHeight: height } = window;
  
    return { width, height };
  } else {
    const weight = 0;
    const height = 0;
    return { weight, height};
  }
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    if(typeof window !== 'undefined'){ 
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowDimensions;
};

export default useWindowDimensions;