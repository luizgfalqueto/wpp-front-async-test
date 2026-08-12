"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import styles from "./Loading.module.css";
import { ProgressBar } from "..//components/ProgressBar/ProgressBar";

export default function Loading() {
  const [progress, setProgress] = useState<number>(0);
  const router = useRouter();

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
    }, 2000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      router.push("/home");
    }
  }, [progress, router]);

  return (
    <main className={styles.container}>
      <Image
        src="/images/logo_black.png"
        alt="Logo do WhatsApp na cor preta"
        width={50}
        height={50}
      />
      <h1 className={styles.title}>WhatsApp</h1>
      <ProgressBar value={progress} />
      <div className={styles.textContainer}>
        <Image src="/icons/lock.png" alt="" width={10} height={10} />
        <p className={styles.text}>
          Protegida com a criptografia de ponta a ponta
        </p>
      </div>
    </main>
  );
}
