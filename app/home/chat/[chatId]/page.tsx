"use client";

import { useChatStore } from "@/stores/useChatStore";
import styles from "../page.module.css";
import { AttachIconButton } from "@/components/IconButtons/AttachIconButton";
import { StickerIconButton } from "@/components/IconButtons/StickerIconButton";
import { RecordIconButton } from "@/components/IconButtons/RecordIconButton";
import MessageList from "@/components/MessageList/MessageList";
import { Message } from "@/types/message";
import { SendMessageIconButton } from "@/components/IconButtons/SendMessageIconButton";
import { useState } from "react";
import { simulateMessageStatus } from "@/services/messageStatusService";

export default function ChatPage() {
  const selectedChatId = useChatStore((state) => state.selectedChatId);
  const [inputText, setInputText] = useState<string>("");

  const addMessage = useChatStore((state) => state.addMessage);

  function sendMessage(text: string) {
    console.log(text);
    if (!selectedChatId) return;

    const message: Message = {
      id: crypto.randomUUID(),
      chatId: selectedChatId,
      senderId: "me",
      timestamp: new Date().toISOString(),
      type: "text",
      text,
      status: "sending",
    };

    addMessage(selectedChatId, message);
    setInputText("");

    simulateMessageStatus(selectedChatId, message.id);
  }

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messageContainer}>
        <MessageList selectedChatId={selectedChatId} />
      </div>
      <div className={styles.bottomBar}>
        <AttachIconButton />
        <StickerIconButton />
        <input
          type="text"
          placeholder="Digite uma mensagem"
          className={styles.input}
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              sendMessage(inputText);
            }
          }}
        />
        {inputText === "" && <RecordIconButton />}
        {inputText !== "" && (
          <SendMessageIconButton onSend={() => sendMessage(inputText)} />
        )}
      </div>
    </div>
  );
}
