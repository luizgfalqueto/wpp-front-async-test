import Image from "next/image";
import styles from "./ChatHeader.module.css";
import { Chat } from "@/types/chat";
import { getChatParticipantsByIds } from "@/utils/helpers/contactHelper";
import { PhoneIconButton } from "../IconButtons/PhoneIconButton";
import { VideoIconButton } from "../IconButtons/VideoIconButton";
import { SearchIconButton } from "../IconButtons/SearchIconButton";
import { MoreOptionsIconButton } from "../IconButtons/MoreOptionsIconButton";

export function ChatHeader({ chat }: { chat: Chat }) {
  const isGroup = chat.type === "group";
  const participants = isGroup
    ? getChatParticipantsByIds(chat.participants.map((part) => part.contactId))
    : null;
  return (
    <div className={styles.header}>
      <div className={styles.detailsContent}>
        <Image
          src={chat.avatarUrl!}
          alt="Profile"
          width={40}
          height={40}
          className={styles.image}
        />
        <div className={styles.textDetails}>
          <span>{chat.name}</span>
          {isGroup && (
            <span className={styles.subtitle}>
              {participants?.map((part) => part.name).join(", ")}
            </span>
          )}
          {isGroup && participants?.length == 1 && (
            <span className={styles.subtitle}>Você</span>
          )}
        </div>
      </div>

      <div className={styles.actions}>
        <VideoIconButton />
        <PhoneIconButton
          selected={true}
          withBackground={false}
          tooltipInBottom={true}
        />
        <SearchIconButton />
        <MoreOptionsIconButton />
      </div>
    </div>
  );
}
