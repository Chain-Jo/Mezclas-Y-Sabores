
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
 * CURSOS
 * ==================================================================================================================
 */
        await database.insert(schema.courses).values([
            {
                id:1,
                titulo: "G28",
                enlace_imagen: "/img/cursos/grupo28.png",
                activo: true
            },
            {
                id:2,
                titulo: "G20",
                enlace_imagen: "/img/filete.png",
                activo: false,
            },
            {
                id:3,
                titulo: "G30",
                enlace_imagen: "/img/pastel-de-cumpleanos.png",
                activo: false
            },

        ]);

/**
 * ==================================================================================================================
 * UNIDADES
 * ==================================================================================================================
 */

        await database.insert(schema.units).values([
            {
                id: 1,
                courseId: 1, 
                titulo: "Francia",
                descripcion: "Unidad 1",
                orden:1,
                activo: true
            }
        ]);

        await database.insert(schema.units).values([
            {
                id: 2,
                courseId: 1, 
                titulo: "Italia",
                descripcion: "Unidad 2",
                orden:2,
                activo: true
            }
        ]);


        await database.insert(schema.units).values([
            {
                id: 3,
                courseId: 1, 
                titulo: "España",
                descripcion: "Unidad 3",
                orden:3,
                activo: true
            }
        ]);

        await database.insert(schema.units).values([
            {
                id: 4,
                courseId: 1, 
                titulo: "Alemania",
                descripcion: "Unidad 4",
                orden:4,
                activo: true
            }
        ]);

        await database.insert(schema.units).values([
            {
                id: 5,
                courseId: 1, 
                titulo: "Austria",
                descripcion: "Unidad 5",
                orden:5,
                activo: true
            }
        ]);

        await database.insert(schema.units).values([
            {
                id: 6,
                courseId: 1, 
                titulo: "Grecia",
                descripcion: "Unidad 6",
                orden:6,
                activo: true
            }
        ]);

        await database.insert(schema.units).values([
            {
                id: 7,
                courseId: 1, 
                titulo: "Suiza",
                descripcion: "Unidad 7",
                orden:7,
                activo: true
            }
        ]);

        await database.insert(schema.units).values([
            {
                id: 8,
                courseId: 1, 
                titulo: "Bélgica",
                descripcion: "Unidad 8",
                orden:8,
                activo: true
            }
        ]);

        // await database.insert(schema.recipes).values([
        //     {
        //         id: 1,
        //         unitId: 1, 
        //         titulo: "Receta del pan",
        //         descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure quaerat incidunt veritatis iusto reiciendis! Numquam exercitationem a perferendis, sit deserunt et obcaecati est eius. Debitis totam modi harum esse.",
        //         enlace_imagen: "/img/options/corte-vichy.jpg",
        //         orden:1,
        //         activo: true
        //     },
        // ]);


/**
 * ==================================================================================================================
 * RECETAS
 * ==================================================================================================================
 */

        await database.insert(schema.recipesX).values([
            {
                id: 1,
                unitId: 1, 
                titulo: "CLASE FRANCIA",
                link: "https://drive.google.com/file/d/1p5cvH1bh77CX75pIrhxx-M6pS-Gqe4h4/view",
                orden:1,
                activo: true,
                unidad_referenciada:1
            },
            {
                id: 2,
                unitId: 1, 
                titulo: "RECETARIO FRANCIA",
                link: "https://drive.google.com/file/d/1X0LNYNTXWyiCwkFNomZmykdbbyTvqxvu/view?usp=drive_link",
                orden:2,
                activo: true,
                unidad_referenciada: 1,
            },
            {
                id: 3,
                unitId: 2, 
                titulo: "CLASE ITALIA",
                link: "https://drive.google.com/file/d/1Q2QZob6G58Wp9849dqhafN9Zk6Ik5GSY/view?usp=drive_link",
                orden:3,
                activo: true,
                unidad_referenciada:2
            },
            {
                id: 4,
                unitId: 2, 
                titulo: "RECETARIO ITALIA",
                link: "https://drive.google.com/file/d/1qCdeI7mMPpFNTemPpoISqzrxGartj2bK/view?usp=drive_link",
                orden:4,
                activo: true,
                unidad_referenciada: 2,
            },
            {
                id: 5,
                unitId: 3, 
                titulo: "CLASE ESPAÑA",
                link: "https://drive.google.com/file/d/1CK6A302RQ-mrhsfUMKMxFq1-SAgyzDqJ/view?usp=drive_link",
                orden:5,
                activo: true,
                unidad_referenciada:3
            },
            {
                id: 6,
                unitId: 3, 
                titulo: "RECETARIO ESPAÑA",
                link: "https://drive.google.com/file/d/11TNsLckob-fkCVK_Ch-rzP9C3y0zuTlA/view?usp=drive_link",
                orden:6,
                activo: true,
                unidad_referenciada: 3,
            },
            {
                id: 7,
                unitId: 4, 
                titulo: "CLASE ALEMANIA",
                link: "https://drive.google.com/file/d/1CnyS3-vh4M6kl3n1iYWh22eCO-A31it3/view?usp=drive_link",
                orden:7,
                activo: true,
                unidad_referenciada:4
            },
            {
                id: 8,
                unitId: 4, 
                titulo: "RECETARIO ALEMANIA Y AUSTRIA",
                link: "https://drive.google.com/file/d/1KWgvPdCpgmquxAIy0sANu0sfVzVUfV3Z/view?usp=drive_link",
                orden:8,
                activo: true,
                unidad_referenciada: 4,
            },
            {
                id: 9,
                unitId: 5, 
                titulo: "CLASE AUSTRIA",
                link: "https://drive.google.com/file/d/15femY5Ju1EqNEWKE0huP1Qd_WGj-Yhyo/view?usp=drive_link",
                orden:9,
                activo: true,
                unidad_referenciada:5
            },
            {
                id: 10,
                unitId: 6, 
                titulo: "CLASE GRECIA",
                link: "https://drive.google.com/file/d/1onvHf67jGkLSkNyLjhBYdYgK2hyfeT4w/view?usp=drive_link",
                orden:10,
                activo: true,
                unidad_referenciada: 6,
            },
            {
                id: 11,
                unitId: 6, 
                titulo: "RECETARIO GRECIA",
                link: "https://drive.google.com/file/d/1B6Y2kyzTX23Ue0k5-9MsUQbufMgbYiJY/view?usp=drive_link",
                orden:11,
                activo: true,
                unidad_referenciada:6
            },
            {
                id: 12,
                unitId: 7, 
                titulo: "CLASE SUIZA",
                link: "https://drive.google.com/file/d/1a61drDJTBd8Rgk2RfWwgTHXzKV2GMr7U/view?usp=drive_link",
                orden:12,
                activo: true,
                unidad_referenciada: 7,
            },
            {
                id: 13,
                unitId: 7, 
                titulo: "RECETARIO SUIZA Y BÉLGICA",
                link: "https://drive.google.com/file/d/1V0gftvNLkMGg-mytPEU7GWoK55BlsiAJ/view?usp=drive_link",
                orden:13,
                activo: true,
                unidad_referenciada: 7,
            },
            {
                id: 14,
                unitId: 8, 
                titulo: "CLASE BÉLGICA",
                link: "https://drive.google.com/file/d/1xV4B-2mUaJCbuUw27dJE4MQAXFq0iLdD/view?usp=drive_link",
                orden:14,
                activo: true,
                unidad_referenciada:8
            },
        ]);

