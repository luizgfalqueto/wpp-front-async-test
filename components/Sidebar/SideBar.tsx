import styles from "./SideBar.module.css";
import { Divider } from "../Divider/Divider";
import { ProfileIcon } from "../ProfileIcon/ProfileIcon";
import { StatusIconButton } from "../IconButtons/StatusIconButton";
import { ChatIconButton } from "../IconButtons/ChatIconButton";
import { PhoneIconButton } from "../IconButtons/PhoneIconButton";
import { ChannelsIconButton } from "../IconButtons/ChannelsIconButton";
import { CommunityIconButton } from "../IconButtons/CommunityIconButton";
import { MetaIconButton } from "../IconButtons/MetaIconButton";
import { MidiaIconButton } from "../IconButtons/MidiaIconButton";

interface SideBarProps {
  onSelect: (page: string) => void;
  activePage: string;
  avatarUrl?: string;
}

export function SideBar({ onSelect, activePage, avatarUrl }: SideBarProps) {
  return (
    <div className={styles.container}>
      <div className={styles.divContainer}>
        <ChatIconButton
          selected={activePage === "chat"}
          onClick={() => onSelect("chat")}
        />
        <PhoneIconButton
          selected={activePage === "calls"}
          onClick={() => onSelect("calls")}
        />
        <StatusIconButton
          selected={activePage === "status"}
          onClick={() => onSelect("status")}
        />
        <ChannelsIconButton
          selected={activePage === "channels"}
          onClick={() => onSelect("channels")}
        />
        <CommunityIconButton
          selected={activePage === "communities"}
          onClick={() => onSelect("communities")}
        />
        <Divider />
        <MetaIconButton />
      </div>
      <div className={styles.divContainer}>
        <MidiaIconButton
          selected={activePage === "midia"}
          onClick={() => onSelect("midia")}
        />
        <ProfileIcon
          onClick={() => onSelect("profile")}
          avatarUrl={avatarUrl}
        />
      </div>
    </div>
  );
}
