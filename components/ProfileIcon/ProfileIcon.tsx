import Image from "next/image";
import styles from "./ProfileIcon.module.css";

interface ProfileIconProps {
  onClick?: () => void;
}

export function ProfileIcon({ onClick }: ProfileIconProps) {
  return (
    <div className={styles.container} onClick={onClick}>
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
