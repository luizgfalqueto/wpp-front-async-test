import styles from "./Icons.module.css";
import { tSystemMessage } from "@/utils/internacionalization/tMessages";

export function AttachIconButton() {
  return (
    <div className={styles.container}>
      <svg
        viewBox="0 0 24 24"
        height="24"
        width="24"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
      >
        <title>plus-rounded</title>
        <path
          fill="currentColor"
          d="M11 13H5.5a1 1 0 1 1 0-2H11V5.5a1 1 0 1 1 2 0V11h5.5a1 1 0 1 1 0 2H13v5.5a1 1 0 1 1-2 0V13Z"
        ></path>
      </svg>
      <span className={styles.tooltipTop}>
        {tSystemMessage("tooltip_attach", "Anexar")}
      </span>
    </div>
  );
}
