import Image from "next/image";
import styles from "./ProfileIcon.module.css";

export function ProfileIcon() {
  return (
    <div className={styles.container}>
      <Image
        src="/images/person.jpg"
        alt="Profile"
        width={40}
        height={40}
        className={styles.image}
      />
    </div>
  );
}
