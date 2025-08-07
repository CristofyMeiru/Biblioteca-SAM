"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";

interface DataTableProps<Book> {
  columns: ColumnDef<Book>[];
  data: Book[];
}

export function DataTable<Book>({ columns, data }: DataTableProps<Book>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <Table className=" outline outline-neutral-800 ">
        <TableHeader className=" h-2 ">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className=" outline outline-neutral-500 h-2 ">
              {headerGroup.headers.map((header) => (
                <>
                  <TableHead key={header.id} className=" outline outline-neutral-600 dark:outline-neutral-500 h-2 ">
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                </>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow className="" key={row.id} data-state={row.getIsSelected() && "selected"}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell className=" outline outline-neutral-800 " height={5} key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
