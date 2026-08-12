"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import LogoImage from "../public/images/logo_black.png";
import LockIcon from "../public/icons/lock.png";
import styles from "./Loading.module.css";
import { ProgressBar } from "./components/ProgressBar";

export default function Home() {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 100);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className={styles.container}>
      <Image
        src={LogoImage}
        alt="Logo do WhatsApp na cor preta"
        width={50}
        height={50}
      />
      <h1 className={styles.title}>WhatsApp</h1>
      <ProgressBar value={progress} />
      <div className={styles.textContainer}>
        <Image src={LockIcon} alt="" width={10} />
        <p className={styles.text}>
          Protegida com a criptografia de ponta a ponta
        </p>
      </div>
    </main>
  );
}
