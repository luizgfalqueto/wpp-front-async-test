import styles from "./UnreadChat.module.css";

interface UnreadProps {
  count: number;
}

export function UnreadChat({ count }: UnreadProps) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{count}</p>
    </div>
  );
}
