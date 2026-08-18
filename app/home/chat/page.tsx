import { InitialPage } from "@/components/InitialPage/InitialPage";
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
    return (
      <div className={styles.container}>
        <InitialPage />
      </div>
    );
  }

  return <div></div>;
}
