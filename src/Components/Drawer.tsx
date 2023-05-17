import { useRef, useEffect, ReactNode } from "react";
import cn from "classnames";
import "../scss/Drawer.scss";

interface Props {
  isOpen: boolean;
  children: ReactNode;
  // className: string;
  onClose: () => void;
  // position: string;
}

function Drawer({ isOpen, children, onClose }: Props) {
  const bodyRef = useRef(document.querySelector("body"));
  const position = "left";

  useEffect(() => {
    const updatePageScroll = () => {
      if (isOpen) {
        bodyRef.current.style.overflow = "hidden";
      } else {
        bodyRef.current.style.overflow = "";
      }
    };

    updatePageScroll();
  }, [isOpen]);

  return (
    <div
      aria-hidden={isOpen ? "false" : "true"}
      className={cn("drawer-container", {
        open: isOpen,
      })}
    >
      <div className={cn("drawer", position)} role="dialog">
        {children}
      </div>
      <div className="backdrop" onClick={onClose} />
    </div>
  );
}

export default Drawer;
