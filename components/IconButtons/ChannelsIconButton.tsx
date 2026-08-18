import styles from "./Icons.module.css";
import { tSystemMessage } from "@/utils/internacionalization/tMessages";

interface ProfileIconProps {
  onClick?: () => void;
  selected: boolean;
}

export function ChannelsIconButton({ onClick, selected }: ProfileIconProps) {
  if (selected) {
    return (
      <div className={styles.containerSelected} onClick={onClick}>
        <svg
          className={styles.iconSelected}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
        >
          <path
            fill="currentColor"
            d="M21.92 10.65a9.99 9.99 0 0 0-8.93-8.6 10 10 0 0 0-9.75 14.67l-1.2 3.95A1 1 0 0 0 3.3 21.9l3.88-1.16a10.01 10.01 0 0 0 14.74-10.1h.01ZM8.06 14.68c.27.4.24.95-.1 1.29a1 1 0 0 1-1.56-.17 6.8 6.8 0 0 1 .09-7.74c.35-.5 1.08-.52 1.51-.1a1 1 0 0 1 .1 1.3 4.75 4.75 0 0 0-.02 5.41l-.02.01Zm4-1.18a1.5 1.5 0 0 1-1.5-1.5 1.5 1.5 0 1 1 3.01 0c0 .83-.67 1.5-1.5 1.5Zm5.47 2.45a.99.99 0 0 1-1.5.09 1 1 0 0 1-.1-1.3 4.79 4.79 0 0 0-.03-5.5c-.29-.41-.27-.96.08-1.32a1 1 0 0 1 1.5.09 6.74 6.74 0 0 1 .05 7.95v-.01Z"
          />
        </svg>
        <span className={styles.tooltip}>
          {tSystemMessage("tooltip_channels", "Canais")}
        </span>
      </div>
    );
  }
  return (
    <div className={styles.container} onClick={onClick}>
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15.83 8.63A1 1 0 0 1 17.2 9a5.98 5.98 0 0 1 0 6 1 1 0 0 1-1.73-1 3.98 3.98 0 0 0 0-4 1 1 0 0 1 .36-1.37Zm-7.66 0A1 1 0 0 1 8.53 10a3.98 3.98 0 0 0 0 4 1 1 0 0 1-1.73 1 5.98 5.98 0 0 1 0-6 1 1 0 0 1 1.37-.37Z"
          clipRule="evenodd"
        />

        <path
          fill="currentColor"
          d="M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        />

        <path
          fill="currentColor"
          fillRule="evenodd"
          d="m5.33 16.48-.23.8c-.24.77-.48 1.6-.68 2.3.7-.2 1.53-.44 2.3-.68l.8-.23.72.39a8 8 0 1 0-3.3-3.3l.4.72Zm-2.15.22A48.91 48.91 0 0 0 2 21a1 1 0 0 0 1 1c.31 0 2.46-.63 4.3-1.18a10 10 0 1 0-4.12-4.12Z"
          clipRule="evenodd"
        />
      </svg>
      <span className={styles.tooltip}>
        {tSystemMessage("tooltip_channels", "Canais")}
      </span>
    </div>
  );
}
