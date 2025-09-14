import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://neondb_owner:npg_97PTMteoDzyp@ep-fragrant-term-a1w78vbk.ap-southeast-1.aws.neon.tech/test%20database?sslmode=require&channel_binding=require"
);
export const db = drizzle(sql, { schema });
