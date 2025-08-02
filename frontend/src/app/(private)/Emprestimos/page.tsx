import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>pagina de emprestimos
      <Link href={"/Emprestimos/Fazer_emprestimo"} >Fazer emprestimo</Link>
    </div>
  )
}
