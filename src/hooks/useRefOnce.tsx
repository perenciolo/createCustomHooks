import React from "react";

const useRefOnce = (click: number, cb: (n: number) => void) => {
  const fieldRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    if (click === 49 && fieldRef.current) {
      fieldRef.current.scrollIntoView({
        behavior: "smooth"
      });
      cb(NaN);
    }
  }, [click, cb]);
  return fieldRef;
};

export default useRefOnce;
