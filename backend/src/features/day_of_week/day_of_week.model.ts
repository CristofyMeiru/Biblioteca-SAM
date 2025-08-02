import { day_of_week_props_insert } from "@/shared/types/drizzle.types";

export const create = (data: { name: day_of_week_props_insert["name"] }): day_of_week_props_insert => {
  return {
    id: crypto.randomUUID(),
    name: data.name,
  };
};
