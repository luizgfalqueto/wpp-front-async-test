"use client";

import { useUserStore } from "../../stores/useStore";

export default function Home() {
  const user = useUserStore((state) => state.user);
  return <h1>{user?.name}</h1>;
}
