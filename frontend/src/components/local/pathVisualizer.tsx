"use client";
import { generateLinkByPath } from "@/utils/linkByPath.utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

export default function PathVisualizer() {
  const pathname = usePathname();

  const formattedPathname = pathname
    .split("/")
    .filter((item) => item !== "")
    .map((value, index, array) => {
      const pathToLink = generateLinkByPath(pathname, value);

      return (
        <>
          <Link href={pathToLink}>
            <Button className=" text-neutral-600 dark:text-neutral-300 " variant={"ghost"} key={index}>
              {value.split("_").join(" ")}
            </Button>
          </Link>

          {index < array.length - 1 && <ChevronRight size={14} />}
        </>
      );
    });

  /*<Button variant={"ghost"} >Início</Button>
    <Button className=" p-0  " variant={"ghost"}>{">"}</Button>
    <Button variant={"ghost"}>Configurações</Button> */

  return (
    <div className=" flex items-center text-neutral-300 font-semibold text-sm ">
      {formattedPathname.length == 0 ? <Button variant={"ghost"}>Início</Button> : formattedPathname}
    </div>
  );
}
