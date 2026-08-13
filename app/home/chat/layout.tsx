import { WhatsAppTextLogo } from "@/components/WhatsApp/WhatsAppText";
import styles from "./layout.module.css";
import { NewChatIconButton } from "@/components/IconButtons/NewChatIconButton";
import { MoreOptionsIconButton } from "@/components/IconButtons/MoreOptionsIconButton";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { Filters } from "@/components/Filters/Filters";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <Filters />
      </aside>

      <main className={styles.content}>{children}</main>
    </div>
  );
}
