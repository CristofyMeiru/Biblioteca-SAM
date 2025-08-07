import { author_props_insert } from "@/shared/types/drizzle.types";

type create_author = {
    first_name: string;
    last_name: string;
    nacionality: string;
}
export const create = (data: create_author): author_props_insert => {
    
    return {
        id: crypto.randomUUID(),
        first_name: data.first_name,
        last_name: data.last_name,
        nacionality: data.nacionality
    }
    
}