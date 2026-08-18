import { Message } from "@/types/message";
import { useChatStore } from "@/stores/useChatStore";
import { getChatParticipantById } from "@/utils/helpers/contactHelper";
import { generateSenderColor } from "@/utils/helpers/colorHelper";
import { formatSeparatorMessageDate } from "@/utils/helpers/dateHelper";
import styles from "../../app/home/chat/page.module.css";
import messageStyles from "../../app/home/chat/[chatId]/Message.module.css";
import { MessageTail } from "../MessageTail/MessageTail";
import { MessageStatusIcon } from "../MessageStatusIcon/MessageStatusIcon";

type MessageListProps = {
  selectedChatId: string | null | undefined;
};

type MessageListItem =
  | { type: "message"; message: Message }
  | { type: "dateSeparator"; date: string };

export default function MessageList({ selectedChatId }: MessageListProps) {
  const chat = useChatStore(
    (state) => state.chats.find((chat) => chat.id === selectedChatId) ?? null
  );

  if (!chat) {
    return <p>Nenhuma conversa</p>;
  }

  return (
    <div className={styles.messageInnerContainer}>
      {renderMessages([...chat.messages].reverse(), chat.type === "group")}
    </div>
  );
}

function renderMessages(messages: Message[], isGroup: boolean) {
  const messagesWithDates: MessageListItem[] = [];

  messages.forEach((message, index) => {
    const nextMessage = messages[index + 1];

    messagesWithDates.push({
      type: "message",
      message,
    });

    const currentDate = new Date(message.timestamp).toLocaleDateString("pt-BR");

    const nextDate = nextMessage
      ? new Date(nextMessage.timestamp).toLocaleDateString("pt-BR")
      : null;

    if (currentDate !== nextDate) {
      messagesWithDates.push({
        type: "dateSeparator",
        date: formatSeparatorMessageDate(message.timestamp),
      });
    }
  });

  return messagesWithDates.map((item, index) => {
    if (item.type === "dateSeparator") {
      return (
        <div
          key={`date-${item.date}-${index}`}
          className={messageStyles.dateSeparatorContainer}
        >
          <div className={messageStyles.dateSeparator}>
            <span>{item.date}</span>
          </div>
        </div>
      );
    }

    const message = item.message;

    const isLoggedSender = message.senderId === "me";
    const nextItem = messagesWithDates[index + 1];

    const nextMessage =
      nextItem?.type === "message" ? nextItem.message : undefined;

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
      return systemMessage(message.id, message.system.text);
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
          <div className={messageStyles.timestamp}>
            {time}
            {isLoggedSender && <MessageStatusIcon status={message.status} />}
          </div>
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

function systemMessage(id: string, message: string) {
  return (
    <div key={message} className={messageStyles.systemMessage}>
      <p className={messageStyles.systemMessageText}>{message}</p>
    </div>
  );
}
