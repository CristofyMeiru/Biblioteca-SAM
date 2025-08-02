import { schedule_props_insert } from "@/shared/types/drizzle.types";

export const create = (data: { assistent_id: string; day_of_week_id: string }): schedule_props_insert => {
  return {
    id: crypto.randomUUID(),
    assistent_id: data.assistent_id,
    day_of_week_id: data.day_of_week_id,
  };
};
