import Image from "next/image";
import styles from "./Icons.module.css";

export function MetaIconButton() {
  return (
    <div className={styles.container}>
      <Image
        src="/icons/meta-ai-logo.png"
        alt="Icone da Meta AI"
        width={22}
        height={22}
      />
    </div>
  );
}
