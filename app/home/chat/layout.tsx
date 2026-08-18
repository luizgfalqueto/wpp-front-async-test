"use client";

import { useState } from "react";

import { WhatsAppTextLogo } from "@/components/WhatsApp/WhatsAppText";
import { NewChatIconButton } from "@/components/IconButtons/NewChatIconButton";
import { MoreOptionsIconButton } from "@/components/IconButtons/MoreOptionsIconButton";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { Filters } from "@/components/Filters/Filters";
import { ChatList } from "@/components/ChatList/ChatList";
import { ChatHeader } from "@/components/ChatHeader/ChatHeader";

import { FilterType } from "@/types/filter";
import { useChatStore } from "@/stores/useChatStore";

import styles from "./layout.module.css";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchContent, setSearchContent] = useState("");
  const [filterApplyed, setFilterApplyed] = useState<FilterType>("All");

  const chats = useChatStore((state) => state.chats);

  const selectedChat = useChatStore((state) => state.selectedChat);

  function selectFilter(filter: FilterType) {
    if (filter === "All") {
      setSearchContent("");
    }

    setFilterApplyed(filter);
  }

  const normalizedSearchText = searchContent.trim().toLowerCase();

  const chatsFiltered = chats
    .filter((chat) => {
      switch (filterApplyed) {
        case "Group":
          return chat.type === "group";

        case "Unread":
          return chat.unreadCount > 0;

        case "All":
        default:
          return true;
      }
    })
    .filter((chat) => {
      if (!normalizedSearchText) {
        return true;
      }

      const chatName = chat.name.toLowerCase();

      const lastMessage = chat.messages.find(
        (message) => message.id === chat.lastMessageId
      );

      const messageText =
        lastMessage?.type === "text" ? lastMessage.text.toLowerCase() : "";

      return (
        chatName.includes(normalizedSearchText) ||
        messageText.includes(normalizedSearchText)
      );
    })
    .sort((a, b) => {
      // Fixa primeiro
      if (a.pinned !== b.pinned) {
        return Number(b.pinned) - Number(a.pinned);
      }

      // Depois não lidas
      const aUnread = a.unreadCount > 0;

      const bUnread = b.unreadCount > 0;

      return Number(bUnread) - Number(aUnread);
    });

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
            chats={chatsFiltered}
            searchText={searchContent}
            onClearFilters={filterApplyed !== "All" ? selectFilter : null}
          />
        </div>
      </aside>

      <div className={styles.main}>
        {selectedChat !== null && <ChatHeader chat={selectedChat} />}

        {children}
      </div>
    </div>
  );
}
