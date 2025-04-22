
import React, { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number; // ms between letters
  onFinish?: () => void;
  as?: keyof JSX.IntrinsicElements; // like "div", "span", "p"
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  className = "",
  delay = 70,
  onFinish,
  as = "span"
}) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    setDisplayed(""); // reset on text change
    let idx = 0;
    let cancelled = false;
    function type() {
      if (cancelled) return;
      if (idx <= text.length) {
        setDisplayed(text.slice(0, idx));
        idx++;
        setTimeout(type, delay);
      } else if (onFinish) {
        onFinish();
      }
    }
    type();
    return () => { cancelled = true; };
  }, [text, delay, onFinish]);
  const Comp = as as any;
  return <Comp className={className}>{displayed}</Comp>;
};

export default TypewriterText;
