import styles from "./SearchBar.module.css";
import { tSystemMessage } from "@/utils/internacionalization/tMessages";

type SearchBarProps = {
  onSearch: (text: string) => void;
  value: string;
  onClear: () => void;
};

export function SearchBar({ onSearch, value, onClear }: SearchBarProps) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder={tSystemMessage(
          "search_bar_placeholder",
          "Pesquisar ou começar uma nova conversa"
        )}
        className={styles.input}
        value={value}
        onChange={(event) => onSearch(event.target.value)}
      />

      <span style={{ cursor: "pointer" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={20}
          height={20}
          fill="none"
          className={styles.suffixIcon}
        >
          <path
            fill="currentColor"
            d="M9.5 16a6.27 6.27 0 0 1-4.61-1.89A6.27 6.27 0 0 1 3 9.5c0-1.82.63-3.35 1.89-4.61A6.27 6.27 0 0 1 9.5 3c1.82 0 3.35.63 4.61 1.89A6.27 6.27 0 0 1 16 9.5a6.1 6.1 0 0 1-1.3 3.8l5.6 5.6c.18.18.27.42.27.7 0 .28-.09.52-.27.7a.95.95 0 0 1-.7.27.95.95 0 0 1-.7-.27l-5.6-5.6A5.96 5.96 0 0 1 9.5 16Zm0-2c1.25 0 2.31-.44 3.19-1.31A4.34 4.34 0 0 0 14 9.5c0-1.25-.44-2.31-1.31-3.19A4.34 4.34 0 0 0 9.5 5c-1.25 0-2.31.44-3.19 1.31A4.34 4.34 0 0 0 5 9.5c0 1.25.44 2.31 1.31 3.19A4.34 4.34 0 0 0 9.5 14Z"
          />
        </svg>
      </span>
      {value !== "" && (
        <span onClick={onClear} className={styles.clearButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            fill="none"
          >
            <path
              fill="currentColor"
              d="m12 13.4-4.9 4.9a.95.95 0 0 1-.7.27.95.95 0 0 1-.7-.27.95.95 0 0 1-.28-.7c0-.28.1-.52.28-.7l4.9-4.9-4.9-4.9a.95.95 0 0 1-.28-.7.95.95 0 0 1 .97-.98c.3 0 .53.1.71.28l4.9 4.9 4.9-4.9a.95.95 0 0 1 .7-.27c.28 0 .52.09.7.27.18.18.27.42.27.7 0 .28-.09.52-.27.7L13.4 12l4.9 4.9c.18.18.27.42.27.7 0 .28-.09.52-.27.7a.95.95 0 0 1-.7.27.95.95 0 0 1-.7-.27L12 13.4Z"
            />
          </svg>
        </span>
      )}
    </div>
  );
}
