
import { useState, useEffect } from "react";

/*
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

export default useWindowDimensions;*/

export const useWindowDimensions = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") { // 윈도우 타입이 언디파인드가 아닐때 실행
      const handleResize = () => { 
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize); // 클린업
    } else {
      return;
    }
  }, []);
  return windowSize;
};