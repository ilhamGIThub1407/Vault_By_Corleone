import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig ({
  dialect: "postgresql",
  schema: "./utils/schema.jsx",
  out: "./drizzle",
  
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },    
});
