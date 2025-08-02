'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

  return (
    <div>
      <Button onClick={() => router.back()} variant={"ghost"}>
        {"<"}
      </Button>
    </div>
  );
}
