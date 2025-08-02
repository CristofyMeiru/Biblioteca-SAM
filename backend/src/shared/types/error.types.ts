type origin_enum = "[REPOSITORY]" | "[SERVICE]" | "[MODEL]" | "[UTILS]";
type type_enum = "ValidationError" | "RepositoryError" | "UnexpectedError";

export type app_error = {
  message: string;
  type?: type_enum;
  origin: origin_enum;
  err?: unknown;
};
