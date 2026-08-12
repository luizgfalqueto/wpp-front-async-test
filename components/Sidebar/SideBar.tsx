import styles from "./SideBar.module.css";
import { IconButton } from "../IconButton/IconButton";
import { Divider } from "../Divider/Divider";
import { ProfileIcon } from "../ProfileIcon/ProfileIcon";

interface SideBarProps {
  onSelect: (page: string) => void;
  activePage: string;
}

export function SideBar({ onSelect, activePage }: SideBarProps) {
  return (
    <div className={styles.container}>
      <div className={styles.divContainer}>
        <IconButton
          src="/icons/chat.png"
          srcSelected="/icons/chat_selected.png"
          alt="Ícone de Chat"
          selected={activePage === "chat"}
          onClick={() => onSelect("chat")}
        />
        <IconButton
          src="/icons/phone.png"
          srcSelected="/icons/phone_selected.png"
          alt="Ícone de Calls"
          selected={activePage === "calls"}
          onClick={() => onSelect("calls")}
        />
        <IconButton
          src="/icons/status.png"
          srcSelected="/icons/status_selected.png"
          alt="Ícone de Status"
          selected={activePage === "status"}
          onClick={() => onSelect("status")}
        />
        <IconButton
          src="/icons/channels.png"
          srcSelected="/icons/channels_selected.png"
          alt="Ícone de Channels"
          selected={activePage === "channels"}
          onClick={() => onSelect("channels")}
        />
        <IconButton
          src="/icons/community.png"
          srcSelected="/icons/community_selected.png"
          alt="Ícone de Community"
          selected={activePage === "communities"}
          onClick={() => onSelect("communities")}
        />
        <Divider />
        <IconButton
          src="/icons/meta-ai-logo.png"
          srcSelected="/icons/meta-ai-logo.png"
          alt="Ícone da Meta AI"
          selected={activePage === "metaAi"}
          onClick={() => onSelect("metaAi")}
        />
      </div>
      <div className={styles.divContainer}>
        <IconButton
          src="/icons/midia.png"
          srcSelected="/icons/midia_selected.png"
          alt="Ícone de Midia"
          selected={activePage === "midia"}
          onClick={() => onSelect("midia")}
        />
        <ProfileIcon onClick={() => onSelect("profile")} />
      </div>
    </div>
  );
}