/**
 * ==================================================================================================================
 * LECCIONES/ACTIVIDADES
 * ==================================================================================================================
 */


        
        await database.insert(schema.lessons).values([

        /**
         * ----------------------------------------------------------------------------------------------------------
         * 1. Francia
         * ----------------------------------------------------------------------------------------------------------
         */
            {
                id: 1,
                unitId: 1, // Unidad 1 (Francia)
                orden: 1,
                titulo: "Actividad 1 - Francia",
                activo: true,
                prueba: false
            },
            {
                id: 2,
                unitId: 1, // Unidad 1 (Francia)
                orden: 2,
                titulo: "Actividad 2 - Francia",
                activo: true,
                prueba: false
            },
            {
                id: 3,
                unitId: 1, // Unidad 1 (Francia)
                orden: 3,
                titulo: "Actividad 3 - Francia",
                activo: true,
                prueba: false
            },
            {
                id: 4,
                unitId: 1, // Unidad 1 (Francia)
                orden: 4,
                titulo: "Prueba 1 - Francia",
                activo: true,
                prueba: true
            },









        /**
         * ----------------------------------------------------------------------------------------------------------
         * 2. Italia
         * ----------------------------------------------------------------------------------------------------------
         */
            {
                id: 5,
                unitId: 2, // Unidad 2 (Italia)
                orden: 5,
                titulo: "Actividad 4 - Italia",
                activo: true,
                prueba: false
            },
            {
                id: 6,
                unitId: 2, // Unidad 2 (Italia)
                orden: 6,
                titulo: "Actividad 5 - Italia",
                activo: true,
                prueba: false
            },
            {
                id: 7,
                unitId: 2, // Unidad 2 (Italia)
                orden: 7,
                titulo: "Actividad 6 - Italia",
                activo: true,
                prueba: false
            },
            {
                id: 8,
                unitId: 2, // Unidad 2 (Italia)
                orden: 8,
                titulo: "Prueba 2 - Italia",
                activo: true,
                prueba: true
            },
            









        /**
         * ----------------------------------------------------------------------------------------------------------
         * 3. España
         * ----------------------------------------------------------------------------------------------------------
         */
            {
                id: 9,
                unitId: 3, // Unidad 3 (España)
                orden: 9,
                titulo: "Actividad 7 - España",
                activo: true,
                prueba: false
            },
            {
                id: 10,
                unitId: 3, // Unidad 3 (España)
                orden: 10,
                titulo: "Actividad 8 - España",
                activo: true,
                prueba: false
            },
            {
                id: 11,
                unitId: 3, // Unidad 3 (España)
                orden: 11,
                titulo: "Actividad 9 - España",
                activo: true,
                prueba: false
            },
            {
                id: 12,
                unitId: 3, // Unidad 3 (España)
                orden: 12,
                titulo: "Prueba 3 - España",
                activo: true,
                prueba: true
            },










        /**
         * ----------------------------------------------------------------------------------------------------------
         * 4. Alemania
         * ----------------------------------------------------------------------------------------------------------
         */
            {
                id: 13,
                unitId: 4, // Unidad 4 (Alemania)
                orden: 13,
                titulo: "Actividad 10 - Alemania",
                activo: true,
                prueba: false
            },
            {
                id: 14,
                unitId: 4, // Unidad 4 (Alemania)
                orden: 14,
                titulo: "Actividad 11 - Alemania",
                activo: true,
                prueba: false
            },
            {
                id: 15,
                unitId: 4, // Unidad 4 (Alemania)
                orden: 15,
                titulo: "Actividad 12 - Alemania",
                activo: true,
                prueba: false
            },
            {
                id: 16,
                unitId: 4, // Unidad 4 (Alemania)
                orden: 16,
                titulo: "Prueba 4 - Alemania",
                activo: true,
                prueba: true
            },










        /**
         * ----------------------------------------------------------------------------------------------------------
         * 5. Austria
         * ----------------------------------------------------------------------------------------------------------
         */
            {
                id: 17,
                unitId: 5, // Unidad 5 (Austria)
                orden: 17,
                titulo: "Actividad 13 - Austria",
                activo: true,
                prueba: false
            },
            {
                id: 18,
                unitId: 5, // Unidad 5 (Austria)
                orden: 18,
                titulo: "Actividad 14 - Austria",
                activo: true,
                prueba: false
            },
            {
                id: 19,
                unitId: 5, // Unidad 5 (Austria)
                orden: 19,
                titulo: "Actividad 15 - Austria",
                activo: true,
                prueba: false
            },
            {
                id: 20,
                unitId: 5, // Unidad 5 (Austria)
                orden: 20,
                titulo: "Prueba 5 - Austria",
                activo: true,
                prueba: true
            },










        /**
         * ----------------------------------------------------------------------------------------------------------
         * 6. Grecia
         * ----------------------------------------------------------------------------------------------------------
         */
            {
                id: 21,
                unitId: 6, // Unidad 6 (Grecia)
                orden: 21,
                titulo: "Actividad 16 - Grecia",
                activo: true,
                prueba: false
            },
            {
                id: 22,
                unitId: 6, // Unidad 6 (Grecia)
                orden: 22,
                titulo: "Actividad 17 - Grecia",
                activo: true,
                prueba: false
            },
            {
                id: 23,
                unitId: 6, // Unidad 6 (Grecia)
                orden: 23,
                titulo: "Actividad 18 - Grecia",
                activo: true,
                prueba: false
            },
            {
                id: 24,
                unitId: 6, // Unidad 6 (Grecia)
                orden: 24,
                titulo: "Prueba 6 - Grecia",
                activo: true,
                prueba: true
            },










        /**
         * ----------------------------------------------------------------------------------------------------------
         * 7. Suiza
         * ----------------------------------------------------------------------------------------------------------
         */
            {
                id: 25,
                unitId: 7, // Unidad 7 (Suiza)
                orden: 25,
                titulo: "Actividad 19 - Suiza",
                activo: true,
                prueba: false
            },
            {
                id: 26,
                unitId: 7, // Unidad 7 (Suiza)
                orden: 26,
                titulo: "Actividad 20 - Suiza",
                activo: true,
                prueba: false
            },
            {
                id: 27,
                unitId: 7, // Unidad 7 (Suiza)
                orden: 27,
                titulo: "Actividad 21 - Suiza",
                activo: true,
                prueba: false
            },
            {
                id: 28,
                unitId: 7, // Unidad 7 (Suiza)
                orden: 28,
                titulo: "Prueba 7 - Suiza",
                activo: true,
                prueba: true
            },
        









        /**
         * ----------------------------------------------------------------------------------------------------------
         * 8. Bélgica
         * ----------------------------------------------------------------------------------------------------------
         */
            {
                id: 29,
                unitId: 8, // Unidad 8 (Bélgica)
                orden: 29,
                titulo: "Actividad 22 - Bélgica",
                activo: true,
                prueba: false
            },
            {
                id: 30,
                unitId: 8, // Unidad 8 (Bélgica)
                orden: 30,
                titulo: "Actividad 23 - Bélgica",
                activo: true,
                prueba: false
            },
            {
                id: 31,
                unitId: 8, // Unidad 8 (Bélgica)
                orden: 31,
                titulo: "Actividad 24 - Bélgica",
                activo: true,
                prueba: false
            },
            {
                id: 32,
                unitId: 8, // Unidad 8 (Bélgica)
                orden: 32,
                titulo: "Prueba 8 - Bélgica",
                activo: true,
                prueba: true
            },

        ]);



