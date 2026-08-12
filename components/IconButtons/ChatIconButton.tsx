import styles from "./Icons.module.css";

interface ProfileIconProps {
  onClick?: () => void;
  selected: boolean;
}

export function ChatIconButton({ onClick, selected }: ProfileIconProps) {
  if (!selected) {
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
            d="M3 9 .94 5.53A1 1 0 0 1 1.79 4h17.54C20.81 4 22 5.2 22 6.67v10.66c0 1.48-1.2 2.67-2.67 2.67H5.67A2.67 2.67 0 0 1 3 17.33V9Zm2-.55L3.53 6h15.8c.37 0 .67.3.67.67v10.66c0 .37-.3.67-.67.67H5.67a.67.67 0 0 1-.67-.67V8.45Z"
            clipRule="evenodd"
          />

          <path
            fill="currentColor"
            d="M7 10a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z"
          />

          <path
            fill="currentColor"
            d="M7 14a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z"
          />
        </svg>
      </div>
    );
  }
  return (
    <div className={styles.containerSelected} onClick={onClick}>
      <svg
        className={styles.iconSelected}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M22 6.67C22 5.19 20.8 4 19.33 4H1.8a1 1 0 0 0-.85 1.53L3 9v8.33C3 18.81 4.2 20 5.67 20h13.66c1.48 0 2.67-1.2 2.67-2.67V6.67ZM7 10a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H8Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}
