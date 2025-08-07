'use client'

import { useParams } from "next/navigation";

export default function BookDetailsPage() {

  const params = useParams()
  
  return (
    <div>
      <h1>Detalhes do Livro: {params.book_title.replace(/_/g, "  ")}</h1>
    </div>
  );
}