/**
 * ==================================================================================================================
 * PREGUNTAS/RETOS
 * ==================================================================================================================
 */
        // //Ejemplo
        // await database.insert(schema.challenges).values([

        // ]);        

        // 1. Francia
        await database.insert(schema.challenges).values([
            /**
        * ----------------------------------------------------------------------------------------------------------
        * 1. Francia 
        * ----------------------------------------------------------------------------------------------------------
        */

            // Actividad 1
            {
                id: 1,
                lessonId: 1, // 1. Francia - Actividad 1 - Pregunta 1
                type: "ASSIST",
                orden: 1,
                question: '¿Cuantas recetas contenia la guia culinaria de Escoffier?',
                activo: true
            },
            {
                id: 2,
                lessonId: 1, // 1. Francia - Actividad 1 - Pregunta 2
                type: "ASSIST",
                orden: 2,
                question: '¿Por quien fueron influenciados los primeros grades chef de Francia?',
                activo: true
            },
            {
                id: 3,
                lessonId: 1, // 1. Francia - Actividad 1 - Pregunta 3
                type: "ASSIST",
                orden: 3,
                question: '¿De donde deriva la palabra restaurant?',
                activo: true
            },
            {
                id: 4,
                lessonId: 1, // 1. Francia - Actividad 1 - Pregunta 4
                type: "ASSIST",
                orden: 4,
                question: '¿Quien fue considerado como el primer gourmet?',
                activo: true
            },

            // Actividad 2
            {
                id: 5,
                lessonId: 2, // 1. Francia - Actividad 2 - Pregunta 1
                type: "ASSIST",
                orden: 5,
                question: 'En el ratatoullie se usan hierbas de provenza, ¿cuáles son?',
                activo: true
            },
            {
                id: 6,
                lessonId: 2, // 1. Francia - Actividad 2 - Pregunta 2
                type: "ASSIST",
                orden: 6,
                question: '¿Cómo se prepara un Alioli?',
                activo: true
            },
            {
                id: 7,
                lessonId: 2, // 1. Francia - Actividad 2 - Pregunta 3
                type: "ASSIST",
                orden: 7,
                question: '¿Cuáles son los ingredientes del Bouquet Garní?',
                activo: true
            },
            {
                id: 8,
                lessonId: 2, // 1. Francia - Actividad 2 - Pregunta 4
                type: "ASSIST",
                orden: 8,
                question: '¿Cual es la proteina que se usa en el Cassoulet?',
                activo: true
            },

            // Actividad 3
            {
                id: 9,
                lessonId: 3, // 1. Francia - Actividad 3 - Pregunta 1
                type: "ASSIST",
                orden: 9,
                question: '¿Cuál es el estilo característico del chef Ducasse?',
                activo: true
            },
            {
                id: 10,
                lessonId: 3, // 1. Francia - Actividad 3 - Pregunta 2
                type: "ASSIST",
                orden: 10,
                question: '¿Quien fue el primer chef en obtener 6 estrellas Michelin?',
                activo: true
            },
            {
                id: 11,
                lessonId: 3, // 1. Francia - Actividad 3 - Pregunta 3
                type: "ASSIST",
                orden: 11,
                question: 'Para el pollo Bigarade Clásico ¿que piezas de pollo se utilizan?',
                activo: true
            },
            {
                id: 12,
                lessonId: 3, // 1. Francia - Actividad 3 - Pregunta 4
                type: "ASSIST",
                orden: 12,
                question: '¿Cuales son los ingredientes de la Sopa de Cebolla Clásica?',
                activo: true
            },

            // Prueba 1
            {
                id: 13,
                lessonId: 4, // 1. Francia - Prueba 1 - Pregunta 1
                type: "ASSIST",
                orden: 13,
                question: 'En el ratatoullie se usan hierbas de provenza, ¿cuáles son?',
                activo: true
            },
            {
                id: 14,
                lessonId: 4, // 1. Francia - Prueba 1 - Pregunta 2
                type: "ASSIST",
                orden: 14,
                question: '¿Cuales son los ingredientes de la Sopa de Cebolla Clásica?',
                activo: true
            },
            {
                id: 15,
                lessonId: 4, // 1. Francia - Prueba 1 - Pregunta 3
                type: "ASSIST",
                orden: 15,
                question: '¿Cual es la proteína que se usa en el Cassoulet?',
                activo: true
            },
            {
                id: 16,
                lessonId: 4, // 1. Francia - Prueba 1 - Pregunta 4
                type: "ASSIST",
                orden: 16,
                question: '¿Por quien fueron influenciados los primeros grades chef de Francia?',
                activo: true
            },
            {
                id: 17,
                lessonId: 4, // 1. Francia - Prueba 1 - Pregunta 5
                type: "ASSIST",
                orden: 17,
                question: '¿Como se prepara un Alioli?',
                activo: true
            },
            {
                id: 18,
                lessonId: 4, // 1. Francia - Prueba 1 - Pregunta 6
                type: "ASSIST",
                orden: 18,
                question: 'Para el pollo Bigarade Clásico ¿que piezas de pollo se utilizan?',
                activo: true
            },
        ]);

        // 2. Italia
        await database.insert(schema.challenges).values([
            /**
        * ----------------------------------------------------------------------------------------------------------
        * 2. Italia 
        * ----------------------------------------------------------------------------------------------------------
        */

            // Actividad 4
            {
                id: 19,
                lessonId: 5, // 2. Italia - Actividad 4 - Pregunta 1
                type: "ASSIST",
                orden: 19,
                question: '¿Por que se caracteriza la cocina italiana?',
                activo: true
            },
            {
                id: 20,
                lessonId: 5, // 2. Italia - Actividad 4 - Pregunta 2
                type: "ASSIST",
                orden: 20,
                question: '¿La cocina italiana es rica por sus exquisitos platos únicos elaborados con?',
                activo: true
            },
            {
                id: 21,
                lessonId: 5, // 2. Italia - Actividad 4 - Pregunta 3
                type: "ASSIST",
                orden: 21,
                question: '¿Que es un Stracotto al Barolo?',
                activo: true
            },
            {
                id: 22,
                lessonId: 5, // 2. Italia - Actividad 4 - Pregunta 4
                type: "ASSIST",
                orden: 22,
                question: '¿Cuales son los ingredientes del pesto?',
                activo: true
            },

            // Actividad 5
            {
                id: 23,
                lessonId: 6, // 2. Italia - Actividad 5 - Pregunta 1
                type: "ASSIST",
                orden: 23,
                question: '¿Cuales son los ingredientes básicos de la Focaccia al Rosmarino?',
                activo: true
            },
            {
                id: 24,
                lessonId: 6, // 2. Italia - Actividad 5 - Pregunta 2
                type: "ASSIST",
                orden: 24,
                question: '¿Cuales quesos son de origen italiano?',
                activo: true
            },
            {
                id: 25,
                lessonId: 6, // 2. Italia - Actividad 5 - Pregunta 3
                type: "ASSIST",
                orden: 25,
                question: '¿Que es un Calzone?',
                activo: true
            },
            {
                id: 26,
                lessonId: 6, // 2. Italia - Actividad 5 - Pregunta 4
                type: "ASSIST",
                orden: 26,
                question: '¿Que se considera como primer plato en italia?',
                activo: true
            },

            // Actividad 6
            {
                id: 27,
                lessonId: 7, // 2. Italia - Actividad 6 - Pregunta 1
                type: "ASSIST",
                orden: 27,
                question: 'El Affogato se compone de Helado de vainilla y?',
                activo: true
            },
            {
                id: 28,
                lessonId: 7, // 2. Italia - Actividad 6 - Pregunta 2
                type: "ASSIST",
                orden: 28,
                question: 'La caponata es un preparado espeso y picante hecho a base de?',
                activo: true
            },
            {
                id: 29,
                lessonId: 7, // 2. Italia - Actividad 6 - Pregunta 3
                type: "ASSIST",
                orden: 29,
                question: 'Completa la insalata caprese, Queso mozzarella, tomare cherry y?',
                activo: true
            },
            {
                id: 30,
                lessonId: 7, // 2. Italia - Actividad 6 - Pregunta 4
                type: "ASSIST",
                orden: 30,
                question: '¿Cuales son los ingredientes de la Sopa de Cebolla Clásica?',
                activo: true
            },

            // Prueba 2
            {
                id: 31,
                lessonId: 8, // 2. Italia - Prueba 2 - Pregunta 1
                type: "ASSIST",
                orden: 31,
                question: '¿Por que se caracteriza la cocina italiana?',
                activo: true
            },
            {
                id: 32,
                lessonId: 8, // 2. Italia - Prueba 2 - Pregunta 2
                type: "ASSIST",
                orden: 32,
                question: '¿Que es un Stracotto al Barolo?',
                activo: true
            },
            {
                id: 33,
                lessonId: 8, // 2. Italia - Prueba 2 - Pregunta 3
                type: "ASSIST",
                orden: 33,
                question: '¿Que se considera como primer plato en italia?',
                activo: true
            },
            {
                id: 34,
                lessonId: 8, // 2. Italia - Prueba 2 - Pregunta 4
                type: "ASSIST",
                orden: 34,
                question: '¿Cuales son los ingredientes básicos de la Focaccia al Rosmarino?',
                activo: true
            },
            {
                id: 35,
                lessonId: 8, // 2. Italia - Prueba 2 - Pregunta 5
                type: "ASSIST",
                orden: 35,
                question: 'El Affogato se compone de Helado de vainilla y?',
                activo: true
            },
            {
                id: 36,
                lessonId: 8, // 2. Italia - Prueba 2 - Pregunta 6
                type: "ASSIST",
                orden: 36,
                question: 'En la Lengua de res a la Toscana, ¿Cual es el ingrediente característico?',
                activo: true
            },
        ]);     
        
        // 3. España
        await database.insert(schema.challenges).values([
            /**
        * ----------------------------------------------------------------------------------------------------------
        * 3. España 
        * ----------------------------------------------------------------------------------------------------------
        */

            // Actividad 7
            {
                id: 37,
                lessonId: 9, // 3. España - Actividad 7 - Pregunta 1
                type: "ASSIST",
                orden: 37,
                question: '¿De donde desprendían los coderos la grasa denominada ayla?',
                activo: true
            },
            {
                id: 38,
                lessonId: 9, // 3. España - Actividad 7 - Pregunta 2
                type: "ASSIST",
                orden: 38,
                question: '¿Que generó el "Efecto Adriá"?',
                activo: true
            },
            {
                id: 39,
                lessonId: 9, // 3. España - Actividad 7 - Pregunta 3
                type: "ASSIST",
                orden: 39,
                question: '¿Cual es uno de los ingredientes vistos en el "Nuevo mundo"?',
                activo: true
            },
            {
                id: 40,
                lessonId: 9, // 3. España - Actividad 7 - Pregunta 4
                type: "ASSIST",
                orden: 40,
                question: '¿Cual es uno de los ingredientes vistos en el "Nuevo mundo"?',
                activo: true
            },

            // Actividad 8
            {
                id: 41,
                lessonId: 10, // 3. España - Actividad 8 - Pregunta 1
                type: "ASSIST",
                orden: 41,
                question: '¿Que embutido es típicos de Cataluña?',
                activo: true
            },
            {
                id: 42,
                lessonId: 10, // 3. España - Actividad 8 - Pregunta 2
                type: "ASSIST",
                orden: 42,
                question: '¿Cual es el secreto de la mayoría de guisos catalanes?',
                activo: true
            },
            {
                id: 43,
                lessonId: 10, // 3. España - Actividad 8 - Pregunta 3
                type: "ASSIST",
                orden: 43,
                question: '¿Porqué no se usan los morteros de maderas?',
                activo: true
            },
            {
                id: 44,
                lessonId: 10, // 3. España - Actividad 8 - Pregunta 4
                type: "ASSIST",
                orden: 44,
                question: '¿Que ingrediente tuvo más importancia segunda mitad del siglo XVII, y durante todo el siglo XVIII?',
                activo: true
            },

            // Actividad 9
            {
                id: 45,
                lessonId: 11, // 3. España - Actividad 9 - Pregunta 1
                type: "ASSIST",
                orden: 45,
                question: '¿Que concepto se quiso llevar para el siglo XXI?',
                activo: true
            },
            {
                id: 46,
                lessonId: 11, // 3. España - Actividad 9 - Pregunta 2
                type: "ASSIST",
                orden: 46,
                question: '¿Que concepto surgen en la nueva cocina luego del "Efecto Adriá"?',
                activo: true
            },
            {
                id: 47,
                lessonId: 11, // 3. España - Actividad 9 - Pregunta 3
                type: "ASSIST",
                orden: 47,
                question: 'La INTXAURSALSA es una crema a base de?',
                activo: true
            },
            {
                id: 48,
                lessonId: 11, // 3. España - Actividad 9 - Pregunta 4
                type: "ASSIST",
                orden: 48,
                question: '¿Que marisco se usa en el ROMESCO DE MARISCOS?',
                activo: true
            },

            // Prueba 3
            {
                id: 49,
                lessonId: 12, // 3. España - Prueba 3 - Pregunta 1
                type: "ASSIST",
                orden: 49,
                question: '¿De donde desprendían los coderos la grasa denominada ayla?',
                activo: true
            },
            {
                id: 50,
                lessonId: 12, // 3. España - Prueba 3 - Pregunta 2
                type: "ASSIST",
                orden: 50,
                question: '¿Cual es uno de los ingredientes vistos en el "Nuevo mundo"?',
                activo: true
            },
            {
                id: 51,
                lessonId: 12, // 3. España - Prueba 3 - Pregunta 3
                type: "ASSIST",
                orden: 51,
                question: '¿Cual es el secreto de la mayoría de guisos catalanes?',
                activo: true
            },
            {
                id: 52,
                lessonId: 12, // 3. España - Prueba 3 - Pregunta 4
                type: "ASSIST",
                orden: 52,
                question: '¿Que embutido es típicos de Cataluña?',
                activo: true
            },
            {
                id: 53,
                lessonId: 12, // 3. España - Prueba 3 - Pregunta 5
                type: "ASSIST",
                orden: 53,
                question: '¿Que marisco se usa en el ROMESCO DE MARISCOS?',
                activo: true
            },
            {
                id: 54,
                lessonId: 12, // 3. España - Prueba 3 - Pregunta 6
                type: "ASSIST",
                orden: 54,
                question: 'La INTXAURSALSA es una crema a base de?',
                activo: true
            },
        ]); 

        // 4. Alemania
        await database.insert(schema.challenges).values([
            /**
        * ----------------------------------------------------------------------------------------------------------
        * 4. Alemania 
        * ----------------------------------------------------------------------------------------------------------
        */

            // Actividad 10
            {
                id: 55,
                lessonId: 13, // 4. Alemania - Actividad 10 - Pregunta 1
                type: "ASSIST",
                orden: 55,
                question: '¿Por qué se caracteriza la comida Alemana?',
                activo: true
            },
            {
                id: 56,
                lessonId: 13, // 4. Alemania - Actividad 10 - Pregunta 2
                type: "ASSIST",
                orden: 56,
                question: '¿Como se le llaman a las Salchicas en Alemania?',
                activo: true
            },
            {
                id: 57,
                lessonId: 13, // 4. Alemania - Actividad 10 - Pregunta 3
                type: "ASSIST",
                orden: 57,
                question: 'El Flammkuchen es un plato que se asemeja a:',
                activo: true
            },
            {
                id: 58,
                lessonId: 13, // 4. Alemania - Actividad 10 - Pregunta 4
                type: "ASSIST",
                orden: 58,
                question: 'La Torta de la Selva Negra es de la region de:',
                activo: true
            },

            // Actividad 11
            {
                id: 59,
                lessonId: 14, // 4. Alemania - Actividad 11 - Pregunta 1
                type: "ASSIST",
                orden: 59,
                question: 'Cual es la proteina principal del Lübecker National:',
                activo: true
            },
            {
                id: 60,
                lessonId: 14, // 4. Alemania - Actividad 11 - Pregunta 2
                type: "ASSIST",
                orden: 60,
                question: 'El Hamburger Aalsuppe es una sopa de:',
                activo: true
            },
            {
                id: 61,
                lessonId: 14, // 4. Alemania - Actividad 11 - Pregunta 3
                type: "ASSIST",
                orden: 61,
                question: 'El Panhas es un derivado de la matanza del cerdo que se parece a:',
                activo: true
            },
            {
                id: 62,
                lessonId: 14, // 4. Alemania - Actividad 11 - Pregunta 4
                type: "ASSIST",
                orden: 62,
                question: 'Al Baumkuchen se le considera como el rey de:',
                activo: true
            },

            // Actividad 12
            {
                id: 63,
                lessonId: 15, // 4. Alemania - Actividad 12 - Pregunta 1
                type: "ASSIST",
                orden: 63,
                question: 'Thüringer Rostbratwurst es la salchicha tipica de Turingia',
                activo: true
            },
            {
                id: 64,
                lessonId: 15, // 4. Alemania - Actividad 12 - Pregunta 2
                type: "ASSIST",
                orden: 64,
                question: 'El Knödel son bollos de:',
                activo: true
            },
            {
                id: 65,
                lessonId: 15, // 4. Alemania - Actividad 12 - Pregunta 3
                type: "ASSIST",
                orden: 65,
                question: 'El Rheinischer Sauerbraten es asado a base de:',
                activo: true
            },
            {
                id: 66,
                lessonId: 15, // 4. Alemania - Actividad 12 - Pregunta 4
                type: "ASSIST",
                orden: 66,
                question: 'El Rote Grütze se compone principalmente de:',
                activo: true
            },

            // Prueba 4
            {
                id: 67,
                lessonId: 16, // 4. Alemania - Prueba 4 - Pregunta 1
                type: "ASSIST",
                orden: 67,
                question: 'El Flammkuchen es un plato que se asemeja a:',
                activo: true
            },
            {
                id: 68,
                lessonId: 16, // 4. Alemania - Prueba 4 - Pregunta 2
                type: "ASSIST",
                orden: 68,
                question: 'La Torta de la Selva Negra es de la region de:',
                activo: true
            },
            {
                id: 69,
                lessonId: 16, // 4. Alemania - Prueba 4 - Pregunta 3
                type: "ASSIST",
                orden: 69,
                question: 'El Hamburger Aalsuppe es una sopa de:',
                activo: true
            },
            {
                id: 70,
                lessonId: 16, // 4. Alemania - Prueba 4 - Pregunta 4
                type: "ASSIST",
                orden: 70,
                question: 'Al Baumkuchen se le considera como el rey de:',
                activo: true
            },
            {
                id: 71,
                lessonId: 16, // 4. Alemania - Prueba 4 - Pregunta 5
                type: "ASSIST",
                orden: 71,
                question: 'Thüringer Rostbratwurst es la salchicha tipica de Turingia:',
                activo: true
            },
            {
                id: 72,
                lessonId: 16, // 4. Alemania - Prueba 4 - Pregunta 6
                type: "ASSIST",
                orden: 72,
                question: 'El Rheinischer Sauerbraten es asado a base de:',
                activo: true
            },

        ]); 

        // 5. Austria
        await database.insert(schema.challenges).values([
            /**
        * ----------------------------------------------------------------------------------------------------------
        * 5. Austria 
        * ----------------------------------------------------------------------------------------------------------
        */

            // Actividad 13
            {
                id: 73,
                lessonId: 17, // 5. Austria - Actividad 13 - Pregunta 1
                type: "ASSIST",
                orden: 73,
                question: 'La comida austriaca tiene gran influencia del país:',
                activo: true
            },
            {
                id: 74,
                lessonId: 17, // 5. Austria - Actividad 13 - Pregunta 2
                type: "ASSIST",
                orden: 74,
                question: 'El wienerschitzel es ____ que se sirve con ensalada de patatas frias',
                activo: true
            },
            {
                id: 75,
                lessonId: 17, // 5. Austria - Actividad 13 - Pregunta 3
                type: "ASSIST",
                orden: 75,
                question: 'La schittlauchsauce es una salsa a base de:',
                activo: true
            },
            {
                id: 76,
                lessonId: 17, // 5. Austria - Actividad 13 - Pregunta 4
                type: "ASSIST",
                orden: 76,
                question: 'Los palatshinken son:',
                activo: true
            },

            // Actividad 14
            {
                id: 77,
                lessonId: 18, // 5. Austria - Actividad 14 - Pregunta 1
                type: "ASSIST",
                orden: 77,
                question: 'El punto citrico del Wiener Schnitzel se lo da el:',
                activo: true
            },
            {
                id: 78,
                lessonId: 18, // 5. Austria - Actividad 14 - Pregunta 2
                type: "ASSIST",
                orden: 78,
                question: 'El Kärntner Kassnudeln son:',
                activo: true
            },
            {
                id: 79,
                lessonId: 18, // 5. Austria - Actividad 14 - Pregunta 3
                type: "ASSIST",
                orden: 79,
                question: 'El ingrediente principal del Tiroler Knödel (Albondigas tirolesa) es:',
                activo: true
            },
            {
                id: 80,
                lessonId: 18, // 5. Austria - Actividad 14 - Pregunta 4
                type: "ASSIST",
                orden: 80,
                question: 'El Griesnockersuppe es:',
                activo: true
            },

            // Actividad 15
            {
                id: 81,
                lessonId: 19, // 5. Austria - Actividad 15 - Pregunta 1
                type: "ASSIST",
                orden: 81,
                question: 'Schnittlauchsauce es una salsa de:',
                activo: true
            },
            {
                id: 82,
                lessonId: 19, // 5. Austria - Actividad 15 - Pregunta 2
                type: "ASSIST",
                orden: 82,
                question: 'El relleno del Kärnter Reindling es:',
                activo: true
            },
            {
                id: 83,
                lessonId: 19, // 5. Austria - Actividad 15 - Pregunta 3
                type: "ASSIST",
                orden: 83,
                question: 'El Strudel es una tarta rellena con:',
                activo: true
            },
            {
                id: 84,
                lessonId: 19, // 5. Austria - Actividad 15 - Pregunta 4
                type: "ASSIST",
                orden: 84,
                question: 'El Marillenködel son Bolitas dulces de:',
                activo: true
            },

            // Prueba 5
            {
                id: 85,
                lessonId: 20, // 5. Austria - Prueba 5 - Pregunta 1
                type: "ASSIST",
                orden: 85,
                question: 'La comida austriaca tiene gran influencia del país:',
                activo: true
            },
            {
                id: 86,
                lessonId: 20, // 5. Austria - Prueba 5 - Pregunta 2
                type: "ASSIST",
                orden: 86,
                question: 'El wienerschitzel es ____ que se sirve con ensalada de patatas frías',
                activo: true
            },
            {
                id: 87,
                lessonId: 20, // 5. Austria - Prueba 5 - Pregunta 3
                type: "ASSIST",
                orden: 87,
                question: 'El punto citrico del Wiener Schnitzel se lo da el:',
                activo: true
            },
            {
                id: 88,
                lessonId: 20, // 5. Austria - Prueba 5 - Pregunta 4
                type: "ASSIST",
                orden: 88,
                question: 'El Griesnockersuppe es:',
                activo: true
            },
            {
                id: 89,
                lessonId: 20, // 5. Austria - Prueba 5 - Pregunta 5
                type: "ASSIST",
                orden: 89,
                question: 'La schittlauchsauce es una salsa a base de:',
                activo: true
            },
            {
                id: 90,
                lessonId: 20, // 5. Austria - Prueba 5 - Pregunta 6
                type: "ASSIST",
                orden: 90,
                question: 'El Strudel es una tarta rellena con:',
                activo: true
            },

        ]);   

        // 6. Grecia
        await database.insert(schema.challenges).values([
            /**
        * ----------------------------------------------------------------------------------------------------------
        * 6. Grecia 
        * ----------------------------------------------------------------------------------------------------------
        */

            // Actividad 16
            {
                id: 91,
                lessonId: 21, // 6. Grecia - Actividad 16 - Pregunta 1
                type: "ASSIST",
                orden: 91,
                question: 'La cocina griega constituye la esencia de la gastronomia ________ al fusionar tradiciones culinarias,',
                activo: true
            },
            {
                id: 92,
                lessonId: 21, // 6. Grecia - Actividad 16 - Pregunta 2
                type: "ASSIST",
                orden: 92,
                question: 'En la comida griega abundan las cremas a base de:',
                activo: true
            },
            {
                id: 93,
                lessonId: 21, // 6. Grecia - Actividad 16 - Pregunta 3
                type: "ASSIST",
                orden: 93,
                question: 'Los griegos prefieren los platos de:',
                activo: true
            },
            {
                id: 94,
                lessonId: 21, // 6. Grecia - Actividad 16 - Pregunta 4
                type: "ASSIST",
                orden: 94,
                question: 'La Moussaka es un pastel de forma rectangular que combina:',
                activo: true
            },

            // Actividad 17
            {
                id: 95,
                lessonId: 22, // 6. Grecia - Actividad 17 - Pregunta 1
                type: "ASSIST",
                orden: 95,
                question: 'La ensalada griega por antonomasia es:',
                activo: true
            },
            {
                id: 96,
                lessonId: 22, // 6. Grecia - Actividad 17 - Pregunta 2
                type: "ASSIST",
                orden: 96,
                question: '¿Que ingrediente tiene Omnipresencia en las preparaciones griegas?',
                activo: true
            },
            {
                id: 97,
                lessonId: 22, // 6. Grecia - Actividad 17 - Pregunta 3
                type: "ASSIST",
                orden: 97,
                question: '¿Cual es el queso tradicional de Grecia?',
                activo: true
            },
            {
                id: 98,
                lessonId: 22, // 6. Grecia - Actividad 17 - Pregunta 4
                type: "ASSIST",
                orden: 98,
                question: '¿Que especia es muy usada en postres y salados?',
                activo: true
            },

            // Actividad 18
            {
                id: 99,
                lessonId: 23, // 6. Grecia - Actividad 18 - Pregunta 1
                type: "ASSIST",
                orden: 99,
                question: 'Para el Tzatziki los ingredientes principales son:',
                activo: true
            },
            {
                id: 100,
                lessonId: 23, // 6. Grecia - Actividad 18 - Pregunta 2
                type: "ASSIST",
                orden: 100,
                question: 'El MELITZANES PAPOUTSAKIA son:',
                activo: true
            },
            {
                id: 101,
                lessonId: 23, // 6. Grecia - Actividad 18 - Pregunta 3
                type: "ASSIST",
                orden: 101,
                question: 'Las SPANAKÓPITA son:',
                activo: true
            },
            {
                id: 102,
                lessonId: 23, // 6. Grecia - Actividad 18 - Pregunta 4
                type: "ASSIST",
                orden: 102,
                question: 'El Galaktoboureko es:',
                activo: true
            },

            // Prueba 6
            {
                id: 103,
                lessonId: 24, // 6. Grecia - Prueba 6 - Pregunta 1
                type: "ASSIST",
                orden: 103,
                question: 'Para el Tzatziki los ingredientes principales son:',
                activo: true
            },
            {
                id: 104,
                lessonId: 24, // 6. Grecia - Prueba 6 - Pregunta 2
                type: "ASSIST",
                orden: 104,
                question: 'La Moussaka es un pastel de forma rectangular que combina:',
                activo: true
            },
            {
                id: 105,
                lessonId: 24, // 6. Grecia - Prueba 6 - Pregunta 3
                type: "ASSIST",
                orden: 105,
                question: '¿Que ingrediente tiene Omnipresencia en las preparaciones griegas?',
                activo: true
            },
            {
                id: 106,
                lessonId: 24, // 6. Grecia - Prueba 6 - Pregunta 4
                type: "ASSIST",
                orden: 106,
                question: '¿Que especia es muy usada en postres y salados?',
                activo: true
            },
            {
                id: 107,
                lessonId: 24, // 6. Grecia - Prueba 6 - Pregunta 5
                type: "ASSIST",
                orden: 107,
                question: 'Para el Tzatziki los ingredientes principales son:',
                activo: true
            },
            {
                id: 108,
                lessonId: 24, // 6. Grecia - Prueba 6 - Pregunta 6
                type: "ASSIST",
                orden: 108,
                question: 'El MELITZANES PAPOUTSAKIA son:',
                activo: true
            },



        ]);   

        // 7. Suiza
        await database.insert(schema.challenges).values([
            /**
        * ----------------------------------------------------------------------------------------------------------
        * 7. Suiza 
        * ----------------------------------------------------------------------------------------------------------
        */

            // Actividad 19
            {
                id: 109,
                lessonId: 25, // 7. Suiza - Actividad 19 - Pregunta 1
                type: "ASSIST",
                orden: 109,
                question: '¿Que platos estan presentes en todas las cocinas de suiza?',
                activo: true
            },
            {
                id: 110,
                lessonId: 25, // 7. Suiza - Actividad 19 - Pregunta 2
                type: "ASSIST",
                orden: 110,
                question: '¿Cual queso es producido en suiza?',
                activo: true
            },
            {
                id: 111,
                lessonId: 25, // 7. Suiza - Actividad 19 - Pregunta 3
                type: "ASSIST",
                orden: 111,
                question: '¿Que vino es el de mayor consumo en Suiza?',
                activo: true
            },
            {
                id: 112,
                lessonId: 25, // 7. Suiza - Actividad 19 - Pregunta 4
                type: "ASSIST",
                orden: 112,
                question: '¿Por que es reconocida Suiza gastronómicamente?',
                activo: true
            },

            // Actividad 20
            {
                id: 113,
                lessonId: 26, // 7. Suiza - Actividad 20 - Pregunta 1
                type: "ASSIST",
                orden: 113,
                question: '¿Que caldo usa el kalbsgeschnetzeltes?',
                activo: true
            },
            {
                id: 114,
                lessonId: 26, // 7. Suiza - Actividad 20 - Pregunta 2
                type: "ASSIST",
                orden: 114,
                question: 'El Kaese salad es una ensalda que se elabora con un embutido ¿Cual es?',
                activo: true
            },
            {
                id: 115,
                lessonId: 26, // 7. Suiza - Actividad 20 - Pregunta 3
                type: "ASSIST",
                orden: 115,
                question: 'Le Papet Vaudois se compone por:',
                activo: true
            },
            {
                id: 116,
                lessonId: 26, // 7. Suiza - Actividad 20 - Pregunta 4
                type: "ASSIST",
                orden: 116,
                question: '¿Que aceite se usa en el Kaese salad?',
                activo: true
            },

            // Actividad 21
            {
                id: 117,
                lessonId: 27, // 7. Suiza - Actividad 21 - Pregunta 1
                type: "ASSIST",
                orden: 117,
                question: 'Para el Le Papet Vaudois se usa caldo de:',
                activo: true
            },
            {
                id: 118,
                lessonId: 27, // 7. Suiza - Actividad 21 - Pregunta 2
                type: "ASSIST",
                orden: 118,
                question: '¿El Basler Läckerli utiliza un licor cual es?',
                activo: true
            },
            {
                id: 119,
                lessonId: 27, // 7. Suiza - Actividad 21 - Pregunta 3
                type: "ASSIST",
                orden: 119,
                question: '¿Que tipo de queso usa el Älplermagronen?',
                activo: true
            },

            // Prueba 7
            {
                id: 120,
                lessonId: 28, // 7. Suiza - Actividad 21 - Pregunta 4
                type: "ASSIST",
                orden: 120,
                question: '¿Cual queso es producido en suiza?',
                activo: true
            },

            {
                id: 121,
                lessonId: 28, // 7. Suiza - Prueba 7 - Pregunta 1
                type: "ASSIST",
                orden: 121,
                question: '¿Por que es reconocida Suiza gastronómicamente?',
                activo: true
            },
            {
                id: 122,
                lessonId: 28, // 7. Suiza - Prueba 7 - Pregunta 2
                type: "ASSIST",
                orden: 122,
                question: 'El Kaese salad es una ensalda que se elabora con un embutido ¿Cual es?',
                activo: true
            },
            {
                id: 123,
                lessonId: 28, // 7. Suiza - Prueba 7 - Pregunta 3
                type: "ASSIST",
                orden: 123,
                question: '¿Que caldo usa el kalbsgeschnetzeltes?',
                activo: true
            },
            {
                id: 124,
                lessonId: 28, // 7. Suiza - Prueba 7 - Pregunta 4
                type: "ASSIST",
                orden: 124,
                question: '¿Que tipo de queso usa el Älplermagronen?',
                activo: true
            },
            {
                id: 125,
                lessonId: 28, // 7. Suiza - Prueba 7 - Pregunta 5
                type: "ASSIST",
                orden: 125,
                question: 'El Basler Läckerli utiliza un licor ¿Cual es?',
                activo: true
            },

        ]);   

        // 8. Bélgica
        await database.insert(schema.challenges).values([
        /**
        * ----------------------------------------------------------------------------------------------------------
        * 8. Bélgica 
        * ----------------------------------------------------------------------------------------------------------
        */
       
            {
                id: 126,
                lessonId: 29, // 8. Bélgica - Actividad 22 - Pregunta 1
                type: "ASSIST",
                orden: 126,
                question: '¿Que plato destaca en la cocina belga?',
                activo: true
            },
            // Actividad 22
            {
                id: 127,
                lessonId: 29, // 8. Bélgica - Actividad 22 - Pregunta 1
                type: "ASSIST",
                orden: 127,
                question: 'El Waterzooi es una sopa cremosa de:',
                activo: true
            },
            {
                id: 128,
                lessonId: 29, // 8. Bélgica - Actividad 22 - Pregunta 2
                type: "ASSIST",
                orden: 128,
                question: 'Las Carbonadas se elabora con:',
                activo: true
            },
            {
                id: 129,
                lessonId: 29, // 8. Bélgica - Actividad 22 - Pregunta 3
                type: "ASSIST",
                orden: 129,
                question: 'EL Carbonades a la flamenca es:',
                activo: true
            },

            // Actividad 23
            {
                id: 130,
                lessonId: 30, // 8. Bélgica - Actividad 22 - Pregunta 4
                type: "ASSIST",
                orden: 130,
                question: '¿Cuantas variades de bombones existen en Bélgica?',
                activo: true
            },

            {
                id: 131,
                lessonId: 30, // 8. Bélgica - Actividad 23 - Pregunta 1
                type: "ASSIST",
                orden: 131,
                question: '¿Como es el Chocolate Belga?',
                activo: true
            },
            {
                id: 132,
                lessonId: 30, // 8. Bélgica - Actividad 23 - Pregunta 2
                type: "ASSIST",
                orden: 132,
                question: '¿Cuantas variedades de Queso existen en Bélgica?',
                activo: true
            },
            {
                id: 133,
                lessonId: 30, // 8. Bélgica - Actividad 23 - Pregunta 3
                type: "ASSIST",
                orden: 133,
                question: '¿Que sabor de cerveza puede ser único de Bélgica?',
                activo: true
            },
            // {
            //     id: 133,
            //     lessonId: 30, // 8. Bélgica - Actividad 23 - Pregunta 4
            //     type: "ASSIST",
            //     orden: 133,
            //     question: '¿Que especia es muy usada en postres y salados?',
            //     activo: true
            // },

            // Actividad 24
            {
                id: 134,
                lessonId: 31, // 8. Bélgica - Actividad 24 - Pregunta 1
                type: "ASSIST",
                orden: 134,
                question: 'El Vol au vent usa caldo de:',
                activo: true
            },
            {
                id: 135,
                lessonId: 31, // 8. Bélgica - Actividad 24 - Pregunta 2
                type: "ASSIST",
                orden: 135,
                question: 'Para la Crema a la flamenca se usa:',
                activo: true
            },
            {
                id: 136,
                lessonId: 31, // 8. Bélgica - Actividad 24 - Pregunta 3
                type: "ASSIST",
                orden: 136,
                question: 'Para la elaboracion de la Pasta Choux primero:',
                activo: true
            },
            // Prueba 8
            {
                id: 138,
                lessonId: 32, // 8. Bélgica - Actividad 24 - Pregunta 4
                type: "ASSIST",
                orden: 138,
                question: '¿Que plato destaca en la cocina belga?',
                activo: true
            },

            {
                id: 139,
                lessonId: 32, // 8. Bélgica - Prueba 8 - Pregunta 1
                type: "ASSIST",
                orden: 139,
                question: 'EL Carbonades a la flamenca es:',
                activo: true
            },
            {
                id: 140,
                lessonId: 32, // 8. Bélgica - Prueba 8 - Pregunta 2
                type: "ASSIST",
                orden: 140,
                question: '¿Como es el Chocolate Belga?',
                activo: true
            },
            {
                id: 141,
                lessonId: 32, // 8. Bélgica - Prueba 8 - Pregunta 3
                type: "ASSIST",
                orden: 141,
                question: '¿Cuantas variedades de Queso existen en Bélgica?',
                activo: true
            },
            {
                id: 142,
                lessonId: 32, // 8. Bélgica - Prueba 8 - Pregunta 4
                type: "ASSIST",
                orden: 142,
                question: 'Para la Crema a la flamenca se usa:',
                activo: true
            },
            {
                id: 143,
                lessonId: 32, // 8. Bélgica - Prueba 8 - Pregunta 5
                type: "ASSIST",
                orden: 143,
                question: 'Para la elaboracion de la Pasta Choux primero:',
                activo: true
            },
            // {
            //     id: 126,
            //     lessonId: 32, // 8. Bélgica - Prueba 8 - Pregunta 6
            //     type: "ASSIST",
            //     orden: 126,
            //     question: 'El MELITZANES PAPOUTSAKIA son:',
            //     activo: true
            // },
            // Final uwu
        ]);










