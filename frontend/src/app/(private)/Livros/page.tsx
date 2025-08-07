import Link from "next/link";
import { Book, columns } from "./columns";
import { DataTable } from "./data-table";

const dataMock: Book[] = Array(50)
  .fill(0)
  .map((item, index) => {
    return {
      id: index + 1,
      title: "A Revolução dos Bichos",
      author_id: "auth_george_orwell", // ID do autor, conforme referência
      publisher: "Companhia das Letras",
      material_type: "Livro Físico",
      aquisition_method: "Compra",
      pages_quantity: 152,
      genre: "Fábula Política",
      isbn: "978-8535906660",
      quantity: 5,
      loaned_quantity: 2,
      cdd_or_cdu: "821.111-31", // Classificação Decimal Dewey ou Universal
      tombo: "20230001", // Número de tombo/inventário
      edition: "1ª Edição",
      created_at: "2025-07-25T10:00:00Z", // Formato ISO 8601 para timestamp como string
    };
  });

export default function page() {
  return (
    <div>
      pagina de livros
      <Link href={"/Livros/Livro/Livro_dos_bichos"} >Pagina do livro dos bicho</Link>
      <Link href={"/Livros/Adicionar_livro"}>Adicionar livro</Link>
      <DataTable data={dataMock} columns={columns} />
    </div>
  );
}
