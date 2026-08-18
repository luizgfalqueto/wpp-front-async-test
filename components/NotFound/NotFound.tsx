import { NotFounUnread } from "../NotFoundUnread/NotFoundUnread";
import styles from "./NotFound.module.css";

interface NotFoundProps {
  text: string;
  textButton: string;
  showImage: boolean;
  onPress: (() => void) | null;
}

export function NotFound({
  text,
  textButton,
  showImage = false,
  onPress,
}: NotFoundProps) {
  return (
    <div className={styles.container}>
      {showImage && <NotFounUnread />}
      <p className={styles.text}>{text}</p>
      {onPress != null && (
        <button onClick={() => onPress()} className={styles.button}>
          {textButton}
        </button>
      )}
    </div>
  );
}
