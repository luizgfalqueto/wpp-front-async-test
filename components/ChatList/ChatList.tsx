import styles from "./ChatList.module.css";
import Image from "next/image";
import { formatMessageDate } from "@/utils/helpers/dateHelper";
import { Chat } from "@/types/chat";
import { Message } from "@/types/message";
import { CheckReadMessageIcon } from "../CheckReadMessageIcon/CheckReadMessageIcon";
import { MutedChat } from "../MutedChat/MutedChat";
import { PinnedChat } from "../PinnedChat/PinnedChat";
import { UnreadChat } from "../UnreadChat/UnreadChat";
import { getContactById } from "@/utils/helpers/chatHelper";

export function ChatList({
  chats,
  searchText,
}: {
  chats: Chat[];
  searchText: string;
}) {
  return chats.map((chat) => (
    <ChatItem key={chat.id} chat={chat} searchText={searchText} />
  ));
}

function ChatItem({ chat, searchText }: { chat: Chat; searchText: string }) {
  const lastMessage: Message | undefined = chat.messages.find((message) => {
    return message.id == chat.lastMessageId;
  });

  const getMessageText = (message: Message): string => {
    if (message.type === "text") return message.text;
    if (message.type === "system") return message.system.text;
    return "Media/Outro";
  };

  const lastMessageText = lastMessage ? getMessageText(lastMessage) : "";

  const lastSender =
    chat.type === "group" ? getContactById(lastMessage?.senderId) : null;

  function escapeRegex(text: string) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function highlightText(text: string, searchText: string) {
    console.log(`Texto: ${text}`);
    console.log(`Search: ${searchText}`);
    if (!searchText) {
      return text;
    }

    const escapedSearch = escapeRegex(searchText);
    const regex = new RegExp(`(${escapedSearch})`, "gi");

    return text.split(regex).map((part, index) => {
      if (part.toLowerCase() === searchText.toLowerCase()) {
        return (
          <span key={index} className={styles.highlight}>
            {part}
          </span>
        );
      }

      return part;
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContent}>
        <Image
          src={chat.avatarUrl || "/images/person.jpg"}
          alt="Image do avatar da conversa"
          width={48}
          height={48}
          className={styles.image}
        />
      </div>
      <div className={styles.rightContent}>
        <div className={styles.topContent}>
          <p>{highlightText(chat.name, searchText)}</p>
          <p className={styles.timestamp}>
            {formatMessageDate(lastMessage?.timestamp || "")}
          </p>
        </div>
        <div className={styles.lastMessage}>
          <div className={styles.prefix}>
            {lastMessage?.senderId === "me" && (
              <CheckReadMessageIcon status={lastMessage?.status} />
            )}
            {lastSender != null && `${lastSender.name}:`}
            <p className={styles.lastMessageText}>{lastMessageText}</p>
          </div>
          <div className={styles.suffix}>
            {chat.pinned && <PinnedChat />}
            {chat.unreadCount > 0 && <UnreadChat count={chat.unreadCount} />}
            {chat.muted && <MutedChat />}
          </div>
        </div>
      </div>
    </div>
  );
}