/**
 * ==================================================================================================================
 * Respuestas
 * ==================================================================================================================
 */
// Challenges lesson 1

        await database.insert(schema.challengeOptions).values([
            /**
            * ----------------------------------------------------------------------------------------------------------
            * 1. Francia - Actividad 1
            * ----------------------------------------------------------------------------------------------------------
            */
           // Pregunta 1
            {
                id: 1,
                challengeId: 1, // ¿Cuantas recetas contenia la guia culinaria de Escoffier?
                correcto: false,
                text: "500",
                activo: true
            },
            {
                id: 2,
                challengeId: 1, // ¿Cuantas recetas contenia la guia culinaria de Escoffier?
                correcto: true,
                text: "5000",
                activo: true
            },
            {
                id: 3,
                challengeId: 1, // ¿Cuantas recetas contenia la guia culinaria de Escoffier?
                correcto: false,
                text: "2000",
                activo: true
            },
            {
                id: 4,
                challengeId: 1, // ¿Cuantas recetas contenia la guia culinaria de Escoffier?
                correcto: false,
                text: "3000",
                activo: true
            },




           // Pregunta 2
            {
                id: 5,
                challengeId: 2, // ¿Por quien fueron influenciados los primeros grades chef de Francia?
                correcto: false,
                text: "Taillevent",
                activo: true
            },
            {
                id: 6,
                challengeId: 2, // ¿Por quien fueron influenciados los primeros grades chef de Francia?
                correcto: false,
                text: "La Varenne",
                activo: true
            },
            {
                id: 7,
                challengeId: 2, // ¿Por quien fueron influenciados los primeros grades chef de Francia?
                correcto: false,
                text: "Auguste Escoffier",
                activo: true
            },
            {
                id: 8,
                challengeId: 2, // ¿Por quien fueron influenciados los primeros grades chef de Francia?
                correcto: true,
                text: "Antonin Carême",
                activo: true
            },




           // Pregunta 3
            {
                id: 9,
                challengeId: 3, // ¿De donde deriva la palabra restaurant?
                correcto: false,
                text: "Ristorant",
                activo: true
            },
            {
                id: 10,
                challengeId: 3, // ¿De donde deriva la palabra restaurant?
                correcto: true,
                text: "Restaurer",
                activo: true
            },
            {
                id: 11,
                challengeId: 3, // ¿De donde deriva la palabra restaurant?
                correcto: false,
                text: "Restore",
                activo: true
            },
            {
                id: 12,
                challengeId: 3, // ¿De donde deriva la palabra restaurant?
                correcto: false,
                text: "Restaurar",
                activo: true
            },





            // Pregunta 4
            {
                id: 13,
                challengeId: 4, // ¿Quien fue considerado como el primer gourmet?
                correcto: false,
                text: "Apucus",
                activo: true
            },
            {
                id: 14,
                challengeId: 4, // ¿Quien fue considerado como el primer gourmet?
                correcto: false,
                text: "Apiccuss",
                activo: true
            },
            {
                id: 15,
                challengeId: 4, // ¿Quien fue considerado como el primer gourmet?
                correcto: true,
                text: "Apicus",
                activo: true
            },
            {
                id: 16,
                challengeId: 4, // ¿Quien fue considerado como el primer gourmet?
                correcto: false,
                text: "Apiccus",
                activo: true
            },









        /**
        *----------------------------------------------------------------------------------------------------------
        * 1. Francia - Actividad 2
        *----------------------------------------------------------------------------------------------------------
        */
        // Pregunta 1
        {
            id: 17,
            challengeId: 5, // En el ratatoullie se usan hierbas de provenza, ¿cuales son ?
            correcto: false,
            text: "Estragon, Romero, Mejorana y Oregano",
            activo: true
        },
        {
            id: 18,
            challengeId: 5, // En el ratatoullie se usan hierbas de provenza, ¿cuales son ?
            correcto: true, // si
            text: "Romero, Tomillo, Mejorana y Oregano",
            activo: true
        },
        {
            id: 19,
            challengeId: 5, // En el ratatoullie se usan hierbas de provenza, ¿cuales son ?
            correcto: false,
            text: "Romero, Estragon, Perejil y Cilantro",
            activo: true
        },
        {
            id: 20,
            challengeId: 5, // En el ratatoullie se usan hierbas de provenza, ¿cuales son ?
            correcto: false,
            text: "Tomillo, Mejorana, Albahaca y Oregano",
            activo: true
        },




       // Pregunta 2
        {
            id: 21,
            challengeId: 6, // ¿Como se prepara un Alioli?
            correcto: true, // si
            text: "Yema de huevo + oliva + sal + ajo en brunoise.",
            activo: true
        },
        {
            id: 22,
            challengeId: 6, // ¿Como se prepara un Alioli?
            correcto: false,
            text: "Yema de huevo + oliva + sal + cebolla en brunoise.",
            activo: true
        },
        {
            id: 23,
            challengeId: 6, // ¿Como se prepara un Alioli?
            correcto: false,
            text: "Clara de huevo + oliva + sal + cebolla en brunoise.",
            activo: true
        },
        {
            id: 24,
            challengeId: 6, // ¿Como se prepara un Alioli?
            correcto: false,
            text: "Clara de huevo + oliva + sal + ajo en brunoise.",
            activo: true
        },




       // Pregunta 3
        {
            id: 25,
            challengeId: 7, // ¿Cuales son los ingredientes del Bouquet Garní?
            correcto: true, // si
            text: "Perejil, tomillo, hojas de laurel + especies de preferencia.",
            activo: true
        },
        {
            id: 26,
            challengeId: 7, // ¿Cuales son los ingredientes del Bouquet Garní?
            correcto: false,
            text: "Albahaca, Tomillo, Estragon + especies de preferencia.",
            activo: true
        },
        {
            id: 27,
            challengeId: 7, // ¿Cuales son los ingredientes del Bouquet Garní?
            correcto: false,
            text: "Tomillo, Mejorana, Hojas de laurel + especies de preferencia.",
            activo: true
        },
        {
            id: 28,
            challengeId: 7, // ¿Cuales son los ingredientes del Bouquet Garní?
            correcto: false,
            text: "Hojas de laurel + especies de preferencia.",
            activo: true
        },





        // Pregunta 4
        {
            id: 29,
            challengeId: 8, // ¿Cual es la proteina que se usa en el Cassoulet?
            correcto: false,
            text: "Res",
            activo: true
        },
        {
            id: 30,
            challengeId: 8, // ¿Cual es la proteina que se usa en el Cassoulet?
            correcto: false,
            text: "Pollo",
            activo: true
        },
        {
            id: 31,
            challengeId: 8, // ¿Cual es la proteina que se usa en el Cassoulet?
            correcto: false,
            text: "Pescado",
            activo: true
        },
        {
            id: 32,
            challengeId: 8, // ¿Cual es la proteina que se usa en el Cassoulet?
            correcto: true, // si
            text: "Pato",
            activo: true
        },










             /**
            * ----------------------------------------------------------------------------------------------------------
            * 1. Francia - Actividad 3
            * ----------------------------------------------------------------------------------------------------------
            */
           // Pregunta 1
           {
            id: 33,
            challengeId: 9, // Cual es el estilo característico del chef Ducasse?
            correcto: false,
            text: "Cocción rapida a fuego alto.",
            activo: true
        },
        {
            id: 34,
            challengeId: 9, // Cual es el estilo característico del chef Ducasse?
            correcto: true, // si
            text: "Cocción a bajas temperaturas y muchos tiempos de cocción.",
            activo: true
        },
        {
            id: 35,
            challengeId: 9, // Cual es el estilo característico del chef Ducasse?
            correcto: false,
            text: "Cocción vuelta y vuelta.",
            activo: true
        },
        {
            id: 36,
            challengeId: 9, // Cual es el estilo característico del chef Ducasse?
            correcto: false,
            text: "Cocción a vapor.",
            activo: true
        },




       // Pregunta 2
        {
            id: 37,
            challengeId: 10, // Quien fue el primer chef en obtener 6 estrellas Michelin?
            correcto: false,
            text: "Escoffier.",
            activo: true
        },
        {
            id: 38,
            challengeId: 10, // Quien fue el primer chef en obtener 6 estrellas Michelin?
            correcto: false,
            text: "Carême.",
            activo: true
        },
        {
            id: 39,
            challengeId: 10, // Quien fue el primer chef en obtener 6 estrellas Michelin?
            correcto: true, // si
            text: "Ducasse.",
            activo: true
        },
        {
            id: 40,
            challengeId: 10, // Quien fue el primer chef en obtener 6 estrellas Michelin?
            correcto: false,
            text: "Gordon Ramsay.",
            activo: true
        },




       // Pregunta 3
        {
            id: 41,
            challengeId: 11, // Para el pollo Bigarade Clásico ¿ que piezas de pollo se utilizan?
            correcto: false,
            text: "Pechuga y alas.",
            activo: true
        },
        {
            id: 42,
            challengeId: 11, // Para el pollo Bigarade Clásico ¿ que piezas de pollo se utilizan?
            correcto: true, // si
            text: "Muslo y contra muslo.",
            activo: true
        },
        {
            id: 43,
            challengeId: 11, // Para el pollo Bigarade Clásico ¿ que piezas de pollo se utilizan?
            correcto: false,
            text: "Alas y Muslo.",
            activo: true
        },
        {
            id: 44,
            challengeId: 11, // Para el pollo Bigarade Clásico ¿ que piezas de pollo se utilizan?
            correcto: false,
            text: "Pechuga y contra muslo.",
            activo: true
        },





        // Pregunta 4
        {
            id: 45,
            challengeId: 12, // Cuales son los ingredientes de la Sopa de Cebolla Clásica?
            correcto: true, // si
            text: "Cebollas, Hojas de laurel, Romero, Mantequilla, Crotones y Parmesano.",
            activo: true
        },
        {
            id: 46,
            challengeId: 12, // Cuales son los ingredientes de la Sopa de Cebolla Clásica?
            correcto: false,
            text: "Cebollas, Tomillo, Estragon, Mantequilla, Crotones y Pecorino.",
            activo: true
        },
        {
            id: 47,
            challengeId: 12, // Cuales son los ingredientes de la Sopa de Cebolla Clásica?
            correcto: false,
            text: "Cebollas, Hojas de laurel, Tomillo, Manteca de cerdo, Crotones y Parmesano.",
            activo: true
        },
        {
            id: 48,
            challengeId: 12, // Cuales son los ingredientes de la Sopa de Cebolla Clásica?
            correcto: false,
            text: "Cebollas, Pimienta Blanca, Pimienta Negra, Mantequilla, Crotones y Parmesano.",
            activo: true
        },










        /**
        * ----------------------------------------------------------------------------------------------------------
        * 1. Francia - Prueba 1
        * ----------------------------------------------------------------------------------------------------------
        */
        // Pregunta 1
        {
            id: 49,
            challengeId: 13, // En el ratatoullie se usan hierbas de provenza, ¿cuales son ?
            correcto: false,
            text: "Estragon, Romero, Mejorana y Oregano",
            activo: true
        },
        {
            id: 50,
            challengeId: 13, // En el ratatoullie se usan hierbas de provenza, ¿cuales son ?
            correcto: true, // si
            text: "Romero, Tomillo, Mejorana y Oregano",
            activo: true
        },
        {
            id: 51,
            challengeId: 13, // En el ratatoullie se usan hierbas de provenza, ¿cuales son ?
            correcto: false,
            text: "Romero, Estragon, Perejil y Cilantro",
            activo: true
        },
        {
            id: 52,
            challengeId: 13, // En el ratatoullie se usan hierbas de provenza, ¿cuales son ?
            correcto: false,
            text: "Tomillo, Mejorana, Albahaca y Oregano",
            activo: true
        },




       // Pregunta 2
       {
            id: 53,
            challengeId: 14, // Cuales son los ingredientes de la Sopa de Cebolla Clásica?
            correcto: true, // si
            text: "Cebollas, Hojas de laurel, Romero, Mantequilla, Crotones y Parmesano.",
            activo: true
        },
        {
            id: 54,
            challengeId: 14, // Cuales son los ingredientes de la Sopa de Cebolla Clásica?
            correcto: false,
            text: "Cebollas, Tomillo, Estragon, Mantequilla, Crotones y Pecorino.",
            activo: true
        },
        {
            id: 55,
            challengeId: 14, // Cuales son los ingredientes de la Sopa de Cebolla Clásica?
            correcto: false,
            text: "Cebollas, Hojas de laurel, Tomillo, Manteca de cerdo, Crotones y Parmesano.",
            activo: true
        },
        {
            id: 56,
            challengeId: 14, // Cuales son los ingredientes de la Sopa de Cebolla Clásica?
            correcto: false,
            text: "Cebollas, Pimienta Blanca, Pimienta Negra, Mantequilla, Crotones y Parmesano.",
            activo: true
        },




       // Pregunta 3
       {
            id: 57,
            challengeId: 15, // ¿Cual es la proteina que se usa en el Cassoulet?
            correcto: false,
            text: "Res",
            activo: true
        },
        {
            id: 58,
            challengeId: 15, // ¿Cual es la proteina que se usa en el Cassoulet?
            correcto: false,
            text: "Pollo",
            activo: true
        },
        {
            id: 59,
            challengeId: 15, // ¿Cual es la proteina que se usa en el Cassoulet?
            correcto: false,
            text: "Pescado",
            activo: true
        },
        {
            id: 60,
            challengeId: 15, // ¿Cual es la proteina que se usa en el Cassoulet?
            correcto: true, // si
            text: "Pato",
            activo: true
        },






        // Pregunta 4
        {
            id: 61,
            challengeId: 16, // ¿Por quien fueron influenciados los primeros grades chef de Francia?
            correcto: false,
            text: "Taillevent",
            activo: true
        },
        {
            id: 62,
            challengeId: 16, // ¿Por quien fueron influenciados los primeros grades chef de Francia?
            correcto: false,
            text: "La Varenne",
            activo: true
        },
        {
            id: 63,
            challengeId: 16, // ¿Por quien fueron influenciados los primeros grades chef de Francia?
            correcto: false,
            text: "Auguste Escoffier",
            activo: true
        },
        {
            id: 64,
            challengeId: 16, // ¿Por quien fueron influenciados los primeros grades chef de Francia?
            correcto: true,
            text: "Antonin Carême",
            activo: true
        },




        // Pregunta 5
        {
            id: 65,
            challengeId: 17, // ¿Como se prepara un Alioli?
            correcto: true, // si
            text: "Yema de huevo + oliva + sal + ajo en brunoise.",
            activo: true
        },
        {
            id: 66,
            challengeId: 17, // ¿Como se prepara un Alioli?
            correcto: false,
            text: "Yema de huevo + oliva + sal + cebolla en brunoise.",
            activo: true
        },
        {
            id: 67,
            challengeId: 17, // ¿Como se prepara un Alioli?
            correcto: false,
            text: "Clara de huevo + oliva + sal + cebolla en brunoise.",
            activo: true
        },
        {
            id: 68,
            challengeId: 17, // ¿Como se prepara un Alioli?
            correcto: false,
            text: "Clara de huevo + oliva + sal + ajo en brunoise.",
            activo: true
        },



        // Pregunta 6
        {
            id: 69,
            challengeId: 18, // Para el pollo Bigarade Clásico ¿ que piezas de pollo se utilizan?
            correcto: false,
            text: "Pechuga y alas.",
            activo: true
        },
        {
            id: 70,
            challengeId: 18, // Para el pollo Bigarade Clásico ¿ que piezas de pollo se utilizan?
            correcto: true, // si
            text: "Muslo y contra muslo.",
            activo: true
        },
        {
            id: 71,
            challengeId: 18, // Para el pollo Bigarade Clásico ¿ que piezas de pollo se utilizan?
            correcto: false,
            text: "Alas y Muslo.",
            activo: true
        },
        {
            id: 72,
            challengeId: 18, // Para el pollo Bigarade Clásico ¿ que piezas de pollo se utilizan?
            correcto: false,
            text: "Pechuga y contra muslo.",
            activo: true
        },





 




            // Final UwU
        ]);

        // Ejemplo
