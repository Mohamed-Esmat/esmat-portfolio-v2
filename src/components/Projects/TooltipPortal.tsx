import { type ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface TooltipPortalProps {
  children: ReactNode;
  position: { top: number; left: number };
}

export const TooltipPortal = ({ children, position }: TooltipPortalProps) => {
  const elRef = useRef<HTMLDivElement | null>(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const el = elRef.current!;
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  }, []);

  return createPortal(
    <div
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        zIndex: 9999,
        pointerEvents: "auto",
      }}
    >
      {children}
    </div>,
    elRef.current
  );
};
