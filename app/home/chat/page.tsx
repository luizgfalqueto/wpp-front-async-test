import styles from "./page.module.css";
import { getChatById } from "@/utils/helpers/chatHelper";

type PageProps = {
  params: Promise<{
    chatId: string;
  }>;
};

export default async function ChatPage({ params }: PageProps) {
  const { chatId } = await params;

  const chat = getChatById(chatId);

  if (!chat) {
    return <div className={styles.container}>Chat encontrado.</div>;
  }

  return (
    <div className={styles.container}>
      <h1>Chat: {chat.name}</h1>

      <p>Conteúdo da conversa aqui...</p>
    </div>
  );
}