//         await database.insert(schema.challengeOptions).values([
//                    /**
//         * ----------------------------------------------------------------------------------------------------------
//         * 2. País - Actividad 4
//         * ----------------------------------------------------------------------------------------------------------
//         */
//            // Pregunta 1 - Actividad 4
//            {
//             id: aumentoCorrelativoChallengeO,
//             challengeId: 2020, // OwO
//             correcto: false,
//             text: "UwU",
//             activo: true
//         },
//         {
//             id: aumentoCorrelativoChallengeO,
//             challengeId: 2020, // OwO
//             correcto: false,
//             text: "UwU",
//             activo: true
//         },
//         {
//             id: aumentoCorrelativoChallengeO(),
//             challengeId: 2020, // OwO
//             correcto: false,
//             text: "UwU",
//             activo: true
//         },
//         {
//             id: aumentoCorrelativoChallengeO(),
//             challengeId: 2020, // OwO
//             correcto: false,
//             text: "UwU",
//             activo: true
//         },




//        // Pregunta 2 - Actividad 4
//         {
//             id: aumentoCorrelativoChallengeO(),
//             challengeId: 2020, // OwO
//             correcto: false,
//             text: "UwU",
//             activo: true
//         },
//         {
//             id: aumentoCorrelativoChallengeO(),
//             challengeId: 2020, // OwO
//             correcto: false,
//             text: "UwU",
//             activo: true
//         },
//         {
//             id: aumentoCorrelativoChallengeO(),
//             challengeId: 2020, // OwO
//             correcto: false,
//             text: "UwU",
//             activo: true
//         },
//         {
//             id: aumentoCorrelativoChallengeO(),
//             challengeId: 2020, // OwO
//             correcto: false,
//             text: "UwU",
//             activo: true
//         },




