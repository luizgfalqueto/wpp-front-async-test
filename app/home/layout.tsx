"use client";
import { useState } from "react";
import { SideBar } from "../../components/Sidebar/SideBar";
import { useUserStore } from "../../stores/useStore";
import styles from "./Home.module.css";
import ChatPage from "../chat/page";
import CallsPage from "../calls/page";
import StatusPage from "../status/page";
import ChannelsPage from "../channels/page";
import CommunitiesPage from "../communities/page";
import MidiaPage from "../midia/page";
import ProfilePage from "../profile/page";

export default function HomeLayout() {
  const [activePage, setActivePage] = useState("chat");
  const user = useUserStore((state) => state.user);

  const renderContent = () => {
    switch (activePage) {
      case "chat":
        return <ChatPage />;
      case "calls":
        return <CallsPage />;
      case "status":
        return <StatusPage />;
      case "channels":
        return <ChannelsPage />;
      case "communities":
        return <CommunitiesPage />;
      case "midia":
        return <MidiaPage />;
      case "profile":
        return <ProfilePage />;
      default:
        return <ChatPage />;
    }
  };

  return (
    <div className={styles.container}>
      <SideBar onSelect={setActivePage} activePage={activePage} avatarUrl={user?.avatarUrl} />
      <main className={styles.main}>{renderContent()}</main>
    </div>
  );
}
