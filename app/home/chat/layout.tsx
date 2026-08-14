"use client";
import { useState } from "react";
import { WhatsAppTextLogo } from "@/components/WhatsApp/WhatsAppText";
import styles from "./layout.module.css";
import { NewChatIconButton } from "@/components/IconButtons/NewChatIconButton";
import { MoreOptionsIconButton } from "@/components/IconButtons/MoreOptionsIconButton";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { Filters } from "@/components/Filters/Filters";
import { FilterType } from "@/types/filter";
import { ChatList } from "@/components/ChatList/ChatList";
import { getChatsByFilter } from "@/utils/helpers/chatHelper";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [filterApplyed, setFilterApplyed] = useState<FilterType>("All");

  function selectFilter(filter: FilterType) {
    setFilterApplyed(filter);
  }

  const chats = getChatsByFilter(filterApplyed);

  return (
    <div className={styles.layoutWrapper}>
      <aside className={styles.sidebar}>
        <header className={styles.header}>
          <WhatsAppTextLogo />
          <div className={styles.iconsHeader}>
            <NewChatIconButton />
            <MoreOptionsIconButton />
          </div>
        </header>
        <SearchBar />
        <Filters onClick={selectFilter} filterSelected={filterApplyed} />
        <div className={styles.chatListContainer}>
          <ChatList chats={chats} />
        </div>
      </aside>

      <main className={styles.content}>{children}</main>
    </div>
  );
}