//        // Pregunta 3 - Actividad 4
//         {
//             id: aumentoCorrelativoChallengeO(),
//             challengeId: 2020, // OwO
//             correcto: false,
//             text: "UwU",
//             activo: true
//         },
//         {
//             id: aumentoCorrelativoChallengeO(),
//             challengeId: 2020, // OwO
//             correcto: false,
//             text: "UwU",
//             activo: true
//         },
//         {
//             id: aumentoCorrelativoChallengeO(),
//             challengeId: 2020, // OwO
//             correcto: false,
//             text: "UwU",
//             activo: true
//         },
//         {
//             id: aumentoCorrelativoChallengeO(),
//             challengeId: 2020, // OwO
//             correcto: false,
//             text: "UwU",
//             activo: true
//         },





//         // Pregunta 4 - Actividad 4
//         {
//             id: aumentoCorrelativoChallengeO(),
//             challengeId: 2020, // OwO
//             correcto: false,
//             text: "UwU",
//             activo: true
//         },
//         {
//             id: aumentoCorrelativoChallengeO(),
//             challengeId: 2020, // OwO
//             correcto: false,
//             text: "UwU",
//             activo: true
//         },
//         {
//             id: aumentoCorrelativoChallengeO(),
//             challengeId: 2020, // OwO
//             correcto: false,
//             text: "UwU",
//             activo: true
//         },
//         {
//             id: aumentoCorrelativoChallengeO(),
//             challengeId: 2020, // OwO
//             correcto: false,
//             text: "UwU",
//             activo: true
//         },









