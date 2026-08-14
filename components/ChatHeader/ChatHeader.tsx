import Image from "next/image";
import styles from "./ChatHeader.module.css";
import { NewChatIconButton } from "../IconButtons/NewChatIconButton";
import { PhoneIconButton } from "../IconButtons/PhoneIconButton";
import { VideoIconButton } from "../IconButtons/VideoIconButton";

export function ChatHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.detailsContent}>
        <Image
          src={"/images/person.jpg"}
          alt="Profile"
          width={40}
          height={40}
          className={styles.image}
        />
        <div className={styles.textDetails}>
          <span>Você</span>
          <span className={styles.subtitle}>Você</span>
        </div>
      </div>

      <div className={styles.actions}>
        <VideoIconButton />
        <NewChatIconButton />
        <PhoneIconButton selected={true} withBackground={false} />
        <NewChatIconButton />
      </div>
    </div>
  );
}
