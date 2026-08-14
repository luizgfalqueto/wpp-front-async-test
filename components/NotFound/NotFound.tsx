import styles from "./NotFound.module.css";

interface NotFoundProps {
  text: string;
  textButton: string;
  onPress: (() => void) | null;
}

export function NotFound({ text, textButton, onPress }: NotFoundProps) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{text}</p>
      {onPress != null && (
        <button onClick={() => onPress()} className={styles.button}>
          {textButton}
        </button>
      )}
    </div>
  );
}
