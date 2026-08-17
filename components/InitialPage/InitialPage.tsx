import styles from "./InitialPage.module.css";
export function InitialPage() {
  return (
    <div className={styles.content}>
      <p className={styles.title}>Baixe o WhatsApp</p>
      <span className={styles.text}>
        Baixe o novo app para Mac para fazer ligações e ter uma experiência de
        uso mais rápida.
      </span>
      <button className={styles.button}>Baixar</button>
    </div>
  );
}
