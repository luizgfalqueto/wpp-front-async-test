import Image from "next/image";
import styles from "./ProfileIcon.module.css";
import { tSystemMessage } from "@/utils/internacionalization/tMessages";

interface ProfileIconProps {
  onClick?: () => void;
  avatarUrl?: string;
}

export function ProfileIcon({ onClick, avatarUrl }: ProfileIconProps) {
  return (
    <div className={styles.containerTooltip}>
      <div className={styles.container} onClick={onClick}>
        <Image
          src={avatarUrl || "/images/person.jpg"}
          alt="Profile"
          width={40}
          height={40}
          className={styles.image}
        />
      </div>
      <span className={styles.tooltip}>
        {tSystemMessage("tooltip_you", "Você")}
      </span>
    </div>
  );
}
