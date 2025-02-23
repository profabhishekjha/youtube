"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Image src="/logo.svg" height={50} width={50} alt="logo"/>
      <p className="text-xl font-semibold tracking-tight">YouTube</p>
      <Button onClick={() => router.push("/feed")}>
        Click Me
      </Button>
    </div>
  );
}
