'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFoundPage(){

    const router = useRouter()

    return <div>
        <h1>Pagina não encontrada, retorne para a anterior.</h1>
        <Button onClick={()=> router.push("/")} ></Button>
    </div>
    
}