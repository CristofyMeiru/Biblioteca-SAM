import { Result } from "neverthrow";
import { book_repo } from "./types/books.repository.types";
import { authors_repo } from "../authors/types/authors.repository.types";

export type create = (authors_repo: authors_repo,book_repo: book_repo, )=> Promise<Result<any, any>>