import Image from "next/image";
import styles from "./ChatHeader.module.css";
import { useChatStore } from "@/stores/useChatStore";
import { getChatParticipantsByIds } from "@/utils/helpers/contactHelper";
import { PhoneIconButton } from "../IconButtons/PhoneIconButton";
import { VideoIconButton } from "../IconButtons/VideoIconButton";
import { SearchIconButton } from "../IconButtons/SearchIconButton";
import { MoreOptionsIconButton } from "../IconButtons/MoreOptionsIconButton";

export function ChatHeader() {
  const selectedChatId = useChatStore((state) => state.selectedChatId);

  const chats = useChatStore((state) => state.chats);

  if (selectedChatId === null || selectedChatId === undefined) {
    return <span></span>;
  }

  const selectedChat = chats.find((chat) => chat.id === selectedChatId) ?? null;

  if (selectedChat === null) {
    return <span></span>;
  }

  const isGroup = selectedChat!.type === "group";
  const participants = isGroup
    ? getChatParticipantsByIds(
        selectedChat!.participants.map((part) => part.contactId)
      )
    : null;

  return (
    <div className={styles.header}>
      <div className={styles.detailsContent}>
        <Image
          src={selectedChat!.avatarUrl!}
          alt="Profile"
          width={40}
          height={40}
          className={styles.image}
        />
        <div className={styles.textDetails}>
          <span>{selectedChat!.name}</span>
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
