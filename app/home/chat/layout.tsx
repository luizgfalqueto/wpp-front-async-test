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
import { ChatHeader } from "@/components/ChatHeader/ChatHeader";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchContent, setSearchContent] = useState<string>("");
  const [filterApplyed, setFilterApplyed] = useState<FilterType>("All");

  function selectFilter(filter: FilterType) {
    if (filter === "All") {
      setSearchContent("");
    }
    setFilterApplyed(filter);
  }

  const chats = getChatsByFilter(searchContent, filterApplyed);

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
        <SearchBar
          onSearch={setSearchContent}
          value={searchContent}
          onClear={() => setSearchContent("")}
        />
        <Filters onClick={selectFilter} filterSelected={filterApplyed} />
        <div className={styles.chatListContainer}>
          <ChatList
            chats={chats}
            searchText={searchContent}
            onClearFilters={filterApplyed !== "All" ? selectFilter : null}
          />
        </div>
      </aside>

      <div className={styles.main}>
        <ChatHeader />
        {children}
      </div>
    </div>
  );
}
