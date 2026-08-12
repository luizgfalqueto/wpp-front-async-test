import { SideBar } from "../../components/Sidebar/SideBar";
import styles from "./Home.module.css";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <SideBar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