//     /**
//     *----------------------------------------------------------------------------------------------------------
//     * 2. Italia - Actividad 5
//     *----------------------------------------------------------------------------------------------------------
//     */
//     // Pregunta 1 - Actividad 5
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false, 
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },




//    // Pregunta 2 - Actividad 5
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },




//    // Pregunta 3 - Actividad 5
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false, 
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },





//     // Pregunta 4 - Actividad 5
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },










//     /**
//     * ----------------------------------------------------------------------------------------------------------
//     * 2. Italia - Actividad 6
//     * ----------------------------------------------------------------------------------------------------------
//     */
//     // Pregunta 1 - Actividad 6
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },




//    // Pregunta 2 - Actividad 6
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false, 
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },




//    // Pregunta 3 - Actividad 6
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false, 
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },





//     // Pregunta 4 - Actividad 6
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false, 
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },










//     /**
//     * ----------------------------------------------------------------------------------------------------------
//     * 2. Italia - Prueba 2
//     * ----------------------------------------------------------------------------------------------------------
//     */
//     // Pregunta 1 - Prueba 2
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false, 
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },




//    // Pregunta 2 - Prueba 2
//    {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false, 
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },




//    // Pregunta 3 - Prueba 2
//    {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },






//     // Pregunta 4 - Prueba 2
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },




//     // Pregunta 5 - Prueba 2
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false, 
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },



//     // Pregunta 6 - Prueba 2
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false, 
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },
//     {
//         id: aumentoCorrelativoChallengeO(),
//         challengeId: 2020, // OwO
//         correcto: false,
//         text: "UwU",
//         activo: true
//     },

//         ]);

        

        console.log("Rellenado Completado con datos de producción");
    } catch (error) {
        console.error(error);
        throw new Error("Error en rellenar la base de datos");
        
    }
};

main();