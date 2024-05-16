import "dotenv/config";

import type { Config } from "drizzle-kit";

export default {
    schema: "./database/schema.ts",
    out: "./drizzle",
    dialect: "postgresql",
    // drive: "pg",
    dbCredentials: {
        // connectionString: process.env.DATABASE_URL!,
        url: process.env.DATABASE_URL!,
    },
} satisfies Config;

// import { defineConfig } from 'drizzle-kit'
// export default defineConfig({
//  schema: "./schema.ts",
//   dialect: 'postgresql',
//   dbCredentials: {
//     url: process.env.DB_URL,
//   },
//   verbose: true,
//   strict: true,
// })