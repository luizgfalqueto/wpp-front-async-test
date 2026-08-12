import styles from "./ProgressBar.module.css";

interface ProgressBarProps {
  value: number;
}


export function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className={styles.container}>
      <div
        className={styles.progress}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}