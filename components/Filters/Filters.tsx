"use client";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Filter.module.css";

const filters = ["Todos", "Não lidos", "Favoritos", "Grupos"];

export function Filters() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [visibleCount, setVisibleCount] = useState(filters.length);

  useEffect(() => {
    const calculateVisible = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const buttons = Array.from(
        containerRef.current.querySelectorAll(
          `.${styles.filterButton}, .${styles.filterButtonSelected}`
        )
      ) as HTMLElement[];

      let currentWidth = 0;
      let count = 0;
      const gap = 8;

      for (let i = 0; i < buttons.length; i++) {
        const buttonWidth = buttons[i].offsetWidth;
        if (
          currentWidth + buttonWidth + (count > 0 ? gap : 0) <=
          containerWidth - 80
        ) {
          currentWidth += buttonWidth + gap;
          count++;
        } else {
          break;
        }
      }
      setVisibleCount(count);
    };

    window.addEventListener("resize", calculateVisible);
    calculateVisible();
    return () => window.removeEventListener("resize", calculateVisible);
  }, []);

  const handleToggleMenu = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMenuPosition({ top: rect.bottom + 5, left: rect.left });
    }
    setIsOpen(!isOpen);
  };

  const visibleFilters = filters.slice(0, visibleCount);
  const menuFilters = filters.slice(visibleCount);

  return (
    <div className={styles.container} ref={containerRef}>
      {visibleFilters.map((filter) => (
        <button
          key={filter}
          className={
            filter === "Todos"
              ? styles.filterButtonSelected
              : styles.filterButton
          }
        >
          {filter}
        </button>
      ))}

      {menuFilters.length > 0 && (
        <div className={styles.dropdown}>
          <button
            className={styles.filterButton}
            ref={buttonRef}
            onClick={handleToggleMenu}
          >
            ▾
          </button>
          {isOpen &&
            createPortal(
              <div
                className={styles.menu}
                style={{
                  position: "fixed",
                  top: menuPosition.top,
                  left: menuPosition.left,
                }}
              >
                {menuFilters.map((filter) => (
                  <button key={filter} className={styles.menuItem}>
                    {filter}
                  </button>
                ))}
              </div>,
              document.body
            )}
        </div>
      )}
    </div>
  );
}
