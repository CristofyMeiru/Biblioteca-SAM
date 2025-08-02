import { drizzle, MySql2Database } from "drizzle-orm/mysql2";
import { get_env } from "../../shared/utils/get_env";
import * as schemas from "./tables/index";

const DATABASE_URL = get_env("DATABASE_URL");
export const db_client: MySql2Database<typeof schemas> = drizzle(DATABASE_URL);
