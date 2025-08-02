import Link from "next/link";

export default function page() {
  return (
    <div>
      pagina de livros
      <Link href={"/Livros/Adicionar_livro"}>Adicionar livro</Link>
    </div>
  );
}
