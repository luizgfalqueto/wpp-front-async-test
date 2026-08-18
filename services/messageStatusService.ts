import { useChatStore } from "@/stores/useChatStore";

const delay = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });

  export async function simulateMessageStatus(
    chatId: string,
    messageId: string
  ) {
    const store = useChatStore.getState();
  
    await delay(1000);
  
    store.updateMessageStatus(
      chatId,
      messageId,
      "sent"
    );
  
    await delay(1000);
  
    store.updateMessageStatus(
      chatId,
      messageId,
      "delivered"
    );
  
    await delay(1000);
  
    store.updateMessageStatus(
      chatId,
      messageId,
      "read"
    );
  }