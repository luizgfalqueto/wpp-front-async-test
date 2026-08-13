"use client";
import { SideBar } from "../../components/Sidebar/SideBar";
import { useUserStore } from "../../stores/useStore";
import styles from "./layout.module.css";
import { useRouter, usePathname } from "next/navigation";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathName = usePathname();

  const user = useUserStore((state) => state.user);

  const activePage = pathName.split("/")[2] || "chat";

  const handleSelect = (page: string) => {
    router.push(`/home/${page}`);
  };

  return (
    <div className={styles.layoutWrapper}>
      <SideBar
        onSelect={handleSelect}
        activePage={activePage}
        avatarUrl={user?.avatarUrl}
      />

      <main className={styles.content}>{children}</main>
    </div>
  );
}
