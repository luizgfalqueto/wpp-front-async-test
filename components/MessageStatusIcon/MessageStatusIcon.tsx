import { MessageStatus } from "@/types/message";

interface MessageStatusProps {
  status?: MessageStatus;
}

export function MessageStatusIcon({ status }: MessageStatusProps) {
  if (status === null || status === undefined) return <div></div>;
  const content = getContentIcon(status);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width="15"
      height="15"
      fill="none"
      style={{ marginLeft: "6px" }}
    >
      {content}
    </svg>
  );
}

function getContentIcon(status: MessageStatus) {
  switch (status) {
    case "delivered":
      return (
        <path
          fill="currentColor"
          d="M14.73 6.01a1 1 0 0 1 1.41-.15l.01.01a1 1 0 0 1 .15 1.41L7.6 18.01a1 1 0 0 1-.73.37h-.05c-.26 0-.52-.11-.71-.3l-4.03-4.09a.99.99 0 0 1 0-1.41.99.99 0 0 1 1.41 0l3.25 3.29 7.99-9.86Zm5.71.12a1 1 0 0 1 1.41-.15h-.01a1 1 0 0 1 .15 1.41l-8.41 10.45a1 1 0 0 1-.73.37h-.05a1 1 0 0 1-.71-.3l-1.36-1.26a.55.55 0 0 1-.02-.81l.56-.68c.21-.2.53-.21.75-.03l.71.58 7.71-9.58Z"
        />
      );
    case "failed":
      return (
        <path
          fill="currentColor"
          d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 15a1.25 1.25 0 1 1 1.25-1.25A1.25 1.25 0 0 1 12 17Zm1-4h-2V7h2Z"
        />
      );
    case "read":
      return (
        <path
          fill="#25d366"
          d="M14.73 6.01a1 1 0 0 1 1.41-.15l.01.01a1 1 0 0 1 .15 1.41L7.6 18.01a1 1 0 0 1-.73.37h-.05c-.26 0-.52-.11-.71-.3l-4.03-4.09a.99.99 0 0 1 0-1.41.99.99 0 0 1 1.41 0l3.25 3.29 7.99-9.86Zm5.71.12a1 1 0 0 1 1.41-.15h-.01a1 1 0 0 1 .15 1.41l-8.41 10.45a1 1 0 0 1-.73.37h-.05a1 1 0 0 1-.71-.3l-1.36-1.26a.55.55 0 0 1-.02-.81l.56-.68c.21-.2.53-.21.75-.03l.71.58 7.71-9.58Z"
        />
      );
    case "sending":
      return (
        <path
          fill="currentColor"
          d="M10 1.5a8.5 8.5 0 1 0 8.5 8.5A8.51 8.51 0 0 0 10 1.5Zm0 15a6.5 6.5 0 1 1 6.5-6.5 6.5 6.5 0 0 1-6.5 6.5Zm.75-6.81V5.5a.75.75 0 0 0-1.5 0V10a.75.75 0 0 0 .33.62l2.75 1.83a.75.75 0 1 0 .84-1.24l-2.42-1.52Z"
        />
      );
    case "sent":
      return (
        <path
          fill="currentColor"
          d="M16.14 5.86a1 1 0 0 0-1.41.15l-7.99 9.86-3.25-3.29a.99.99 0 0 0-1.41 0 .99.99 0 0 0 0 1.41l4.03 4.09c.19.19.45.3.71.3h.05a1 1 0 0 0 .73-.37l8.7-10.73a1 1 0 0 0-.15-1.41l-.01-.01Z"
        />
      );
  }
}
