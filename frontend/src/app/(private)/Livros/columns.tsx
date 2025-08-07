"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Book = {
  id: number;
  title: string;
  author_id: string;
  publisher: string;
  material_type?: string; // Opcional, pois não tem .notNull()
  aquisition_method?: string; // Opcional
  pages_quantity?: number; // Opcional
  genre?: string; // Opcional
  isbn?: string; // Opcional
  quantity: number;
  loaned_quantity?: number; // Opcional, devido ao .default()
  cdd_or_cdu?: string; // Opcional
  tombo?: string; // Opcional
  edition?: string; // Opcional
  created_at: string; // "string" por causa de `mode: "string"`
};

export const columns: ColumnDef<Book>[] = [
  {
    accessorKey: "id",
    header: "ID", 
  },
  {
    accessorKey: "title",
    header: "Título",
  },
  {
    accessorKey: "author_id",
    header: "Autor", 
  },
  {
    accessorKey: "publisher",
    header: "Editora",
  },
  {
    accessorKey: "material_type",
    header: "Tipo de Material",
  },
  {
    accessorKey: "genre", 
    header: "Gênero",
  },
  {
    accessorKey: "quantity",
    header: "Quantidade Total",
  },
  {
    accessorKey: "loaned_quantity",
    header: "Qtd. Emprestada",
  },
  {
    accessorKey: "edition",
    header: "Edição",
  },
];
