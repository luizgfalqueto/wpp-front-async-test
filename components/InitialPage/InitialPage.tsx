import styles from "./InitialPage.module.css";
import { tSystemMessage } from "@/utils/internacionalization/tMessages";

export function InitialPage() {
  return (
    <div className={styles.content}>
      <p className={styles.title}>
        {tSystemMessage("initial_page_title", "Baixe o WhatsApp")}
      </p>
      <span className={styles.text}>
        {tSystemMessage(
          "initial_page_subtitle",
          "Baixe o novo app para Mac para fazer ligações e ter uma experiência de uso mais rápida."
        )}
      </span>
      <button className={styles.button}>
        {tSystemMessage("initial_page_button", "Baixar")}
      </button>
    </div>
  );
}
