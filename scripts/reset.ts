
import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../database/schema";

const sql = neon(process.env.DATABASE_URL!);

const database = drizzle(sql, {schema});

const main = async () => {
    try {
        console.log("Borrando base de datos");

        await database.delete(schema.courses);
        await database.delete(schema.courses);
        await database.delete(schema.userProgress);
        await database.delete(schema.userActions);
        await database.delete(schema.units);
        await database.delete(schema.lessons);
        await database.delete(schema.challenges);
        await database.delete(schema.challengeOptions);
        await database.delete(schema.challengeProgress);

        console.log("Borrado completado");
    } catch (error) {
        console.error(error);
        throw new Error("Fallo en el borrado");
        
    }
};

main();