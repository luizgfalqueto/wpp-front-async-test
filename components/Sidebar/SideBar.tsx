import styles from "./SideBar.module.css";
import { IconButton } from "../IconButton/IconButton";
import { Divider } from "../Divider/Divider";
import { ProfileIcon } from "../ProfileIcon/ProfileIcon";

export function SideBar() {
  return (
    <div className={styles.container}>
      <div className={styles.divContainer}>
        <IconButton
          src="/icons/chat.png"
          srcSelected="/icons/chat_selected.png"
          alt="Ícone de Chat"
          selected={true}
        />
        <IconButton
          src="/icons/phone.png"
          srcSelected="/icons/phone_selected.png"
          alt="Ícone de Calls"
          selected={false}
        />
        <IconButton
          src="/icons/status.png"
          srcSelected="/icons/status_selected.png"
          alt="Ícone de Status"
          selected={false}
        />
        <IconButton
          src="/icons/channels.png"
          srcSelected="/icons/channels_selected.png"
          alt="Ícone de Channels"
          selected={false}
        />
        <IconButton
          src="/icons/community.png"
          srcSelected="/icons/community_selected.png"
          alt="Ícone de Community"
          selected={false}
        />
        <Divider />
        <IconButton
          src="/icons/meta-ai-logo.png"
          srcSelected=""
          alt="Ícone da Meta AI"
          selected={false}
        />
      </div>
      <div className={styles.divContainer}>
        <IconButton
          src="/icons/midia.png"
          srcSelected="/icons/midia_selected.png"
          alt="Ícone de Midia"
          selected={false}
        />
        <ProfileIcon />
      </div>
    </div>
  );
}
