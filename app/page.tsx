"use client";

import data from "@/database/db.json";
import { mapToChat } from "@/utils/mappers/chatMapper";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useChatStore } from "@/stores/useChatStore";

import Image from "next/image";
import styles from "./Loading.module.css";
import { ProgressBar } from "../components/ProgressBar/ProgressBar";

import { tSystemMessage } from "@/utils/internacionalization/tMessages";

export default function Loading() {
  const [progress, setProgress] = useState(0);

  const router = useRouter();

  const setChats = useChatStore((state) => state.setChats);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }

          return prev + 10;
        });
      }, 100);
    }, 500);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const chats = data.chats.map(mapToChat);

      setChats(chats);

      router.push("/home");
    }
  }, [progress, router, setChats]);

  return (
    <main className={styles.container}>
      <Image
        src="/images/logo_black.png"
        alt={tSystemMessage(
          "whatsapp_logo_alt",
          "Logo do WhatsApp na cor preta"
        )}
        width={50}
        height={50}
      />

      <h1 className={styles.title}>WhatsApp</h1>

      <ProgressBar value={progress} />

      <div className={styles.textContainer}>
        <Image src="/icons/lock.png" alt="" width={10} height={10} />

        <p className={styles.text}>
          {tSystemMessage(
            "loading",
            "Protegida com a criptografia de ponta a ponta"
          )}
        </p>
      </div>
    </main>
  );
}
