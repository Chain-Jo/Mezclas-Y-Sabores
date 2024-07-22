
import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../database/schema";

const sql = neon(process.env.DATABASE_URL!);

const database = drizzle(sql, {schema});

let correlativoChallengeO = 0;

const aumentoCorrelativoChallengeO = () => {
    correlativoChallengeO = correlativoChallengeO + 1;
    return correlativoChallengeO;
}

const main = async () => {
    try {
        console.log("Rellenando base de datos...");

        await database.delete(schema.courses);
        await database.delete(schema.userProgress);
        await database.delete(schema.units);
        await database.delete(schema.lessons);
        await database.delete(schema.challenges);
        await database.delete(schema.challengeOptions);
        await database.delete(schema.challengeProgress);




/**
 * ==================================================================================================================
 * Respuestas
 * ==================================================================================================================
 */
// Challenges lesson 1

        await database.insert(schema.challengeOptions).values([



        /**
        * ----------------------------------------------------------------------------------------------------------
        * 2. País - Actividad 4
        * ----------------------------------------------------------------------------------------------------------
        */
           // Pregunta 1 - Actividad 4
            {
                id: aumentoCorrelativoChallengeO(),
                challengeId: 2020, // OwO
                correcto: false,
                text: "UwU",
                activo: true
            },
            {
                id: aumentoCorrelativoChallengeO(),
                challengeId: 2020, // OwO
                correcto: false,
                text: "UwU",
                activo: true
            },
            {
                id: aumentoCorrelativoChallengeO(),
                challengeId: 2020, // OwO
                correcto: false,
                text: "UwU",
                activo: true
            },
            {
                id: aumentoCorrelativoChallengeO(),
                challengeId: 2020, // OwO
                correcto: false,
                text: "UwU",
                activo: true
            },




           // Pregunta 2 - Actividad 4
            {
                id: aumentoCorrelativoChallengeO(),
                challengeId: 2020, // OwO
                correcto: false,
                text: "UwU",
                activo: true
            },
            {
                id: aumentoCorrelativoChallengeO(),
                challengeId: 2020, // OwO
                correcto: false,
                text: "UwU",
                activo: true
            },
            {
                id: aumentoCorrelativoChallengeO(),
                challengeId: 2020, // OwO
                correcto: false,
                text: "UwU",
                activo: true
            },
            {
                id: aumentoCorrelativoChallengeO(),
                challengeId: 2020, // OwO
                correcto: false,
                text: "UwU",
                activo: true
            },




           // Pregunta 3 - Actividad 4
            {
                id: aumentoCorrelativoChallengeO(),
                challengeId: 2020, // OwO
                correcto: false,
                text: "UwU",
                activo: true
            },
            {
                id: aumentoCorrelativoChallengeO(),
                challengeId: 2020, // OwO
                correcto: false,
                text: "UwU",
                activo: true
            },
            {
                id: aumentoCorrelativoChallengeO(),
                challengeId: 2020, // OwO
                correcto: false,
                text: "UwU",
                activo: true
            },
            {
                id: aumentoCorrelativoChallengeO(),
                challengeId: 2020, // OwO
                correcto: false,
                text: "UwU",
                activo: true
            },





            // Pregunta 4 - Actividad 4
            {
                id: aumentoCorrelativoChallengeO(),
                challengeId: 2020, // OwO
                correcto: false,
                text: "UwU",
                activo: true
            },
            {
                id: aumentoCorrelativoChallengeO(),
                challengeId: 2020, // OwO
                correcto: false,
                text: "UwU",
                activo: true
            },
            {
                id: aumentoCorrelativoChallengeO(),
                challengeId: 2020, // OwO
                correcto: false,
                text: "UwU",
                activo: true
            },
            {
                id: aumentoCorrelativoChallengeO(),
                challengeId: 2020, // OwO
                correcto: false,
                text: "UwU",
                activo: true
            },









        /**
        *----------------------------------------------------------------------------------------------------------
        * 2. Italia - Actividad 5
        *----------------------------------------------------------------------------------------------------------
        */
        // Pregunta 1 - Actividad 5
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false, 
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },




       // Pregunta 2 - Actividad 5
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },




       // Pregunta 3 - Actividad 5
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false, 
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },





        // Pregunta 4 - Actividad 5
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },










        /**
        * ----------------------------------------------------------------------------------------------------------
        * 2. Italia - Actividad 6
        * ----------------------------------------------------------------------------------------------------------
        */
        // Pregunta 1 - Actividad 6
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },




       // Pregunta 2 - Actividad 6
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false, 
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },




       // Pregunta 3 - Actividad 6
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false, 
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },





        // Pregunta 4 - Actividad 6
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false, 
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },










        /**
        * ----------------------------------------------------------------------------------------------------------
        * 2. Italia - Prueba 2
        * ----------------------------------------------------------------------------------------------------------
        */
        // Pregunta 1 - Prueba 2
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false, 
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },




       // Pregunta 2 - Prueba 2
       {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false, 
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },




       // Pregunta 3 - Prueba 2
       {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },






        // Pregunta 4 - Prueba 2
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },




        // Pregunta 5 - Prueba 2
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false, 
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },



        // Pregunta 6 - Prueba 2
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false, 
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },
        {
            id: aumentoCorrelativoChallengeO(),
            challengeId: 2020, // OwO
            correcto: false,
            text: "UwU",
            activo: true
        },





            // Final UwU
        ]);


        console.log("Rellenado Completado con datos de producción");
    } catch (error) {
        console.error(error);
        throw new Error("Error en rellenar la base de datos");
        
    }
};

main();