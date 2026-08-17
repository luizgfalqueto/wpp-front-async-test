import { Chat } from "@/types/chat";
import { Message } from "@/types/message";

import { getChatParticipantById } from "@/utils/helpers/contactHelper";
import { generateSenderColor } from "@/utils/helpers/colorHelper";

import styles from "../../app/home/chat/page.module.css";
import messageStyles from "../../app/home/chat/[chatId]/Message.module.css";
import { MessageTail } from "../MessageTail/MessageTail";

type MessageListProps = {
  chat: Chat | null;
};

export default function MessageList({ chat }: MessageListProps) {
  const messages = chat
    ? renderMessages(chat.messages, chat.type === "group")
    : [];

  if (messages.length == 0) {
    return <p>Nenhuma conversa</p>;
  }

  return (
    <div className={styles.messageInnerContainer}>
      {messages.map((message) => message)}
    </div>
  );
}

function renderMessages(messages: Message[], isGroup: boolean) {
  return messages.map((message, index) => {
    const isLoggedSender = message.senderId === "me";
    const nextMessage = messages[index + 1];

    const hasSameSenderAfter = nextMessage?.senderId === message.senderId;

    const time = new Date(message.timestamp).toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const otherSender = getChatParticipantById(message.senderId);
    const colorSenderName = generateSenderColor(message.senderId);

    let content;

    if (message.deleted) {
      return <span key={message.id}></span>;
    }
    if (message.type === "system") {
      return systemMessage(message.system.text);
    } else {
      content = getMessageContentByType(message);
    }

    return (
      <div
        key={message.id}
        className={
          isLoggedSender
            ? messageStyles.messageContentCurrentSender
            : messageStyles.messageContentOtherSender
        }
      >
        <div
          className={
            hasSameSenderAfter
              ? isLoggedSender
                ? messageStyles.meTailHidded
                : messageStyles.otherTailHidded
              : isLoggedSender
              ? messageStyles.meSender
              : messageStyles.otherSender
          }
        >
          <div className={messageStyles.messageText}>
            {!hasSameSenderAfter && (
              <MessageTail
                className={
                  isLoggedSender
                    ? messageStyles.meTail
                    : messageStyles.otherTail
                }
              />
            )}
            <span style={{ color: colorSenderName! }}>
              {isGroup && otherSender?.name}
            </span>
            {content}
          </div>
          <div className={messageStyles.timestamp}>{time}</div>
        </div>
      </div>
    );
  });
}

function getMessageContentByType(message: Message) {
  switch (message.type) {
    case "text":
      if (message.text === "") {
        return <span></span>;
      }
      return <span>{message.text}</span>;

    case "image":
      return (
        <div key={message.id}>
          <div className={messageStyles.media}>Imagem</div>

          {message.media.caption && <span>{message.media.caption}</span>}
        </div>
      );

    case "video":
      return (
        <div key={message.id}>
          <div className={messageStyles.media}>Video</div>

          {message.media.caption && <span>{message.media.caption}</span>}
        </div>
      );

    case "voice":
      return (
        <div key={message.id}>
          <div className={messageStyles.media}>Áudio</div>

          {message.media.caption && <span>{message.media.caption}</span>}
        </div>
      );

    case "document":
      return (
        <div key={message.id}>
          <div className={messageStyles.media}>Arquivo</div>

          {message.media.caption && <span>{message.media.caption}</span>}
        </div>
      );

    case "sticker":
      return (
        <div key={message.id}>
          <div className={messageStyles.media}>Sticker</div>

          {message.media.caption && <span>{message.media.caption}</span>}
        </div>
      );

    case "location":
      return (
        <div key={message.id} className={messageStyles.location}>
          📍
          <strong>{message.location.name}</strong>
          <span>{message.location.address}</span>
        </div>
      );

    case "contact":
      return (
        <div key={message.id} className={messageStyles.contact}>
          👤 {message.contactCard.name}
          <br />
          {message.contactCard.phone}
        </div>
      );
  }
}

function systemMessage(message: string) {
  return (
    <div className={messageStyles.systemMessage}>
      <p className={messageStyles.systemMessageText}>{message}</p>
    </div>
  );
}
