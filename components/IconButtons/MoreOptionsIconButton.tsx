"use client";
import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./Icons.module.css";

interface ProfileIconProps {
  onClick?: () => void;
}

export function MoreOptionsIconButton({ onClick }: ProfileIconProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });

  const handleMouseEnter = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPos({ 
        top: rect.bottom + 5, 
        left: rect.left + rect.width / 2 
      });
      setShowTooltip(true);
    }
  };

  return (
    <div 
      className={styles.container} 
      onClick={onClick}
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        className={styles.iconSelected}
      >
        <path
          fill="currentColor"
          d="M12 20c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41 0-.55.2-1.02.59-1.41.39-.4.86-.59 1.41-.59.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41 0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59Zm0-6c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41 0-.55.2-1.02.59-1.41.39-.4.86-.59 1.41-.59.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41 0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59Zm0-6c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41 0-.55.2-1.02.59-1.41.39-.4.86-.59 1.41-.59.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41 0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59Z"
        />
      </svg>
      {showTooltip && createPortal(
        <div 
          className={styles.tooltipBottom} 
          style={{ 
            position: 'fixed', 
            top: tooltipPos.top, 
            left: tooltipPos.left,
            visibility: 'visible',
            opacity: 1,
            transform: 'translateX(-50%)'
          }}
        >
          Mais opções
        </div>,
        document.body
      )}
    </div>
  );
}
