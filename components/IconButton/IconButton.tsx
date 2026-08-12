import styles from "./IconButton.module.css";
import Image from "next/image";

interface IconButtonProps {
  src: string;
  srcSelected: string;
  alt: string;
  selected?: boolean;
  onClick?: () => void;
}

export function IconButton({
  src,
  srcSelected,
  alt,
  selected,
  onClick,
}: IconButtonProps) {
  const className = selected ? styles.iconButtonSelected : styles.iconButton;

  return (
    <div className={className} onClick={onClick}>
      <Image
        src={selected ? srcSelected : src}
        alt={alt}
        width={22}
        height={22}
      />
    </div>
  );
}
