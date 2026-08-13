"use client";
import { SideBar } from "../../components/Sidebar/SideBar";
import styles from "./layout.module.css";
import { useRouter, usePathname } from "next/navigation";

import dados from "../../database/db.json";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathName = usePathname();

  const activePage = pathName.split("/")[2] || "chat";

  const handleSelect = (page: string) => {
    router.push(`/home/${page}`);
  };

  const avatarUrl = dados["currentUser"]["avatarUrl"];

  return (
    <div className={styles.layoutWrapper}>
      <SideBar
        onSelect={handleSelect}
        activePage={activePage}
        avatarUrl={avatarUrl}
      />

      <main className={styles.content}>{children}</main>
    </div>
  );
}
