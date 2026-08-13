import styles from "./layout.module.css";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layoutWrapper}>
      <aside className={styles.sidebar}>
        <h2>Chats</h2>

        <div>Chat 1</div>
        <div>Chat 2</div>
        <div>Chat 3</div>
      </aside>

      <main className={styles.content}>{children}</main>
    </div>
  );
}
