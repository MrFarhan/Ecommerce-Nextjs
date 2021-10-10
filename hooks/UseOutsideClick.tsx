import React, { FC, useEffect } from "react";

interface Props {
  ref?: any;
  callback?: any;
}

const UseOutsideClick = (ref, callback) => {
  const clickHandler = (event) => {
    if (!ref?.current?.contains(event.target)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("click", clickHandler);
    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, []);
  return null;
};

export default UseOutsideClick;
