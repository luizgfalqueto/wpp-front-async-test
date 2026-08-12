import styles from "./IconButton.module.css";
import Image from "next/image";

interface IconButtonProps {
  src: string;
  srcSelected: string;
  alt: string;
  selected?: boolean;
}

export function IconButton({
  src,
  srcSelected,
  alt,
  selected,
}: IconButtonProps) {
  const className = selected ? styles.iconButtonSelected : styles.iconButton;

  return (
    <div className={className}>
      <Image
        src={selected ? srcSelected : src}
        alt={alt}
        width={24}
        height={24}
      />
    </div>
  );
}
