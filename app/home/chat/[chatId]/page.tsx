"use client";

import { usePathname } from "next/navigation";
import { getChatById } from "@/utils/helpers/chatHelper";
import styles from "../page.module.css";
import { AttachIconButton } from "@/components/IconButtons/AttachIconButton";
import { StickerIconButton } from "@/components/IconButtons/StickerIconButton";
import { RecordIconButton } from "@/components/IconButtons/RecordIconButton";

export default function ChatPage() {
  const pathName = usePathname();

  const activeChat = pathName.split("/")[3];

  const chat = getChatById(activeChat);

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messageContainer}></div>
      <div className={styles.bottomBar}>
        <AttachIconButton />
        <StickerIconButton />
        <input
          type="text"
          placeholder="Digite uma mensagem"
          className={styles.input}
        />
        <RecordIconButton />
      </div>
    </div>
  );
}
