import React, { useState, useEffect, ReactNode } from "react";

interface HoverGraphicProps {
  children?: ReactNode; // React auto-assigns anything between tags as children, so we can make optional
  src: string; // img source (could be a local file or a URL)
  height?: string;
  width?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"; // default CSS object-fit options
  zIndex?: number; // custom z-index, default is 9999
  offsetTop?: number;
  offsetRight?: number;
  offsetBottom?: number;
  offsetLeft?: number;
  disabled?: boolean; // is the effect ubiquitously disabled? default: false
  disabledOnMobile?: boolean; // is the effect disabled on mobile? default: true
}

const HoverGraphic: React.FC<HoverGraphicProps> = ({
  children,
  src,
  height = "auto", // default height
  width = "auto", // default width
  objectFit = "cover", // default object-fit
  zIndex = 9999, // default z-index
  offsetTop = 0,
  offsetRight = 0,
  offsetBottom = 0,
  offsetLeft = 0,
  disabled = false, // default disabled state is false
  disabledOnMobile = true, // default disabled on mobile is true
}) => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobile =
        /android|webos|iphone|ipad|ipod|blackberry|windows phone/.test(
          userAgent
        );
      setIsMobile(mobile || window.innerWidth < 768);
    };

    const handleScroll = () => {
      if (isVisible) setIsVisible(false);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", checkIfMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  const handleMouseOver = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    if (!isMobile && !disabled) {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    }
  };

  const handleMouseOut = () => {
    setIsVisible(false);
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    if (isVisible) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
  };

  if (disabled || (disabledOnMobile && isMobile) || !src) {
    return <>{children}</>;
  }

  return (
    <>
      <span
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onMouseMove={handleMouseMove}
        style={{
          cursor: "pointer",
          display: "inline",
          position: "relative",
        }}
      >
        {children}
      </span>
      {isVisible && (
        <img
          src={src}
          alt="Hover effect"
          style={{
            borderRadius: "0",
            border: "none",
            position: "fixed",
            top: `${position.y + offsetTop - offsetBottom}px`,
            left: `${position.x + offsetLeft - offsetRight}px`,
            height,
            width,
            objectFit,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex,
          }}
        />
      )}
    </>
  );
};

export default HoverGraphic;
