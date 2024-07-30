
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
        await database.delete(schema.userActions);
        await database.delete(schema.userAproved);
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
                tipo: "COMPLETAR",
                orden: 1,
                pregunta: '¿Cuantas recetas contenia la guia culinaria de Escoffier?',
                activo: true
            },
            {
                id: 2,
                lessonId: 1, // 1. Francia - Actividad 1 - Pregunta 2
                tipo: "COMPLETAR",
                orden: 2,
                pregunta: '¿Por quien fueron influenciados los primeros grades chef de Francia?',
                activo: true
            },
            {
                id: 3,
                lessonId: 1, // 1. Francia - Actividad 1 - Pregunta 3
                tipo: "COMPLETAR",
                orden: 3,
                pregunta: '¿De donde deriva la palabra restaurant?',
                activo: true
            },
            {
                id: 4,
                lessonId: 1, // 1. Francia - Actividad 1 - Pregunta 4
                tipo: "COMPLETAR",
                orden: 4,
                pregunta: '¿Quien fue considerado como el primer gourmet?',
                activo: true
            },

            // Actividad 2
            {
                id: 5,
                lessonId: 2, // 1. Francia - Actividad 2 - Pregunta 1
                tipo: "COMPLETAR",
                orden: 5,
                pregunta: 'En el ratatoullie se usan hierbas de provenza, ¿cuáles son?',
                activo: true
            },
            {
                id: 6,
                lessonId: 2, // 1. Francia - Actividad 2 - Pregunta 2
                tipo: "COMPLETAR",
                orden: 6,
                pregunta: '¿Cómo se prepara un Alioli?',
                activo: true
            },
            {
                id: 7,
                lessonId: 2, // 1. Francia - Actividad 2 - Pregunta 3
                tipo: "COMPLETAR",
                orden: 7,
                pregunta: '¿Cuáles son los ingredientes del Bouquet Garní?',
                activo: true
            },
            {
                id: 8,
                lessonId: 2, // 1. Francia - Actividad 2 - Pregunta 4
                tipo: "COMPLETAR",
                orden: 8,
                pregunta: '¿Cual es la proteina que se usa en el Cassoulet?',
                activo: true
            },

            // Actividad 3
            {
                id: 9,
                lessonId: 3, // 1. Francia - Actividad 3 - Pregunta 1
                tipo: "COMPLETAR",
                orden: 9,
                pregunta: '¿Cuál es el estilo característico del chef Ducasse?',
                activo: true
            },
            {
                id: 10,
                lessonId: 3, // 1. Francia - Actividad 3 - Pregunta 2
                tipo: "COMPLETAR",
                orden: 10,
                pregunta: '¿Quien fue el primer chef en obtener 6 estrellas Michelin?',
                activo: true
            },
            {
                id: 11,
                lessonId: 3, // 1. Francia - Actividad 3 - Pregunta 3
                tipo: "COMPLETAR",
                orden: 11,
                pregunta: 'Para el pollo Bigarade Clásico ¿que piezas de pollo se utilizan?',
                activo: true
            },
            {
                id: 12,
                lessonId: 3, // 1. Francia - Actividad 3 - Pregunta 4
                tipo: "COMPLETAR",
                orden: 12,
                pregunta: '¿Cuales son los ingredientes de la Sopa de Cebolla Clásica?',
                activo: true
            },

            // Prueba 1
            {
                id: 13,
                lessonId: 4, // 1. Francia - Prueba 1 - Pregunta 1
                tipo: "COMPLETAR",
                orden: 13,
                pregunta: 'En el ratatoullie se usan hierbas de provenza, ¿cuáles son?',
                activo: true
            },
            {
                id: 14,
                lessonId: 4, // 1. Francia - Prueba 1 - Pregunta 2
                tipo: "COMPLETAR",
                orden: 14,
                pregunta: '¿Cuales son los ingredientes de la Sopa de Cebolla Clásica?',
                activo: true
            },
            {
                id: 15,
                lessonId: 4, // 1. Francia - Prueba 1 - Pregunta 3
                tipo: "COMPLETAR",
                orden: 15,
                pregunta: '¿Cual es la proteína que se usa en el Cassoulet?',
                activo: true
            },
            {
                id: 16,
                lessonId: 4, // 1. Francia - Prueba 1 - Pregunta 4
                tipo: "COMPLETAR",
                orden: 16,
                pregunta: '¿Por quien fueron influenciados los primeros grades chef de Francia?',
                activo: true
            },
            {
                id: 17,
                lessonId: 4, // 1. Francia - Prueba 1 - Pregunta 5
                tipo: "COMPLETAR",
                orden: 17,
                pregunta: '¿Como se prepara un Alioli?',
                activo: true
            },
            {
                id: 18,
                lessonId: 4, // 1. Francia - Prueba 1 - Pregunta 6
                tipo: "COMPLETAR",
                orden: 18,
                pregunta: 'Para el pollo Bigarade Clásico ¿que piezas de pollo se utilizan?',
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
                tipo: "COMPLETAR",
                orden: 19,
                pregunta: '¿Por que se caracteriza la cocina italiana?',
                activo: true
            },
            {
                id: 20,
                lessonId: 5, // 2. Italia - Actividad 4 - Pregunta 2
                tipo: "COMPLETAR",
                orden: 20,
                pregunta: '¿La cocina italiana es rica por sus exquisitos platos únicos elaborados con?',
                activo: true
            },
            {
                id: 21,
                lessonId: 5, // 2. Italia - Actividad 4 - Pregunta 3
                tipo: "COMPLETAR",
                orden: 21,
                pregunta: '¿Que es un Stracotto al Barolo?',
                activo: true
            },
            {
                id: 22,
                lessonId: 5, // 2. Italia - Actividad 4 - Pregunta 4
                tipo: "COMPLETAR",
                orden: 22,
                pregunta: '¿Cuales son los ingredientes del pesto?',
                activo: true
            },

            // Actividad 5
            {
                id: 23,
                lessonId: 6, // 2. Italia - Actividad 5 - Pregunta 1
                tipo: "COMPLETAR",
                orden: 23,
                pregunta: '¿Cuales son los ingredientes básicos de la Focaccia al Rosmarino?',
                activo: true
            },
            {
                id: 24,
                lessonId: 6, // 2. Italia - Actividad 5 - Pregunta 2
                tipo: "COMPLETAR",
                orden: 24,
                pregunta: '¿Cuales quesos son de origen italiano?',
                activo: true
            },
            {
                id: 25,
                lessonId: 6, // 2. Italia - Actividad 5 - Pregunta 3
                tipo: "COMPLETAR",
                orden: 25,
                pregunta: '¿Que es un Calzone?',
                activo: true
            },
            {
                id: 26,
                lessonId: 6, // 2. Italia - Actividad 5 - Pregunta 4
                tipo: "COMPLETAR",
                orden: 26,
                pregunta: '¿Que se considera como primer plato en italia?',
                activo: true
            },

            // Actividad 6
            {
                id: 27,
                lessonId: 7, // 2. Italia - Actividad 6 - Pregunta 1
                tipo: "COMPLETAR",
                orden: 27,
                pregunta: 'El Affogato se compone de Helado de vainilla y?',
                activo: true
            },
            {
                id: 28,
                lessonId: 7, // 2. Italia - Actividad 6 - Pregunta 2
                tipo: "COMPLETAR",
                orden: 28,
                pregunta: 'La caponata es un preparado espeso y picante hecho a base de?',
                activo: true
            },
            {
                id: 29,
                lessonId: 7, // 2. Italia - Actividad 6 - Pregunta 3
                tipo: "COMPLETAR",
                orden: 29,
                pregunta: 'Completa la insalata caprese, Queso mozzarella, tomare cherry y?',
                activo: true
            },
            {
                id: 30,
                lessonId: 7, // 2. Italia - Actividad 6 - Pregunta 4
                tipo: "COMPLETAR",
                orden: 30,
                pregunta: '¿Cuales son los ingredientes de la Sopa de Cebolla Clásica?',
                activo: true
            },

            // Prueba 2
            {
                id: 31,
                lessonId: 8, // 2. Italia - Prueba 2 - Pregunta 1
                tipo: "COMPLETAR",
                orden: 31,
                pregunta: '¿Por que se caracteriza la cocina italiana?',
                activo: true
            },
            {
                id: 32,
                lessonId: 8, // 2. Italia - Prueba 2 - Pregunta 2
                tipo: "COMPLETAR",
                orden: 32,
                pregunta: '¿Que es un Stracotto al Barolo?',
                activo: true
            },
            {
                id: 33,
                lessonId: 8, // 2. Italia - Prueba 2 - Pregunta 3
                tipo: "COMPLETAR",
                orden: 33,
                pregunta: '¿Que se considera como primer plato en italia?',
                activo: true
            },
            {
                id: 34,
                lessonId: 8, // 2. Italia - Prueba 2 - Pregunta 4
                tipo: "COMPLETAR",
                orden: 34,
                pregunta: '¿Cuales son los ingredientes básicos de la Focaccia al Rosmarino?',
                activo: true
            },
            {
                id: 35,
                lessonId: 8, // 2. Italia - Prueba 2 - Pregunta 5
                tipo: "COMPLETAR",
                orden: 35,
                pregunta: 'El Affogato se compone de Helado de vainilla y?',
                activo: true
            },
            {
                id: 36,
                lessonId: 8, // 2. Italia - Prueba 2 - Pregunta 6
                tipo: "COMPLETAR",
                orden: 36,
                pregunta: 'En la Lengua de res a la Toscana, ¿Cual es el ingrediente característico?',
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
                tipo: "COMPLETAR",
                orden: 37,
                pregunta: '¿De donde desprendían los coderos la grasa denominada ayla?',
                activo: true
            },
            {
                id: 38,
                lessonId: 9, // 3. España - Actividad 7 - Pregunta 2
                tipo: "COMPLETAR",
                orden: 38,
                pregunta: '¿Que generó el "Efecto Adriá"?',
                activo: true
            },
            {
                id: 39,
                lessonId: 9, // 3. España - Actividad 7 - Pregunta 3
                tipo: "COMPLETAR",
                orden: 39,
                pregunta: '¿Cual es uno de los ingredientes vistos en el "Nuevo mundo"?',
                activo: true
            },
            {
                id: 40,
                lessonId: 9, // 3. España - Actividad 7 - Pregunta 4
                tipo: "COMPLETAR",
                orden: 40,
                pregunta: '¿Cual es uno de los ingredientes vistos en el "Nuevo mundo"?',
                activo: true
            },

            // Actividad 8
            {
                id: 41,
                lessonId: 10, // 3. España - Actividad 8 - Pregunta 1
                tipo: "COMPLETAR",
                orden: 41,
                pregunta: '¿Que embutido es típicos de Cataluña?',
                activo: true
            },
            {
                id: 42,
                lessonId: 10, // 3. España - Actividad 8 - Pregunta 2
                tipo: "COMPLETAR",
                orden: 42,
                pregunta: '¿Cual es el secreto de la mayoría de guisos catalanes?',
                activo: true
            },
            {
                id: 43,
                lessonId: 10, // 3. España - Actividad 8 - Pregunta 3
                tipo: "COMPLETAR",
                orden: 43,
                pregunta: '¿Porqué no se usan los morteros de maderas?',
                activo: true
            },
            {
                id: 44,
                lessonId: 10, // 3. España - Actividad 8 - Pregunta 4
                tipo: "COMPLETAR",
                orden: 44,
                pregunta: '¿Que ingrediente tuvo más importancia segunda mitad del siglo XVII, y durante todo el siglo XVIII?',
                activo: true
            },

            // Actividad 9
            {
                id: 45,
                lessonId: 11, // 3. España - Actividad 9 - Pregunta 1
                tipo: "COMPLETAR",
                orden: 45,
                pregunta: '¿Que concepto se quiso llevar para el siglo XXI?',
                activo: true
            },
            {
                id: 46,
                lessonId: 11, // 3. España - Actividad 9 - Pregunta 2
                tipo: "COMPLETAR",
                orden: 46,
                pregunta: '¿Que concepto surgen en la nueva cocina luego del "Efecto Adriá"?',
                activo: true
            },
            {
                id: 47,
                lessonId: 11, // 3. España - Actividad 9 - Pregunta 3
                tipo: "COMPLETAR",
                orden: 47,
                pregunta: 'La INTXAURSALSA es una crema a base de?',
                activo: true
            },
            {
                id: 48,
                lessonId: 11, // 3. España - Actividad 9 - Pregunta 4
                tipo: "COMPLETAR",
                orden: 48,
                pregunta: '¿Que marisco se usa en el ROMESCO DE MARISCOS?',
                activo: true
            },

            // Prueba 3
            {
                id: 49,
                lessonId: 12, // 3. España - Prueba 3 - Pregunta 1
                tipo: "COMPLETAR",
                orden: 49,
                pregunta: '¿De donde desprendían los coderos la grasa denominada ayla?',
                activo: true
            },
            {
                id: 50,
                lessonId: 12, // 3. España - Prueba 3 - Pregunta 2
                tipo: "COMPLETAR",
                orden: 50,
                pregunta: '¿Cual es uno de los ingredientes vistos en el "Nuevo mundo"?',
                activo: true
            },
            {
                id: 51,
                lessonId: 12, // 3. España - Prueba 3 - Pregunta 3
                tipo: "COMPLETAR",
                orden: 51,
                pregunta: '¿Cual es el secreto de la mayoría de guisos catalanes?',
                activo: true
            },
            {
                id: 52,
                lessonId: 12, // 3. España - Prueba 3 - Pregunta 4
                tipo: "COMPLETAR",
                orden: 52,
                pregunta: '¿Que embutido es típicos de Cataluña?',
                activo: true
            },
            {
                id: 53,
                lessonId: 12, // 3. España - Prueba 3 - Pregunta 5
                tipo: "COMPLETAR",
                orden: 53,
                pregunta: '¿Que marisco se usa en el ROMESCO DE MARISCOS?',
                activo: true
            },
            {
                id: 54,
                lessonId: 12, // 3. España - Prueba 3 - Pregunta 6
                tipo: "COMPLETAR",
                orden: 54,
                pregunta: 'La INTXAURSALSA es una crema a base de?',
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
                tipo: "COMPLETAR",
                orden: 55,
                pregunta: '¿Por qué se caracteriza la comida Alemana?',
                activo: true
            },
            {
                id: 56,
                lessonId: 13, // 4. Alemania - Actividad 10 - Pregunta 2
                tipo: "COMPLETAR",
                orden: 56,
                pregunta: '¿Como se le llaman a las Salchicas en Alemania?',
                activo: true
            },
            {
                id: 57,
                lessonId: 13, // 4. Alemania - Actividad 10 - Pregunta 3
                tipo: "COMPLETAR",
                orden: 57,
                pregunta: 'El Flammkuchen es un plato que se asemeja a:',
                activo: true
            },
            {
                id: 58,
                lessonId: 13, // 4. Alemania - Actividad 10 - Pregunta 4
                tipo: "COMPLETAR",
                orden: 58,
                pregunta: 'La Torta de la Selva Negra es de la region de:',
                activo: true
            },

            // Actividad 11
            {
                id: 59,
                lessonId: 14, // 4. Alemania - Actividad 11 - Pregunta 1
                tipo: "COMPLETAR",
                orden: 59,
                pregunta: 'Cual es la proteina principal del Lübecker National:',
                activo: true
            },
            {
                id: 60,
                lessonId: 14, // 4. Alemania - Actividad 11 - Pregunta 2
                tipo: "COMPLETAR",
                orden: 60,
                pregunta: 'El Hamburger Aalsuppe es una sopa de:',
                activo: true
            },
            {
                id: 61,
                lessonId: 14, // 4. Alemania - Actividad 11 - Pregunta 3
                tipo: "COMPLETAR",
                orden: 61,
                pregunta: 'El Panhas es un derivado de la matanza del cerdo que se parece a:',
                activo: true
            },
            {
                id: 62,
                lessonId: 14, // 4. Alemania - Actividad 11 - Pregunta 4
                tipo: "COMPLETAR",
                orden: 62,
                pregunta: 'Al Baumkuchen se le considera como el rey de:',
                activo: true
            },

            // Actividad 12
            {
                id: 63,
                lessonId: 15, // 4. Alemania - Actividad 12 - Pregunta 1
                tipo: "COMPLETAR",
                orden: 63,
                pregunta: 'Thüringer Rostbratwurst es la salchicha tipica de Turingia',
                activo: true
            },
            {
                id: 64,
                lessonId: 15, // 4. Alemania - Actividad 12 - Pregunta 2
                tipo: "COMPLETAR",
                orden: 64,
                pregunta: 'El Knödel son bollos de:',
                activo: true
            },
            {
                id: 65,
                lessonId: 15, // 4. Alemania - Actividad 12 - Pregunta 3
                tipo: "COMPLETAR",
                orden: 65,
                pregunta: 'El Rheinischer Sauerbraten es asado a base de:',
                activo: true
            },
            {
                id: 66,
                lessonId: 15, // 4. Alemania - Actividad 12 - Pregunta 4
                tipo: "COMPLETAR",
                orden: 66,
                pregunta: 'El Rote Grütze se compone principalmente de:',
                activo: true
            },

            // Prueba 4
            {
                id: 67,
                lessonId: 16, // 4. Alemania - Prueba 4 - Pregunta 1
                tipo: "COMPLETAR",
                orden: 67,
                pregunta: 'El Flammkuchen es un plato que se asemeja a:',
                activo: true
            },
            {
                id: 68,
                lessonId: 16, // 4. Alemania - Prueba 4 - Pregunta 2
                tipo: "COMPLETAR",
                orden: 68,
                pregunta: 'La Torta de la Selva Negra es de la region de:',
                activo: true
            },
            {
                id: 69,
                lessonId: 16, // 4. Alemania - Prueba 4 - Pregunta 3
                tipo: "COMPLETAR",
                orden: 69,
                pregunta: 'El Hamburger Aalsuppe es una sopa de:',
                activo: true
            },
            {
                id: 70,
                lessonId: 16, // 4. Alemania - Prueba 4 - Pregunta 4
                tipo: "COMPLETAR",
                orden: 70,
                pregunta: 'Al Baumkuchen se le considera como el rey de:',
                activo: true
            },
            {
                id: 71,
                lessonId: 16, // 4. Alemania - Prueba 4 - Pregunta 5
                tipo: "COMPLETAR",
                orden: 71,
                pregunta: 'Thüringer Rostbratwurst es la salchicha tipica de Turingia:',
                activo: true
            },
            {
                id: 72,
                lessonId: 16, // 4. Alemania - Prueba 4 - Pregunta 6
                tipo: "COMPLETAR",
                orden: 72,
                pregunta: 'El Rheinischer Sauerbraten es asado a base de:',
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
                tipo: "COMPLETAR",
                orden: 73,
                pregunta: 'La comida austriaca tiene gran influencia del país:',
                activo: true
            },
            {
                id: 74,
                lessonId: 17, // 5. Austria - Actividad 13 - Pregunta 2
                tipo: "COMPLETAR",
                orden: 74,
                pregunta: 'El wienerschitzel es ____ que se sirve con ensalada de patatas frias',
                activo: true
            },
            {
                id: 75,
                lessonId: 17, // 5. Austria - Actividad 13 - Pregunta 3
                tipo: "COMPLETAR",
                orden: 75,
                pregunta: 'La schittlauchsauce es una salsa a base de:',
                activo: true
            },
            {
                id: 76,
                lessonId: 17, // 5. Austria - Actividad 13 - Pregunta 4
                tipo: "COMPLETAR",
                orden: 76,
                pregunta: 'Los palatshinken son:',
                activo: true
            },

            // Actividad 14
            {
                id: 77,
                lessonId: 18, // 5. Austria - Actividad 14 - Pregunta 1
                tipo: "COMPLETAR",
                orden: 77,
                pregunta: 'El punto citrico del Wiener Schnitzel se lo da el:',
                activo: true
            },
            {
                id: 78,
                lessonId: 18, // 5. Austria - Actividad 14 - Pregunta 2
                tipo: "COMPLETAR",
                orden: 78,
                pregunta: 'El Kärntner Kassnudeln son:',
                activo: true
            },
            {
                id: 79,
                lessonId: 18, // 5. Austria - Actividad 14 - Pregunta 3
                tipo: "COMPLETAR",
                orden: 79,
                pregunta: 'El ingrediente principal del Tiroler Knödel (Albondigas tirolesa) es:',
                activo: true
            },
            {
                id: 80,
                lessonId: 18, // 5. Austria - Actividad 14 - Pregunta 4
                tipo: "COMPLETAR",
                orden: 80,
                pregunta: 'El Griesnockersuppe es:',
                activo: true
            },

            // Actividad 15
            {
                id: 81,
                lessonId: 19, // 5. Austria - Actividad 15 - Pregunta 1
                tipo: "COMPLETAR",
                orden: 81,
                pregunta: 'Schnittlauchsauce es una salsa de:',
                activo: true
            },
            {
                id: 82,
                lessonId: 19, // 5. Austria - Actividad 15 - Pregunta 2
                tipo: "COMPLETAR",
                orden: 82,
                pregunta: 'El relleno del Kärnter Reindling es:',
                activo: true
            },
            {
                id: 83,
                lessonId: 19, // 5. Austria - Actividad 15 - Pregunta 3
                tipo: "COMPLETAR",
                orden: 83,
                pregunta: 'El Strudel es una tarta rellena con:',
                activo: true
            },
            {
                id: 84,
                lessonId: 19, // 5. Austria - Actividad 15 - Pregunta 4
                tipo: "COMPLETAR",
                orden: 84,
                pregunta: 'El Marillenködel son Bolitas dulces de:',
                activo: true
            },

            // Prueba 5
            {
                id: 85,
                lessonId: 20, // 5. Austria - Prueba 5 - Pregunta 1
                tipo: "COMPLETAR",
                orden: 85,
                pregunta: 'La comida austriaca tiene gran influencia del país:',
                activo: true
            },
            {
                id: 86,
                lessonId: 20, // 5. Austria - Prueba 5 - Pregunta 2
                tipo: "COMPLETAR",
                orden: 86,
                pregunta: 'El wienerschitzel es ____ que se sirve con ensalada de patatas frías',
                activo: true
            },
            {
                id: 87,
                lessonId: 20, // 5. Austria - Prueba 5 - Pregunta 3
                tipo: "COMPLETAR",
                orden: 87,
                pregunta: 'El punto citrico del Wiener Schnitzel se lo da el:',
                activo: true
            },
            {
                id: 88,
                lessonId: 20, // 5. Austria - Prueba 5 - Pregunta 4
                tipo: "COMPLETAR",
                orden: 88,
                pregunta: 'El Griesnockersuppe es:',
                activo: true
            },
            {
                id: 89,
                lessonId: 20, // 5. Austria - Prueba 5 - Pregunta 5
                tipo: "COMPLETAR",
                orden: 89,
                pregunta: 'La schittlauchsauce es una salsa a base de:',
                activo: true
            },
            {
                id: 90,
                lessonId: 20, // 5. Austria - Prueba 5 - Pregunta 6
                tipo: "COMPLETAR",
                orden: 90,
                pregunta: 'El Strudel es una tarta rellena con:',
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
                tipo: "COMPLETAR",
                orden: 91,
                pregunta: 'La cocina griega constituye la esencia de la gastronomia ________ al fusionar tradiciones culinarias,',
                activo: true
            },
            {
                id: 92,
                lessonId: 21, // 6. Grecia - Actividad 16 - Pregunta 2
                tipo: "COMPLETAR",
                orden: 92,
                pregunta: 'En la comida griega abundan las cremas a base de:',
                activo: true
            },
            {
                id: 93,
                lessonId: 21, // 6. Grecia - Actividad 16 - Pregunta 3
                tipo: "COMPLETAR",
                orden: 93,
                pregunta: 'Los griegos prefieren los platos de:',
                activo: true
            },
            {
                id: 94,
                lessonId: 21, // 6. Grecia - Actividad 16 - Pregunta 4
                tipo: "COMPLETAR",
                orden: 94,
                pregunta: 'La Moussaka es un pastel de forma rectangular que combina:',
                activo: true
            },

            // Actividad 17
            {
                id: 95,
                lessonId: 22, // 6. Grecia - Actividad 17 - Pregunta 1
                tipo: "COMPLETAR",
                orden: 95,
                pregunta: 'La ensalada griega por antonomasia es:',
                activo: true
            },
            {
                id: 96,
                lessonId: 22, // 6. Grecia - Actividad 17 - Pregunta 2
                tipo: "COMPLETAR",
                orden: 96,
                pregunta: '¿Que ingrediente tiene Omnipresencia en las preparaciones griegas?',
                activo: true
            },
            {
                id: 97,
                lessonId: 22, // 6. Grecia - Actividad 17 - Pregunta 3
                tipo: "COMPLETAR",
                orden: 97,
                pregunta: '¿Cual es el queso tradicional de Grecia?',
                activo: true
            },
            {
                id: 98,
                lessonId: 22, // 6. Grecia - Actividad 17 - Pregunta 4
                tipo: "COMPLETAR",
                orden: 98,
                pregunta: '¿Que especia es muy usada en postres y salados?',
                activo: true
            },

            // Actividad 18
            {
                id: 99,
                lessonId: 23, // 6. Grecia - Actividad 18 - Pregunta 1
                tipo: "COMPLETAR",
                orden: 99,
                pregunta: 'Para el Tzatziki los ingredientes principales son:',
                activo: true
            },
            {
                id: 100,
                lessonId: 23, // 6. Grecia - Actividad 18 - Pregunta 2
                tipo: "COMPLETAR",
                orden: 100,
                pregunta: 'El MELITZANES PAPOUTSAKIA son:',
                activo: true
            },
            {
                id: 101,
                lessonId: 23, // 6. Grecia - Actividad 18 - Pregunta 3
                tipo: "COMPLETAR",
                orden: 101,
                pregunta: 'Las SPANAKÓPITA son:',
                activo: true
            },
            {
                id: 102,
                lessonId: 23, // 6. Grecia - Actividad 18 - Pregunta 4
                tipo: "COMPLETAR",
                orden: 102,
                pregunta: 'El Galaktoboureko es:',
                activo: true
            },

            // Prueba 6
            {
                id: 103,
                lessonId: 24, // 6. Grecia - Prueba 6 - Pregunta 1
                tipo: "COMPLETAR",
                orden: 103,
                pregunta: 'La cocina griega constituye la esencia de la gastronomia ________ al fusionar tradiciones culinarias',
                activo: true
            },
            {
                id: 104,
                lessonId: 24, // 6. Grecia - Prueba 6 - Pregunta 2
                tipo: "COMPLETAR",
                orden: 104,
                pregunta: 'La Moussaka es un pastel de forma rectangular que combina:',
                activo: true
            },
            {
                id: 105,
                lessonId: 24, // 6. Grecia - Prueba 6 - Pregunta 3
                tipo: "COMPLETAR",
                orden: 105,
                pregunta: '¿Que ingrediente tiene Omnipresencia en las preparaciones griegas?',
                activo: true
            },
            {
                id: 106,
                lessonId: 24, // 6. Grecia - Prueba 6 - Pregunta 4
                tipo: "COMPLETAR",
                orden: 106,
                pregunta: '¿Que especia es muy usada en postres y salados?',
                activo: true
            },
            {
                id: 107,
                lessonId: 24, // 6. Grecia - Prueba 6 - Pregunta 5
                tipo: "COMPLETAR",
                orden: 107,
                pregunta: 'Para el Tzatziki los ingredientes principales son:',
                activo: true
            },
            {
                id: 108,
                lessonId: 24, // 6. Grecia - Prueba 6 - Pregunta 6
                tipo: "COMPLETAR",
                orden: 108,
                pregunta: 'El MELITZANES PAPOUTSAKIA son:',
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
                tipo: "COMPLETAR",
                orden: 109,
                pregunta: '¿Que platos estan presentes en todas las cocinas de suiza?',
                activo: true
            },
            {
                id: 110,
                lessonId: 25, // 7. Suiza - Actividad 19 - Pregunta 2
                tipo: "COMPLETAR",
                orden: 110,
                pregunta: '¿Cual queso es producido en suiza?',
                activo: true
            },
            {
                id: 111,
                lessonId: 25, // 7. Suiza - Actividad 19 - Pregunta 3
                tipo: "COMPLETAR",
                orden: 111,
                pregunta: '¿Que vino es el de mayor consumo en Suiza?',
                activo: true
            },
            {
                id: 112,
                lessonId: 25, // 7. Suiza - Actividad 19 - Pregunta 4
                tipo: "COMPLETAR",
                orden: 112,
                pregunta: '¿Por que es reconocida Suiza gastronómicamente?',
                activo: true
            },

            // Actividad 20
            {
                id: 113,
                lessonId: 26, // 7. Suiza - Actividad 20 - Pregunta 1
                tipo: "COMPLETAR",
                orden: 113,
                pregunta: '¿Que caldo usa el kalbsgeschnetzeltes?',
                activo: true
            },
            {
                id: 114,
                lessonId: 26, // 7. Suiza - Actividad 20 - Pregunta 2
                tipo: "COMPLETAR",
                orden: 114,
                pregunta: 'El Kaese salad es una ensalda que se elabora con un embutido ¿Cual es?',
                activo: true
            },
            {
                id: 115,
                lessonId: 26, // 7. Suiza - Actividad 20 - Pregunta 3
                tipo: "COMPLETAR",
                orden: 115,
                pregunta: 'Le Papet Vaudois se compone por:',
                activo: true
            },
            {
                id: 116,
                lessonId: 26, // 7. Suiza - Actividad 20 - Pregunta 4
                tipo: "COMPLETAR",
                orden: 116,
                pregunta: '¿Que aceite se usa en el Kaese salad?',
                activo: true
            },

            // Actividad 21
            {
                id: 117,
                lessonId: 27, // 7. Suiza - Actividad 21 - Pregunta 1
                tipo: "COMPLETAR",
                orden: 117,
                pregunta: 'Para el Le Papet Vaudois se usa caldo de:',
                activo: true
            },
            {
                id: 118,
                lessonId: 27, // 7. Suiza - Actividad 21 - Pregunta 2
                tipo: "COMPLETAR",
                orden: 118,
                pregunta: '¿El Basler Läckerli utiliza un licor cual es?',
                activo: true
            },
            {
                id: 119,
                lessonId: 27, // 7. Suiza - Actividad 21 - Pregunta 3
                tipo: "COMPLETAR",
                orden: 119,
                pregunta: '¿Que tipo de queso usa el Älplermagronen?',
                activo: true
            },

            // Prueba 7
            {
                id: 120,
                lessonId: 28, // 7. Suiza - Actividad 21 - Pregunta 4
                tipo: "COMPLETAR",
                orden: 120,
                pregunta: '¿Cual queso es producido en suiza?',
                activo: true
            },

            {
                id: 121,
                lessonId: 28, // 7. Suiza - Prueba 7 - Pregunta 1
                tipo: "COMPLETAR",
                orden: 121,
                pregunta: '¿Por que es reconocida Suiza gastronómicamente?',
                activo: true
            },
            {
                id: 122,
                lessonId: 28, // 7. Suiza - Prueba 7 - Pregunta 2
                tipo: "COMPLETAR",
                orden: 122,
                pregunta: 'El Kaese salad es una ensalda que se elabora con un embutido ¿Cual es?',
                activo: true
            },
            {
                id: 123,
                lessonId: 28, // 7. Suiza - Prueba 7 - Pregunta 3
                tipo: "COMPLETAR",
                orden: 123,
                pregunta: '¿Que caldo usa el kalbsgeschnetzeltes?',
                activo: true
            },
            {
                id: 124,
                lessonId: 28, // 7. Suiza - Prueba 7 - Pregunta 4
                tipo: "COMPLETAR",
                orden: 124,
                pregunta: '¿Que tipo de queso usa el Älplermagronen?',
                activo: true
            },
            {
                id: 125,
                lessonId: 28, // 7. Suiza - Prueba 7 - Pregunta 5
                tipo: "COMPLETAR",
                orden: 125,
                pregunta: 'El Basler Läckerli utiliza un licor ¿Cual es?',
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
                tipo: "COMPLETAR",
                orden: 126,
                pregunta: '¿Que plato destaca en la cocina belga?',
                activo: true
            },
            // Actividad 22
            {
                id: 127,
                lessonId: 29, // 8. Bélgica - Actividad 22 - Pregunta 1
                tipo: "COMPLETAR",
                orden: 127,
                pregunta: 'El Waterzooi es una sopa cremosa de:',
                activo: true
            },
            {
                id: 128,
                lessonId: 29, // 8. Bélgica - Actividad 22 - Pregunta 2
                tipo: "COMPLETAR",
                orden: 128,
                pregunta: 'Las Carbonadas se elabora con:',
                activo: true
            },
            {
                id: 129,
                lessonId: 29, // 8. Bélgica - Actividad 22 - Pregunta 3
                tipo: "COMPLETAR",
                orden: 129,
                pregunta: 'EL Carbonades a la flamenca es:',
                activo: true
            },

            // Actividad 23
            {
                id: 130,
                lessonId: 30, // 8. Bélgica - Actividad 22 - Pregunta 4
                tipo: "COMPLETAR",
                orden: 130,
                pregunta: '¿Cuantas variades de bombones existen en Bélgica?',
                activo: true
            },

            {
                id: 131,
                lessonId: 30, // 8. Bélgica - Actividad 23 - Pregunta 1
                tipo: "COMPLETAR",
                orden: 131,
                pregunta: '¿Como es el Chocolate Belga?',
                activo: true
            },
            {
                id: 132,
                lessonId: 30, // 8. Bélgica - Actividad 23 - Pregunta 2
                tipo: "COMPLETAR",
                orden: 132,
                pregunta: '¿Cuantas variedades de Queso existen en Bélgica?',
                activo: true
            },
            {
                id: 133,
                lessonId: 30, // 8. Bélgica - Actividad 23 - Pregunta 3
                tipo: "COMPLETAR",
                orden: 133,
                pregunta: '¿Que sabor de cerveza puede ser único de Bélgica?',
                activo: true
            },
            // {
            //     id: 133,
            //     lessonId: 30, // 8. Bélgica - Actividad 23 - Pregunta 4
            //     tipo: "COMPLETAR",
            //     orden: 133,
            //     pregunta: '¿Que especia es muy usada en postres y salados?',
            //     activo: true
            // },

            // Actividad 24
            {
                id: 134,
                lessonId: 31, // 8. Bélgica - Actividad 24 - Pregunta 1
                tipo: "COMPLETAR",
                orden: 134,
                pregunta: 'El Vol au vent usa caldo de:',
                activo: true
            },
            {
                id: 135,
                lessonId: 31, // 8. Bélgica - Actividad 24 - Pregunta 2
                tipo: "COMPLETAR",
                orden: 135,
                pregunta: 'Para la Crema a la flamenca se usa:',
                activo: true
            },
            {
                id: 136,
                lessonId: 31, // 8. Bélgica - Actividad 24 - Pregunta 3
                tipo: "COMPLETAR",
                orden: 136,
                pregunta: 'Para la elaboracion de la Pasta Choux primero:',
                activo: true
            },
            // Prueba 8
            {
                id: 137,
                lessonId: 32, // 8. Bélgica - Actividad 24 - Pregunta 4
                tipo: "COMPLETAR",
                orden: 138,
                pregunta: '¿Que plato destaca en la cocina belga?',
                activo: true
            },

            {
                id: 138,
                lessonId: 32, // 8. Bélgica - Prueba 8 - Pregunta 1
                tipo: "COMPLETAR",
                orden: 139,
                pregunta: 'EL Carbonades a la flamenca es:',
                activo: true
            },
            {
                id: 139,
                lessonId: 32, // 8. Bélgica - Prueba 8 - Pregunta 2
                tipo: "COMPLETAR",
                orden: 140,
                pregunta: '¿Como es el Chocolate Belga?',
                activo: true
            },
            {
                id: 140,
                lessonId: 32, // 8. Bélgica - Prueba 8 - Pregunta 3
                tipo: "COMPLETAR",
                orden: 141,
                pregunta: '¿Cuantas variedades de Queso existen en Bélgica?',
                activo: true
            },
            {
                id: 141,
                lessonId: 32, // 8. Bélgica - Prueba 8 - Pregunta 4
                tipo: "COMPLETAR",
                orden: 142,
                pregunta: 'Para la Crema a la flamenca se usa:',
                activo: true
            },
            {
                id: 142,
                lessonId: 32, // 8. Bélgica - Prueba 8 - Pregunta 5
                tipo: "COMPLETAR",
                orden: 143,
                pregunta: 'Para la elaboracion de la Pasta Choux primero:',
                activo: true
            },
            // {
            //     id: 126,
            //     lessonId: 32, // 8. Bélgica - Prueba 8 - Pregunta 6
            //     tipo: "COMPLETAR",
            //     orden: 126,
            //     pregunta: 'El MELITZANES PAPOUTSAKIA son:',
            //     activo: true
            // },
            // Final uwu
        ]);

/**
 * ==================================================================================================================
 * Respuestas
 * ==================================================================================================================
 */
// Opciones
        // 1. Francia
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

        // 2. Italia
        await database.insert(schema.challengeOptions).values([



            /**
            * ----------------------------------------------------------------------------------------------------------
            * 2. Italia - Actividad 4
            * ----------------------------------------------------------------------------------------------------------
            */
               // Pregunta 1 - Actividad 4
                {
                    id: 73,
                    challengeId: 19, // ¿Por que se caracteriza la cocina italiana?
                    correcto: false,
                    text: "Vanguardista",
                    activo: true
                },
                {
                    id: 74,
                    challengeId: 19, // ¿Por que se caracteriza la cocina italiana?
                    correcto: true, // X
                    text: "Tradicional",
                    activo: true
                },
                {
                    id: 75,
                    challengeId: 19, // ¿Por que se caracteriza la cocina italiana?
                    correcto: false,
                    text: "Unica",
                    activo: true
                },
                {
                    id: 76,
                    challengeId: 19, // ¿Por que se caracteriza la cocina italiana?
                    correcto: false,
                    text: "Divertida",
                    activo: true
                },
    
    
    
    
               // Pregunta 2 - Actividad 4
                {
                    id: 77,
                    challengeId: 20, // La cocina italiana es rica por sus exquisitos platos únicos elaborador con?
                    correcto: false,
                    text: "Mucha proteínas",
                    activo: true
                },
                {
                    id: 78,
                    challengeId: 20, // La cocina italiana es rica por sus exquisitos platos únicos elaborador con?
                    correcto: false,
                    text: "Salsas",
                    activo: true
                },
                {
                    id: 79,
                    challengeId: 20, // La cocina italiana es rica por sus exquisitos platos únicos elaborador con?
                    correcto: true, // X
                    text: "Verduras y hortalizas",
                    activo: true
                },
                {
                    id: 80,
                    challengeId: 20, // La cocina italiana es rica por sus exquisitos platos únicos elaborador con?
                    correcto: false,
                    text: "Legumbres",
                    activo: true
                },
    
    
    
    
               // Pregunta 3 - Actividad 4
                {
                    id: 81,
                    challengeId: 21, // ¿Que es un Stracotto al Barolo?
                    correcto: false,
                    text: "Carne Mechada",
                    activo: true
                },
                {
                    id: 82,
                    challengeId: 21, // ¿Que es un Stracotto al Barolo?
                    correcto: true, // X
                    text: "Estofado al vino",
                    activo: true
                },
                {
                    id: 83,
                    challengeId: 21, // ¿Que es un Stracotto al Barolo?
                    correcto: false,
                    text: "Ossobuco",
                    activo: true
                },
                {
                    id: 84,
                    challengeId: 21, // ¿Que es un Stracotto al Barolo?
                    correcto: false,
                    text: "Milanesa de res",
                    activo: true
                },
    
    
    
    
    
                // Pregunta 4 - Actividad 4
                {
                    id: 85,
                    challengeId: 22, // ¿Cuales son los ingredientes del pesto?
                    correcto: true, // X
                    text: "Albahaca, Perejil, Mejorana, Aceite de oliva, Pecorino, Ajo y Piñones",
                    activo: true
                },
                {
                    id: 86,
                    challengeId: 22, // ¿Cuales son los ingredientes del pesto?
                    correcto: false,
                    text: "Albahaca, Perejil, Estragon, Aceite de oliva, Parmesano, Pimentos y Mani",
                    activo: true
                },
                {
                    id: 87,
                    challengeId: 22, // ¿Cuales son los ingredientes del pesto?
                    correcto: false,
                    text: "Albahaca, Perejil, Mejorana, Aceite de oliva, Mascarpone, Ajo y Piñones",
                    activo: true
                },
                {
                    id: 88,
                    challengeId: 22, // ¿Cuales son los ingredientes del pesto?
                    correcto: false,
                    text: "Albahaca, Cilantro, Eneldo, Aceite de oliva, Pecorino, Ajo y Piñones",
                    activo: true
                },
    
    
    
    
    
    
    
    
    
            /**
            *----------------------------------------------------------------------------------------------------------
            * 2. Italia - Actividad 5
            *----------------------------------------------------------------------------------------------------------
            */
            // Pregunta 1 - Actividad 5
            {
                id: 89,
                challengeId: 23, // ¿Cuales son los ingredientes básicos de la Focaccia al Rosmarino?
                correcto: false,
                text: "Perejil y ajo",
                activo: true
            },
            {
                id: 90,
                challengeId: 23, // ¿Cuales son los ingredientes básicos de la Focaccia al Rosmarino?
                correcto: false, 
                text: "Perejil y Mantequilla",
                activo: true
            },
            {
                id: 91,
                challengeId: 23, // ¿Cuales son los ingredientes básicos de la Focaccia al Rosmarino?
                correcto: true, // X
                text: "Romero y aceite de oliva",
                activo: true
            },
            {
                id: 92,
                challengeId: 23, // ¿Cuales son los ingredientes básicos de la Focaccia al Rosmarino?
                correcto: false,
                text: "tomates secos y aceite de oliva",
                activo: true
            },
    
    
    
    
           // Pregunta 2 - Actividad 5
            {
                id: 93,
                challengeId: 24, // Cuales quesos son de origen italiano?
                correcto: false,
                text: "Gouda y Manchego",
                activo: true
            },
            {
                id: 94,
                challengeId: 24, // Cuales quesos son de origen italiano?
                correcto: true, // X
                text: "Mascarpone y Ricotta",
                activo: true
            },
            {
                id: 95,
                challengeId: 24, // Cuales quesos son de origen italiano?
                correcto: false,
                text: "Mahón y Tetilla",
                activo: true
            },
            {
                id: 96,
                challengeId: 24, // Cuales quesos son de origen italiano?
                correcto: false,
                text: "Telita y Guayanes",
                activo: true
            },
    
    
    
    
           // Pregunta 3 - Actividad 5
            {
                id: 97,
                challengeId: 25, // ¿Que es un Calzone?
                correcto: false, 
                text: "Milanesa de pollo gratinada",
                activo: true
            },
            {
                id: 98,
                challengeId: 25, // ¿Que es un Calzone?
                correcto: false,
                text: "Pizza con muchos ingredientes",
                activo: true
            },
            {
                id: 99,
                challengeId: 25, // ¿Que es un Calzone?
                correcto: false,
                text: "Enrollado de carne",
                activo: true
            },
            {
                id: 100,
                challengeId: 25, // ¿Que es un Calzone?
                correcto: true, // X
                text: "Pizza cerrada sobre sus extremos",
                activo: true
            },
    
    
    
    
    
            // Pregunta 4 - Actividad 5
            {
                id: 101,
                challengeId: 26, // ¿Que se considera como primer plato en italia?
                correcto: false,
                text: "Pasta",
                activo: true
            },
            {
                id: 102,
                challengeId: 26, // ¿Que se considera como primer plato en italia?
                correcto: false,
                text: "Risotto",
                activo: true
            },
            {
                id: 103,
                challengeId: 26, // ¿Que se considera como primer plato en italia?
                correcto: false,
                text: "Polenta",
                activo: true
            },
            {
                id: 104,
                challengeId: 26, // ¿Que se considera como primer plato en italia?
                correcto: true, // X
                text: "Todas las anteriores",
                activo: true
            },
    
    
    
    
    
    
    
    
    
    
            /**
            * ----------------------------------------------------------------------------------------------------------
            * 2. Italia - Actividad 6
            * ----------------------------------------------------------------------------------------------------------
            */
            // Pregunta 1 - Actividad 6
            {
                id: 105,
                challengeId: 27, // El Affogato se compone de Helado de vainilla y?
                correcto: false,
                text: "Salsa Napolitana",
                activo: true
            },
            {
                id: 106,
                challengeId: 27, // El Affogato se compone de Helado de vainilla y?
                correcto: false,
                text: "Pizza",
                activo: true
            },
            {
                id: 107,
                challengeId: 27, // El Affogato se compone de Helado de vainilla y?
                correcto: true, // X
                text: "Café expreso",
                activo: true
            },
            {
                id: 108,
                challengeId: 27, // El Affogato se compone de Helado de vainilla y?
                correcto: false,
                text: "Cappuccino",
                activo: true
            },
    
    
    
    
           // Pregunta 2 - Actividad 6
            {
                id: 109,
                challengeId: 28, // La caponata es un preparado espeso y picante hecho a base de?
                correcto: true, // X
                text: "Berenjena",
                activo: true
            },
            {
                id: 110,
                challengeId: 28, // La caponata es un preparado espeso y picante hecho a base de?
                correcto: false,
                text: "Tomate",
                activo: true
            },
            {
                id: 111,
                challengeId: 28, // La caponata es un preparado espeso y picante hecho a base de?
                correcto: false, 
                text: "Cebolla",
                activo: true
            },
            {
                id: 112,
                challengeId: 28, // La caponata es un preparado espeso y picante hecho a base de?
                correcto: false,
                text: "Champiñones",
                activo: true
            },
    
    
    
    
           // Pregunta 3 - Actividad 6
            {
                id: 113,
                challengeId: 29, // Completa la insalata caprese, Queso mozzarella, tomare cherry y?
                correcto: false,
                text: "Perejil",
                activo: true
            },
            {
                id: 114,
                challengeId: 29, // Completa la insalata caprese, Queso mozzarella, tomare cherry y?
                correcto: true, // X 
                text: "Albahaca",
                activo: true
            },
            {
                id: 115,
                challengeId: 29, // Completa la insalata caprese, Queso mozzarella, tomare cherry y?
                correcto: false,
                text: "Pesto",
                activo: true
            },
            {
                id: 116,
                challengeId: 29, // Completa la insalata caprese, Queso mozzarella, tomare cherry y?
                correcto: false,
                text: "Estragon",
                activo: true
            },
    
    
    
    
    
            // Pregunta 4 - Actividad 6
            {
                id: 117,
                challengeId: 30, // En la Lengua de res a la Toscana, ¿Cual es el ingrediente característico?
                correcto: false, 
                text: "Romero",
                activo: true
            },
            {
                id: 118,
                challengeId: 30, // En la Lengua de res a la Toscana, ¿Cual es el ingrediente característico?
                correcto: false,
                text: "Aceite de oliva",
                activo: true
            },
            {
                id: 119,
                challengeId: 30, // En la Lengua de res a la Toscana, ¿Cual es el ingrediente característico?
                correcto: false,
                text: "Lengua de res",
                activo: true
            },
            {
                id: 120,
                challengeId: 30, // En la Lengua de res a la Toscana, ¿Cual es el ingrediente característico?
                correcto: true, // X
                text: "Chocolate 70% de cacao",
                activo: true
            },
    
    
    
    
    
    
    
    
    
    
            /**
            * ----------------------------------------------------------------------------------------------------------
            * 2. Italia - Prueba 2
            * ----------------------------------------------------------------------------------------------------------
            */
            // Pregunta 1 - Prueba 2
            {
                id: 121,
                challengeId: 31, // Por que se caracteriza la cocina italiana?
                correcto: false,
                text: "Vanguardista",
                activo: true
            },
            {
                id: 122,
                challengeId: 31, // Por que se caracteriza la cocina italiana?
                correcto: true, // X 
                text: "Tradicional",
                activo: true
            },
            {
                id: 123,
                challengeId: 31, // Por que se caracteriza la cocina italiana?
                correcto: false,
                text: "Unica",
                activo: true
            },
            {
                id: 124,
                challengeId: 31, // Por que se caracteriza la cocina italiana?
                correcto: false,
                text: "Divertida",
                activo: true
            },
    
    
    
    
           // Pregunta 2 - Prueba 2
           {
                id: 125,
                challengeId: 32, // Que es un Stracotto al Barolo?
                correcto: false, 
                text: "Carne Mechada",
                activo: true
            },
            {
                id: 126,
                challengeId: 32, // Que es un Stracotto al Barolo?
                correcto: true, // X
                text: "Estofado al vino",
                activo: true
            },
            {
                id: 127,
                challengeId: 32, // Que es un Stracotto al Barolo?
                correcto: false,
                text: "Ossobuco",
                activo: true
            },
            {
                id: 128,
                challengeId: 32, // Que es un Stracotto al Barolo?
                correcto: false,
                text: "Milanesa de res",
                activo: true
            },
    
    
    
    
           // Pregunta 3 - Prueba 2
           {
                id: 129,
                challengeId: 33, // Que se considera como primer plato en italia?
                correcto: false,
                text: "Pasta",
                activo: true
            },
            {
                id: 130,
                challengeId: 33, // Que se considera como primer plato en italia?
                correcto: false,
                text: "Risotto",
                activo: true
            },
            {
                id: 131,
                challengeId: 33, // Que se considera como primer plato en italia?
                correcto: false,
                text: "Polenta",
                activo: true
            },
            {
                id: 132,
                challengeId: 33, // Que se considera como primer plato en italia?
                correcto: true, // X
                text: "Todas las anteriores",
                activo: true
            },
    
    
    
    
    
    
            // Pregunta 4 - Prueba 2
            {
                id: 133,
                challengeId: 34, // Cuales son los ingredientes básicos de la Focaccia al Rosmarino?
                correcto: false,
                text: "Perejil y ajo",
                activo: true
            },
            {
                id: 134,
                challengeId: 34, // Cuales son los ingredientes básicos de la Focaccia al Rosmarino?
                correcto: false,
                text: "Perejil y Mantequilla",
                activo: true
            },
            {
                id: 135,
                challengeId: 34, // Cuales son los ingredientes básicos de la Focaccia al Rosmarino?
                correcto: true, // X
                text: "Romero y aceite de oliva",
                activo: true
            },
            {
                id: 136,
                challengeId: 34, // Cuales son los ingredientes básicos de la Focaccia al Rosmarino?
                correcto: false,
                text: "tomates secos y aceite de oliva",
                activo: true
            },
    
    
    
    
            // Pregunta 5 - Prueba 2
            {
                id: 137,
                challengeId: 35, // El Affogato se compone de Helado de vainilla y? 
                correcto: false, 
                text: "Salsa Napolitana",
                activo: true
            },
            {
                id: 138,
                challengeId: 35, // El Affogato se compone de Helado de vainilla y? 
                correcto: false,
                text: "Pizza",
                activo: true
            },
            {
                id: 139,
                challengeId: 35, // El Affogato se compone de Helado de vainilla y? 
                correcto: true, // X
                text: "Café expreso",
                activo: true
            },
            {
                id: 140,
                challengeId: 35, // El Affogato se compone de Helado de vainilla y? 
                correcto: false,
                text: "Cappuccino",
                activo: true
            },
    
    
    
            // Pregunta 6 - Prueba 2
            {
                id: 141,
                challengeId: 36, // En la Lengua de res a la Toscana, ¿Cual es el ingrediente característico?
                correcto: false,
                text: "Romero",
                activo: true
            },
            {
                id: 142,
                challengeId: 36, // En la Lengua de res a la Toscana, ¿Cual es el ingrediente característico?
                correcto: false, 
                text: "Aceite de oliva",
                activo: true
            },
            {
                id: 143,
                challengeId: 36, // En la Lengua de res a la Toscana, ¿Cual es el ingrediente característico?
                correcto: false,
                text: "Lengua de res",
                activo: true
            },
            {
                id: 144,
                challengeId: 36, // En la Lengua de res a la Toscana, ¿Cual es el ingrediente característico?
                correcto: true, // X
                text: "Chocolate 70% de cacao",
                activo: true
            },
    
    
    
    
    
                // Final UwU
        ]);
    
        // 3. España
        await database.insert(schema.challengeOptions).values([



                /**
                * ----------------------------------------------------------------------------------------------------------
                * 3. España - Actividad 7
                * ----------------------------------------------------------------------------------------------------------
                */
                   // Pregunta 1 - Actividad 7
                    {
                        id: 145,
                        challengeId: 37, // ¿De donde desprendían los coderos la grasa denominada ayla?
                        correcto: true, // X
                        text: "De sus colas",
                        activo: true
                    },
                    {
                        id: 146,
                        challengeId: 37, // ¿De donde desprendían los coderos la grasa denominada ayla?
                        correcto: false,
                        text: "De sus patas",
                        activo: true
                    },
                    {
                        id: 147,
                        challengeId: 37, // ¿De donde desprendían los coderos la grasa denominada ayla?
                        correcto: false,
                        text: "De su pecho",
                        activo: true
                    },
                    {
                        id: 148,
                        challengeId: 37, // ¿De donde desprendían los coderos la grasa denominada ayla?
                        correcto: false,
                        text: "De su lomo",
                        activo: true
                    },
        
        
        
        
                   // Pregunta 2 - Actividad 7
                    {
                        id: 149,
                        challengeId: 38, // ¿Que generó el "Efecto Adriá"?
                        correcto: false,
                        text: "Nuevos tipos de corte",
                        activo: true
                    },
                    {
                        id: 150,
                        challengeId: 38, // ¿Que generó el "Efecto Adriá"?
                        correcto: false,
                        text: "Nuevos tipos de cocciones",
                        activo: true
                    },
                    {
                        id: 151,
                        challengeId: 38, // ¿Que generó el "Efecto Adriá"?
                        correcto: true, // X
                        text: "Cocina vanguardista (Aires;humos;Espumas;Esferificaciones)",
                        activo: true
                    },
                    {
                        id: 152,
                        challengeId: 38, // ¿Que generó el "Efecto Adriá"?
                        correcto: false,
                        text: "Nuevos condimentos compuestos",
                        activo: true
                    },
        
        
        
        
                   // Pregunta 3 - Actividad 7
                    {
                        id: 153,
                        challengeId: 39, // Cual es uno de los ingredientes vistos en el "Nuevo mundo"?
                        correcto: false,
                        text: "Yuka",
                        activo: true
                    },
                    {
                        id: 154,
                        challengeId: 39, // Cual es uno de los ingredientes vistos en el "Nuevo mundo"?
                        correcto: false,
                        text: "Apio",
                        activo: true
                    },
                    {
                        id: 155,
                        challengeId: 39, // Cual es uno de los ingredientes vistos en el "Nuevo mundo"?
                        correcto: false,
                        text: "Calabaza",
                        activo: true
                    },
                    {
                        id: 156,
                        challengeId: 39, // Cual es uno de los ingredientes vistos en el "Nuevo mundo"?
                        correcto: true, // X
                        text: "Patatas (Papas)",
                        activo: true
                    },
        
        
        
        
        
                    // Pregunta 4 - Actividad 7
                    {
                        id: 157,
                        challengeId: 40, // Cual es uno de los ingredientes vistos en el "Nuevo mundo"?
                        correcto: false,
                        text: "Manzana",
                        activo: true
                    },
                    {
                        id: 158,
                        challengeId: 40, // Cual es uno de los ingredientes vistos en el "Nuevo mundo"?
                        correcto: true, // X
                        text: "Tomate",
                        activo: true
                    },
                    {
                        id: 159,
                        challengeId: 40, // Cual es uno de los ingredientes vistos en el "Nuevo mundo"?
                        correcto: false,
                        text: "Cebollas",
                        activo: true
                    },
                    {
                        id: 160,
                        challengeId: 40, // Cual es uno de los ingredientes vistos en el "Nuevo mundo"?
                        correcto: false,
                        text: "Pimientos",
                        activo: true
                    },
        
        
        
        
        
        
        
        
        
                /**
                *----------------------------------------------------------------------------------------------------------
                * 3. España - Actividad 8
                *----------------------------------------------------------------------------------------------------------
                */
                // Pregunta 1 - Actividad 8
                {
                    id: 161,
                    challengeId: 41, // ¿Que embutido es típicos de Cataluña?
                    correcto: true, // X
                    text: "Botifarra crua y botifarra cuites",
                    activo: true
                },
                {
                    id: 162,
                    challengeId: 41, // ¿Que embutido es típicos de Cataluña?
                    correcto: false, 
                    text: "Chorizos y Morcillas",
                    activo: true
                },
                {
                    id: 163,
                    challengeId: 41, // ¿Que embutido es típicos de Cataluña?
                    correcto: false,
                    text: "Salchichon y Morcillas",
                    activo: true
                },
                {
                    id: 164,
                    challengeId: 41, // ¿Que embutido es típicos de Cataluña?
                    correcto: false,
                    text: "Salami y Salchichon",
                    activo: true
                },
        
        
        
        
               // Pregunta 2 - Actividad 8
                {
                    id: 165,
                    challengeId: 42, // ¿Cual es el secreto de la mayoría de guisos catalanes?
                    correcto: false,
                    text: "Botifarras",
                    activo: true
                },
                {
                    id: 166,
                    challengeId: 42, // ¿Cual es el secreto de la mayoría de guisos catalanes?
                    correcto: false,
                    text: "Jamon Serrano",
                    activo: true
                },
                {
                    id: 167,
                    challengeId: 42, // ¿Cual es el secreto de la mayoría de guisos catalanes?
                    correcto: true, // X
                    text: "Picada Catalana",
                    activo: true
                },
                {
                    id: 168,
                    challengeId: 42, // ¿Cual es el secreto de la mayoría de guisos catalanes?
                    correcto: false,
                    text: "Queso Manchego",
                    activo: true
                },
        
        
        
        
               // Pregunta 3 - Actividad 8
                {
                    id: 169,
                    challengeId: 43, // ¿Porqué no se usan los morteros de maderas?
                    correcto: false, 
                    text: "Por no machacar bien",
                    activo: true
                },
                {
                    id: 170,
                    challengeId: 43, // ¿Porqué no se usan los morteros de maderas?
                    correcto: false,
                    text: "Por dejar todo en la base",
                    activo: true
                },
                {
                    id: 171,
                    challengeId: 43, // ¿Porqué no se usan los morteros de maderas?
                    correcto: false,
                    text: "Porque no es digno",
                    activo: true
                },
                {
                    id: 172,
                    challengeId: 43, // ¿Porqué no se usan los morteros de maderas?
                    correcto: true, // X
                    text: "Porque son anti-higiénicos y blandos",
                    activo: true
                },
        
        
        
        
        
                // Pregunta 4 - Actividad 8
                {
                    id: 173,
                    challengeId: 44, // Que ingrediente tuvo más importancia segunda mitad del siglo XVII, y durante todo el siglo XVIII?
                    correcto: false,
                    text: "Patatas",
                    activo: true
                },
                {
                    id: 174,
                    challengeId: 44, // Que ingrediente tuvo más importancia segunda mitad del siglo XVII, y durante todo el siglo XVIII?
                    correcto: true, // X
                    text: "Chocolate",
                    activo: true
                },
                {
                    id: 175,
                    challengeId: 44, // Que ingrediente tuvo más importancia segunda mitad del siglo XVII, y durante todo el siglo XVIII?
                    correcto: false,
                    text: "Tomate",
                    activo: true
                },
                {
                    id: 176,
                    challengeId: 44, // Que ingrediente tuvo más importancia segunda mitad del siglo XVII, y durante todo el siglo XVIII?
                    correcto: false,
                    text: "Atún",
                    activo: true
                },
        
        
        
        
        
        
        
        
        
        
                /**
                * ----------------------------------------------------------------------------------------------------------
                * 3. España - Actividad 9
                * ----------------------------------------------------------------------------------------------------------
                */
                // Pregunta 1 - Actividad 9
                {
                    id: 177,
                    challengeId: 45, // Que concepto se quiso llevar para el siglo XXI?
                    correcto: false,
                    text: "Hostelería moderna",
                    activo: true
                },
                {
                    id: 178,
                    challengeId: 45, // Que concepto se quiso llevar para el siglo XXI?
                    correcto: false,
                    text: "Restaurants",
                    activo: true
                },
                {
                    id: 179,
                    challengeId: 45, // Que concepto se quiso llevar para el siglo XXI?
                    correcto: false,
                    text: "Bares",
                    activo: true
                },
                {
                    id: 180,
                    challengeId: 45, // Que concepto se quiso llevar para el siglo XXI?
                    correcto: true, // X
                    text: "Gastrobar",
                    activo: true
                },
        
        
        
        
               // Pregunta 2 - Actividad 9
                {
                    id: 181,
                    challengeId: 46, // Que concepto surgen en la nueva cocina luego del "Efecto Adriá"?
                    correcto: false,
                    text: "Cocciones prolongadas",
                    activo: true
                },
                {
                    id: 182,
                    challengeId: 46, // Que concepto surgen en la nueva cocina luego del "Efecto Adriá"?
                    correcto: false,
                    text: "Escalfado de alimentos",
                    activo: true
                },
                {
                    id: 183,
                    challengeId: 46, // Que concepto surgen en la nueva cocina luego del "Efecto Adriá"?
                    correcto: false, 
                    text: "Huevos Pochados",
                    activo: true
                },
                {
                    id: 184,
                    challengeId: 46, // Que concepto surgen en la nueva cocina luego del "Efecto Adriá"?
                    correcto: true, // X
                    text: "Deconstructivismo de platos",
                    activo: true
                },
        
        
        
        
               // Pregunta 3 - Actividad 9
                {
                    id: 185,
                    challengeId: 47, // La INTXAURSALSA es una crema a base de?
                    correcto: false,
                    text: "Maní",
                    activo: true
                },
                {
                    id: 186,
                    challengeId: 47, // La INTXAURSALSA es una crema a base de?
                    correcto: false, 
                    text: "Pistacho",
                    activo: true
                },
                {
                    id: 187,
                    challengeId: 47, // La INTXAURSALSA es una crema a base de?
                    correcto: true, // X
                    text: "Nueces",
                    activo: true
                },
                {
                    id: 188,
                    challengeId: 47, // La INTXAURSALSA es una crema a base de?
                    correcto: false,
                    text: "Merey",
                    activo: true
                },
        
        
        
        
        
                // Pregunta 4 - Actividad 9
                {
                    id: 189,
                    challengeId: 48, // ¿Que marisco se una en el ROMESCO DE MARISCOS?
                    correcto: true, // X 
                    text: "Camarones o langostinos",
                    activo: true
                },
                {
                    id: 190,
                    challengeId: 48, // ¿Que marisco se una en el ROMESCO DE MARISCOS?
                    correcto: false,
                    text: "Calamares",
                    activo: true
                },
                {
                    id: 191,
                    challengeId: 48, // ¿Que marisco se una en el ROMESCO DE MARISCOS?
                    correcto: false,
                    text: "Pulpo",
                    activo: true
                },
                {
                    id: 192,
                    challengeId: 48, // ¿Que marisco se una en el ROMESCO DE MARISCOS?
                    correcto: false,
                    text: "Almejas",
                    activo: true
                },
        
        
        
        
        
        
        
        
        
        
                /**
                * ----------------------------------------------------------------------------------------------------------
                * 3. España - Prueba 3
                * ----------------------------------------------------------------------------------------------------------
                */
                // Pregunta 1 - Prueba 3
                {
                    id: 193,
                    challengeId: 49, // ¿De donde desprendían los coderos la grasa denominada ayla? 
                    correcto: true, // X
                    text: "De sus colas",
                    activo: true
                },
                {
                    id: 194,
                    challengeId: 49, // ¿De donde desprendían los coderos la grasa denominada ayla? 
                    correcto: false, 
                    text: "De sus patas",
                    activo: true
                },
                {
                    id: 195,
                    challengeId: 49, // ¿De donde desprendían los coderos la grasa denominada ayla? 
                    correcto: false,
                    text: "De su pecho",
                    activo: true
                },
                {
                    id: 196,
                    challengeId: 49, // ¿De donde desprendían los coderos la grasa denominada ayla? 
                    correcto: false,
                    text: "De su lomo",
                    activo: true
                },
        
        
        
        
               // Pregunta 2 - Prueba 3
               {
                    id: 197,
                    challengeId: 50, // Cual es uno de los ingredientes vistos en el "Nuevo mundo"? 
                    correcto: false, 
                    text: "Yuka",
                    activo: true
                },
                {
                    id: 198,
                    challengeId: 50, // Cual es uno de los ingredientes vistos en el "Nuevo mundo"? 
                    correcto: false,
                    text: "Apio",
                    activo: true
                },
                {
                    id: 199,
                    challengeId: 50, // Cual es uno de los ingredientes vistos en el "Nuevo mundo"? 
                    correcto: false,
                    text: "Calabaza",
                    activo: true
                },
                {
                    id: 200,
                    challengeId: 50, // Cual es uno de los ingredientes vistos en el "Nuevo mundo"? 
                    correcto: true, // X
                    text: "Patatas (Papas)",
                    activo: true
                },
        
        
        
        
               // Pregunta 3 - Prueba 3
               {
                    id: 201,
                    challengeId: 51, // ¿Cual es el secreto de la mayoría de guisos catalanes? 
                    correcto: false,
                    text: "Botifarras",
                    activo: true
                },
                {
                    id: 202,
                    challengeId: 51, // ¿Cual es el secreto de la mayoría de guisos catalanes? 
                    correcto: false,
                    text: "Jamon Serrano",
                    activo: true
                },
                {
                    id: 203,
                    challengeId: 51, // ¿Cual es el secreto de la mayoría de guisos catalanes? 
                    correcto: true, // X
                    text: "Picada Catalana",
                    activo: true
                },
                {
                    id: 204,
                    challengeId: 51, // ¿Cual es el secreto de la mayoría de guisos catalanes? 
                    correcto: false,
                    text: "Queso Manchego",
                    activo: true
                },
        
        
        
        
        
        
                // Pregunta 4 - Prueba 3
                {
                    id: 205,
                    challengeId: 52, // ¿Que embutido es típicos de Cataluña? 
                    correcto: true, // X
                    text: "Botifarra crua y botifarra cuites",
                    activo: true
                },
                {
                    id: 206,
                    challengeId: 52, // ¿Que embutido es típicos de Cataluña? 
                    correcto: false,
                    text: "Chorizos y Morcillas",
                    activo: true
                },
                {
                    id: 207,
                    challengeId: 52, // ¿Que embutido es típicos de Cataluña? 
                    correcto: false,
                    text: "Salchichon y Morcillas",
                    activo: true
                },
                {
                    id: 208,
                    challengeId: 52, // ¿Que embutido es típicos de Cataluña? 
                    correcto: false,
                    text: "Salami y Salchichon",
                    activo: true
                },
        
        
        
        
                // Pregunta 5 - Prueba 3
                {
                    id: 209,
                    challengeId: 53, // ¿Que marisco se una en el ROMESCO DE MARISCOS? 
                    correcto: true, // X 
                    text: "Camarones o langostinos",
                    activo: true
                },
                {
                    id: 210,
                    challengeId: 53, // ¿Que marisco se una en el ROMESCO DE MARISCOS? 
                    correcto: false,
                    text: "Calamares",
                    activo: true
                },
                {
                    id: 211,
                    challengeId: 53, // ¿Que marisco se una en el ROMESCO DE MARISCOS? 
                    correcto: false,
                    text: "Pulpo",
                    activo: true
                },
                {
                    id: 212,
                    challengeId: 53, // ¿Que marisco se una en el ROMESCO DE MARISCOS? 
                    correcto: false,
                    text: "Almejas",
                    activo: true
                },
        
        
        
                // Pregunta 6 - Prueba 3
                {
                    id: 213,
                    challengeId: 54, // La INTXAURSALSA es una crema a base de? 
                    correcto: false,
                    text: "Maní",
                    activo: true
                },
                {
                    id: 214,
                    challengeId: 54, // La INTXAURSALSA es una crema a base de? 
                    correcto: false, 
                    text: "Pistacho",
                    activo: true
                },
                {
                    id: 215,
                    challengeId: 54, // La INTXAURSALSA es una crema a base de? 
                    correcto: true, // X
                    text: "Nueces",
                    activo: true
                },
                {
                    id: 216,
                    challengeId: 54, // La INTXAURSALSA es una crema a base de? 
                    correcto: false,
                    text: "Merey",
                    activo: true
                },
        
        
        
        
        
                    // Final UwU
        ]);
        
        // 4. Alemania
        await database.insert(schema.challengeOptions).values([


                /**
                * ----------------------------------------------------------------------------------------------------------
                * 4. Alemania - Actividad 10
                * ----------------------------------------------------------------------------------------------------------
                */
                   // Pregunta 1 - Actividad 10
                    {
                        id: 217,
                        challengeId: 55, // Por qué se caracteriza la comida Alemana?
                        correcto: false,
                        text: "Notas cítricas",
                        activo: true
                    },
                    {
                        id: 218,
                        challengeId: 55, // Por qué se caracteriza la comida Alemana?
                        correcto: false,
                        text: "Cerveza con todo",
                        activo: true
                    },
                    {
                        id: 219,
                        challengeId: 55, // Por qué se caracteriza la comida Alemana?
                        correcto: true, // X
                        text: "Abundantes raciones",
                        activo: true
                    },
                    {
                        id: 220,
                        challengeId: 55, // Por qué se caracteriza la comida Alemana?
                        correcto: false,
                        text: "Variedad de dulces",
                        activo: true
                    },
        
        
        
        
                   // Pregunta 2 - Actividad 10
                    {
                        id: 221,
                        challengeId: 56, // Como se le llaman a las Salchicas en Alemania?
                        correcto: true, // X
                        text: "Wurts",
                        activo: true
                    },
                    {
                        id: 222,
                        challengeId: 56, // Como se le llaman a las Salchicas en Alemania?
                        correcto: false,
                        text: "Sausage",
                        activo: true
                    },
                    {
                        id: 223,
                        challengeId: 56, // Como se le llaman a las Salchicas en Alemania?
                        correcto: false,
                        text: "Salsiccia",
                        activo: true
                    },
                    {
                        id: 224,
                        challengeId: 56, // Como se le llaman a las Salchicas en Alemania?
                        correcto: false,
                        text: "ispíní",
                        activo: true
                    },
        
        
        
        
                   // Pregunta 3 - Actividad 10
                    {
                        id: 225,
                        challengeId: 57, // El Flammkuchen es un plato que se asemeja a?
                        correcto: false,
                        text: "Una Dona",
                        activo: true
                    },
                    {
                        id: 226,
                        challengeId: 57, // El Flammkuchen es un plato que se asemeja a?
                        correcto: false,
                        text: "Un Pretzel",
                        activo: true
                    },
                    {
                        id: 227,
                        challengeId: 57, // El Flammkuchen es un plato que se asemeja a?
                        correcto: false,
                        text: "Un Pan",
                        activo: true
                    },
                    {
                        id: 228,
                        challengeId: 57, // El Flammkuchen es un plato que se asemeja a?
                        correcto: true, // true
                        text: "Una Pizza",
                        activo: true
                    },
        
        
        
        
        
                    // Pregunta 4 - Actividad 10
                    {
                        id: 229,
                        challengeId: 58, // La Torta de la Selva Negra es de la region de
                        correcto: false,
                        text: "Frankfurt",
                        activo: true
                    },
                    {
                        id: 230,
                        challengeId: 58, // La Torta de la Selva Negra es de la region de
                        correcto: true, // X
                        text: "Baden",
                        activo: true
                    },
                    {
                        id: 231,
                        challengeId: 58, // La Torta de la Selva Negra es de la region de
                        correcto: false,
                        text: "Berlin",
                        activo: true
                    },
                    {
                        id: 232,
                        challengeId: 58, // La Torta de la Selva Negra es de la region de
                        correcto: false,
                        text: "Hamburgo",
                        activo: true
                    },
        
        
        
        
        
        
        
        
        
                /**
                *----------------------------------------------------------------------------------------------------------
                * 4. Alemania - Actividad 11
                *----------------------------------------------------------------------------------------------------------
                */
                // Pregunta 1 - Actividad 11
                {
                    id: 233,
                    challengeId: 59, // Cual es la proteina principal del Lübecker National:
                    correcto: false,
                    text: "Carne",
                    activo: true
                },
                {
                    id: 234,
                    challengeId: 59, // Cual es la proteina principal del Lübecker National:
                    correcto: false, 
                    text: "Pollo",
                    activo: true
                },
                {
                    id: 235,
                    challengeId: 59, // Cual es la proteina principal del Lübecker National:
                    correcto: false,
                    text: "Pato",
                    activo: true
                },
                {
                    id: 236,
                    challengeId: 59, // Cual es la proteina principal del Lübecker National:
                    correcto: true, // X
                    text: "Cerdo",
                    activo: true
                },
        
        
        
        
               // Pregunta 2 - Actividad 11
                {
                    id: 237,
                    challengeId: 60, // El Hamburger Aalsuppe es una sopa de ?
                    correcto: false,
                    text: "Res",
                    activo: true
                },
                {
                    id: 238,
                    challengeId: 60, // El Hamburger Aalsuppe es una sopa de ?
                    correcto: false,
                    text: "Pollo",
                    activo: true
                },
                {
                    id: 239,
                    challengeId: 60, // El Hamburger Aalsuppe es una sopa de ?
                    correcto: false,
                    text: "Pescado",
                    activo: true
                },
                {
                    id: 240,
                    challengeId: 60, // El Hamburger Aalsuppe es una sopa de ?
                    correcto: true, // X
                    text: "Anguila",
                    activo: true
                },
        
        
        
        
               // Pregunta 3 - Actividad 11
                {
                    id: 241,
                    challengeId: 61, // El Panhas es un derivado de la matanza del cerdo que se parece a
                    correcto: true, // X 
                    text: "Morcilla",
                    activo: true
                },
                {
                    id: 242,
                    challengeId: 61, // El Panhas es un derivado de la matanza del cerdo que se parece a
                    correcto: false,
                    text: "Chorizo",
                    activo: true
                },
                {
                    id: 243,
                    challengeId: 61, // El Panhas es un derivado de la matanza del cerdo que se parece a
                    correcto: false,
                    text: "Salami",
                    activo: true
                },
                {
                    id: 244,
                    challengeId: 61, // El Panhas es un derivado de la matanza del cerdo que se parece a
                    correcto: false,
                    text: "Lengua",
                    activo: true
                },
        
        
        
        
        
                // Pregunta 4 - Actividad 11
                {
                    id: 245,
                    challengeId: 62, // Al Baumkuchen se le considera como el rey de?
                    correcto: false,
                    text: "Los panes",
                    activo: true
                },
                {
                    id: 246,
                    challengeId: 62, // Al Baumkuchen se le considera como el rey de?
                    correcto: false,
                    text: "Los Pratzel",
                    activo: true
                },
                {
                    id: 247,
                    challengeId: 62, // Al Baumkuchen se le considera como el rey de?
                    correcto: true, // X
                    text: "Las tartas",
                    activo: true
                },
                {
                    id: 248,
                    challengeId: 62, // Al Baumkuchen se le considera como el rey de?
                    correcto: false,
                    text: "Las Donas",
                    activo: true
                },
        
        
        
        
        
        
        
        
        
        
                /**
                * ----------------------------------------------------------------------------------------------------------
                * 4. Alemania - Actividad 12
                * ----------------------------------------------------------------------------------------------------------
                */
                // Pregunta 1 - Actividad 12
                {
                    id: 249,
                    challengeId: 63, // Thüringer Rostbratwurst es la salchicha tipica de Turingia
                    correcto: false,
                    text: "Mide de 10 a 15cm",
                    activo: true
                },
                {
                    id: 250,
                    challengeId: 63, // Thüringer Rostbratwurst es la salchicha tipica de Turingia
                    correcto: true, // X
                    text: "Mide de 15 a 20cm",
                    activo: true
                },
                {
                    id: 251,
                    challengeId: 63, // Thüringer Rostbratwurst es la salchicha tipica de Turingia
                    correcto: false,
                    text: "Mide de 20 a 25cm",
                    activo: true
                },
                {
                    id: 252,
                    challengeId: 63, // Thüringer Rostbratwurst es la salchicha tipica de Turingia
                    correcto: false,
                    text: "Mide de 30 a 35cm",
                    activo: true
                },
        
        
        
        
               // Pregunta 2 - Actividad 12
                {
                    id: 253,
                    challengeId: 64, // El Knödel son bollos de 
                    correcto: false,
                    text: "Harina de Maiz",
                    activo: true
                },
                {
                    id: 254,
                    challengeId: 64, // El Knödel son bollos de 
                    correcto: false,
                    text: "Harina de trigo",
                    activo: true
                },
                {
                    id: 255,
                    challengeId: 64, // El Knödel son bollos de 
                    correcto: false, 
                    text: "Cebolla",
                    activo: true
                },
                {
                    id: 256,
                    challengeId: 64, // El Knödel son bollos de 
                    correcto: true, // X
                    text: "Patatas",
                    activo: true
                },
        
        
        
                // true, // X
               // Pregunta 3 - Actividad 12
                {
                    id: 257,
                    challengeId: 65, // El Rheinischer Sauerbraten es asado a base de
                    correcto: true, // X
                    text: "Adobo con Verduras",
                    activo: true
                },
                {
                    id: 258,
                    challengeId: 65, // El Rheinischer Sauerbraten es asado a base de
                    correcto: false, 
                    text: "Res",
                    activo: true
                },
                {
                    id: 259,
                    challengeId: 65, // El Rheinischer Sauerbraten es asado a base de
                    correcto: false,
                    text: "Pollo",
                    activo: true
                },
                {
                    id: 260,
                    challengeId: 65, // El Rheinischer Sauerbraten es asado a base de
                    correcto: false,
                    text: "Cerdo",
                    activo: true
                },
        
        
        
        
        
                // Pregunta 4 - Actividad 12
                {
                    id: 261,
                    challengeId: 66, // El Rote Grütze se compone principalmente de 
                    correcto: false, 
                    text: "Chocolate",
                    activo: true
                },
                {
                    id: 262,
                    challengeId: 66, // El Rote Grütze se compone principalmente de 
                    correcto: false,
                    text: "Manzanas",
                    activo: true
                },
                {
                    id: 263,
                    challengeId: 66, // El Rote Grütze se compone principalmente de 
                    correcto: true, // X
                    text: "Frutos Rojos",
                    activo: true
                },
                {
                    id: 264,
                    challengeId: 66, // El Rote Grütze se compone principalmente de 
                    correcto: false,
                    text: "Helado",
                    activo: true
                },
        
        
        
        
        
        
        
        
        
        
                /**
                * ----------------------------------------------------------------------------------------------------------
                * 4. Alemania - Prueba 4
                * ----------------------------------------------------------------------------------------------------------
                */
                // Pregunta 1 - Prueba 4
                {
                    id: 265,
                    challengeId: 67, // El Flammkuchen es un plato que se asemeja a?
                    correcto: false,
                    text: "Una Dona",
                    activo: true
                },
                {
                    id: 266,
                    challengeId: 67, // El Flammkuchen es un plato que se asemeja a?
                    correcto: false, 
                    text: "Un Pretzel",
                    activo: true
                },
                {
                    id: 267,
                    challengeId: 67, // El Flammkuchen es un plato que se asemeja a?
                    correcto: false,
                    text: "Un Pan",
                    activo: true
                },
                {
                    id: 268,
                    challengeId: 67, // El Flammkuchen es un plato que se asemeja a?
                    correcto: true, // X
                    text: "Una Pizza",
                    activo: true
                },
        
        
        
        
               // Pregunta 2 - Prueba 4
               {
                    id: 269,
                    challengeId: 68, // La Torta de la Selva Negra es de la region de
                    correcto: false, 
                    text: "Frankfurt",
                    activo: true
                },
                {
                    id: 270,
                    challengeId: 68, // La Torta de la Selva Negra es de la region de
                    correcto: true, // X
                    text: "Baden",
                    activo: true
                },
                {
                    id: 271,
                    challengeId: 68, // La Torta de la Selva Negra es de la region de
                    correcto: false,
                    text: "Berlin",
                    activo: true
                },
                {
                    id: 272,
                    challengeId: 68, // La Torta de la Selva Negra es de la region de
                    correcto: false,
                    text: "Hamburgo",
                    activo: true
                },
        
        
        
        
               // Pregunta 3 - Prueba 4
               {
                    id: 273,
                    challengeId: 69, // El Hamburger Aalsuppe es una sopa de ? 
                    correcto: false,
                    text: "Res",
                    activo: true
                },
                {
                    id: 274,
                    challengeId: 69, // El Hamburger Aalsuppe es una sopa de ? 
                    correcto: false,
                    text: "Pollo",
                    activo: true
                },
                {
                    id: 275,
                    challengeId: 69, // El Hamburger Aalsuppe es una sopa de ? 
                    correcto: false,
                    text: "Pescado",
                    activo: true
                },
                {
                    id: 276,
                    challengeId: 69, // El Hamburger Aalsuppe es una sopa de ? 
                    correcto: true, // X
                    text: "Anguila",
                    activo: true
                },
        
        
        
        
        
        
                // Pregunta 4 - Prueba 4
                {
                    id: 277,
                    challengeId: 70, // Al Baumkuchen se le considera como el rey de?
                    correcto: false,
                    text: "Los panes",
                    activo: true
                },
                {
                    id: 278,
                    challengeId: 70, // Al Baumkuchen se le considera como el rey de?
                    correcto: false,
                    text: "Los Pratzel",
                    activo: true
                },
                {
                    id: 279,
                    challengeId: 70, // Al Baumkuchen se le considera como el rey de?
                    correcto: true, // X
                    text: "Las tartas",
                    activo: true
                },
                {
                    id: 280,
                    challengeId: 70, // Al Baumkuchen se le considera como el rey de?
                    correcto: false,
                    text: "Las Donas",
                    activo: true
                },
        
        
        
        
                // Pregunta 5 - Prueba 4
                {
                    id: 281,
                    challengeId: 71, // Thüringer Rostbratwurst es la salchicha tipica de Turingia 
                    correcto: false, 
                    text: "Mide de 10 a 15cm",
                    activo: true
                },
                {
                    id: 282,
                    challengeId: 71, // Thüringer Rostbratwurst es la salchicha tipica de Turingia 
                    correcto: true, // X
                    text: "Mide de 15 a 20cm",
                    activo: true
                },
                {
                    id: 283,
                    challengeId: 71, // Thüringer Rostbratwurst es la salchicha tipica de Turingia 
                    correcto: false,
                    text: "Mide de 20 a 25cm",
                    activo: true
                },
                {
                    id: 284,
                    challengeId: 71, // Thüringer Rostbratwurst es la salchicha tipica de Turingia 
                    correcto: false,
                    text: "Mide de 30 a 35cm",
                    activo: true
                },
        
        
        
                // Pregunta 6 - Prueba 4
                {
                    id: 285,
                    challengeId: 72, // El Rheinischer Sauerbraten es asado a base de 
                    correcto: true, // X
                    text: "Adobo con Verduras",
                    activo: true
                },
                {
                    id: 286,
                    challengeId: 72, // El Rheinischer Sauerbraten es asado a base de 
                    correcto: false, 
                    text: "Res",
                    activo: true
                },
                {
                    id: 287,
                    challengeId: 72, // El Rheinischer Sauerbraten es asado a base de 
                    correcto: false,
                    text: "Pollo",
                    activo: true
                },
                {
                    id: 288,
                    challengeId: 72, // El Rheinischer Sauerbraten es asado a base de 
                    correcto: false,
                    text: "Cerdo",
                    activo: true
                },
        
        
        
        
        
                    // Final UwU
        ]);

        // 5. Austria
        await database.insert(schema.challengeOptions).values([



                /**
                * ----------------------------------------------------------------------------------------------------------
                * 5. Austria - Actividad 13
                * ----------------------------------------------------------------------------------------------------------
                */
                   // Pregunta 1 - Actividad 13
                    {
                        id: 289,
                        challengeId: 73, // La comida austriaca tiene gran influencia de los paises
                        correcto: true, // X
                        text: "Astro-Húngaro",
                        activo: true
                    },
                    {
                        id: 290,
                        challengeId: 73, // La comida austriaca tiene gran influencia de los paises
                        correcto: false,
                        text: "Romano",
                        activo: true
                    },
                    {
                        id: 291,
                        challengeId: 73, // La comida austriaca tiene gran influencia de los paises
                        correcto: false,
                        text: "Checo",
                        activo: true
                    },
                    {
                        id: 292,
                        challengeId: 73, // La comida austriaca tiene gran influencia de los paises
                        correcto: false,
                        text: "Polaco",
                        activo: true
                    },
        
        
        
        
                   // Pregunta 2 - Actividad 13
                    {
                        id: 293,
                        challengeId: 74, // El wienerschitzel es ____ que se sirve con ensalada de patatas frias
                        correcto: false,
                        text: "Milanesa de gran tamaño de Pollo",
                        activo: true
                    },
                    {
                        id: 294,
                        challengeId: 74, // El wienerschitzel es ____ que se sirve con ensalada de patatas frias
                        correcto: true, // X
                        text: "Milanesa de gran tamaño de Res",
                        activo: true
                    },
                    {
                        id: 295,
                        challengeId: 74, // El wienerschitzel es ____ que se sirve con ensalada de patatas frias
                        correcto: false,
                        text: "Milanesa de gran tamaño de Cerdo",
                        activo: true
                    },
                    {
                        id: 296,
                        challengeId: 74, // El wienerschitzel es ____ que se sirve con ensalada de patatas frias
                        correcto: false,
                        text: "Milanesa de gran tamaño de Pato",
                        activo: true
                    },
        
        
        
        
                   // Pregunta 3 - Actividad 13
                    {
                        id: 297,
                        challengeId: 75, // La schittlauchsauce es una salsa a base de
                        correcto: false,
                        text: "Pepinos",
                        activo: true
                    },
                    {
                        id: 298,
                        challengeId: 75, // La schittlauchsauce es una salsa a base de
                        correcto: false,
                        text: "Tomates",
                        activo: true
                    },
                    {
                        id: 299,
                        challengeId: 75, // La schittlauchsauce es una salsa a base de
                        correcto: false,
                        text: "Rabanos",
                        activo: true
                    },
                    {
                        id: 300,
                        challengeId: 75, // La schittlauchsauce es una salsa a base de
                        correcto: true, // X
                        text: "Cebollas",
                        activo: true
                    },
        
        
        
        
        
                    // Pregunta 4 - Actividad 13
                    {
                        id: 301,
                        challengeId: 76, // Los palatshinken son
                        correcto: true, // X
                        text: "Tortitas rellenas de mermeladas",
                        activo: true
                    },
                    {
                        id: 302,
                        challengeId: 76, // Los palatshinken son
                        correcto: false,
                        text: "Pratzel dulces",
                        activo: true
                    },
                    {
                        id: 303,
                        challengeId: 76, // Los palatshinken son
                        correcto: false,
                        text: "Donas rellenas de mermeladas",
                        activo: true
                    },
                    {
                        id: 304,
                        challengeId: 76, // Los palatshinken son
                        correcto: false,
                        text: "Panes rellenos de chocolate",
                        activo: true
                    },
        
        
        
        
        
        
        
        
        
                /**
                *----------------------------------------------------------------------------------------------------------
                * 5. Austria - Actividad 14
                *----------------------------------------------------------------------------------------------------------
                */
                // Pregunta 1 - Actividad 14
                {
                    id: 305,
                    challengeId: 77, // El punto citrico del Wiener Schnitzel se lo da el
                    correcto: false,
                    text: "Vinagre",
                    activo: true
                },
                {
                    id: 306,
                    challengeId: 77, // El punto citrico del Wiener Schnitzel se lo da el
                    correcto: false, 
                    text: "Naranja",
                    activo: true
                },
                {
                    id: 307,
                    challengeId: 77, // El punto citrico del Wiener Schnitzel se lo da el
                    correcto: true, // X
                    text: "Limon",
                    activo: true
                },
                {
                    id: 308,
                    challengeId: 77, // El punto citrico del Wiener Schnitzel se lo da el
                    correcto: false,
                    text: "Toronja",
                    activo: true
                },
        
        
        
        
               // Pregunta 2 - Actividad 14
                {
                    id: 309,
                    challengeId: 78, // El Kärntner Kassnudeln son 
                    correcto: false,
                    text: "Sandwich rellenos",
                    activo: true
                },
                {
                    id: 310,
                    challengeId: 78, // El Kärntner Kassnudeln son 
                    correcto: true, // X
                    text: "Empanaditas",
                    activo: true
                },
                {
                    id: 311,
                    challengeId: 78, // El Kärntner Kassnudeln son 
                    correcto: false,
                    text: "Donas",
                    activo: true
                },
                {
                    id: 312,
                    challengeId: 78, // El Kärntner Kassnudeln son 
                    correcto: false,
                    text: "Pratzel",
                    activo: true
                },
        
        
        
        
               // Pregunta 3 - Actividad 14
                {
                    id: 313,
                    challengeId: 79, // El ingrediente principal del Tiroler Knödel (Albondigas tirolesa) es
                    correcto: false, 
                    text: "Res",
                    activo: true
                },
                {
                    id: 314,
                    challengeId: 79, // El ingrediente principal del Tiroler Knödel (Albondigas tirolesa) es
                    correcto: false,
                    text: "Pollo",
                    activo: true
                },
                {
                    id: 315,
                    challengeId: 79, // El ingrediente principal del Tiroler Knödel (Albondigas tirolesa) es
                    correcto: true, // X
                    text: "Tocino",
                    activo: true
                },
                {
                    id: 316,
                    challengeId: 79, // El ingrediente principal del Tiroler Knödel (Albondigas tirolesa) es
                    correcto: false,
                    text: "Cerdo",
                    activo: true
                },
        
        
        
        
        
                // Pregunta 4 - Actividad 14
                {
                    id: 317,
                    challengeId: 80, // El Griesnockersuppe es 
                    correcto: true, // X
                    text: "Caldo de carne con ñoqui de semola",
                    activo: true
                },
                {
                    id: 318,
                    challengeId: 80, // El Griesnockersuppe es 
                    correcto: false,
                    text: "Caldo de pollo con ñoqui de semola",
                    activo: true
                },
                {
                    id: 319,
                    challengeId: 80, // El Griesnockersuppe es 
                    correcto: false,
                    text: "Caldo de pescado con ñoqui de semola",
                    activo: true
                },
                {
                    id: 320,
                    challengeId: 80, // El Griesnockersuppe es 
                    correcto: false,
                    text: "Caldo de verduras con ñoqui de semola",
                    activo: true
                },
        
        
        
        
        
        
        
        
        
        
                /**
                * ----------------------------------------------------------------------------------------------------------
                * 5. Austria - Actividad 15
                * ----------------------------------------------------------------------------------------------------------
                */
                // Pregunta 1 - Actividad 15
                {
                    id: 321,
                    challengeId: 81, // Schnittlauchsauce es una salsa de
                    correcto: false,
                    text: "Tomate",
                    activo: true
                },
                {
                    id: 322,
                    challengeId: 81, // Schnittlauchsauce es una salsa de
                    correcto: true, // X
                    text: "Cebolla",
                    activo: true
                },
                {
                    id: 323,
                    challengeId: 81, // Schnittlauchsauce es una salsa de
                    correcto: false,
                    text: "Cebollin",
                    activo: true
                },
                {
                    id: 324,
                    challengeId: 81, // Schnittlauchsauce es una salsa de
                    correcto: false,
                    text: "Pimenton",
                    activo: true
                },
        
        
        
        
               // Pregunta 2 - Actividad 15
                {
                    id: 325,
                    challengeId: 82, // El relleno del Kärnter Reindling es
                    correcto: false,
                    text: "Mermelada de frutos rojos",
                    activo: true
                },
                {
                    id: 326,
                    challengeId: 82, // El relleno del Kärnter Reindling es
                    correcto: false,
                    text: "Mermelada de fresa",
                    activo: true
                },
                {
                    id: 327,
                    challengeId: 82, // El relleno del Kärnter Reindling es
                    correcto: false, 
                    text: "Chocolate",
                    activo: true
                },
                {
                    id: 328,
                    challengeId: 82, // El relleno del Kärnter Reindling es
                    correcto: true, // X
                    text: "Mermelada de pasas",
                    activo: true
                },
        
        
        
        
               // Pregunta 3 - Actividad 15
                {
                    id: 329,
                    challengeId: 83, // El Strudel es una tarta rellena con 
                    correcto: true, // X
                    text: "Manzanas",
                    activo: true
                },
                {
                    id: 330,
                    challengeId: 83, // El Strudel es una tarta rellena con 
                    correcto: false, 
                    text: "Peras",
                    activo: true
                },
                {
                    id: 331,
                    challengeId: 83, // El Strudel es una tarta rellena con 
                    correcto: false,
                    text: "Albaricoque",
                    activo: true
                },
                {
                    id: 332,
                    challengeId: 83, // El Strudel es una tarta rellena con 
                    correcto: false,
                    text: "Ciruelas",
                    activo: true
                },
        
        
        
        
        
                // Pregunta 4 - Actividad 15
                {
                    id: 333,
                    challengeId: 84, // El Marillenködel son Bolitas dulces de 
                    correcto: false, 
                    text: "Manzanas",
                    activo: true
                },
                {
                    id: 334,
                    challengeId: 84, // El Marillenködel son Bolitas dulces de 
                    correcto: true, // X
                    text: "Albaricoques",
                    activo: true
                },
                {
                    id: 335,
                    challengeId: 84, // El Marillenködel son Bolitas dulces de 
                    correcto: false,
                    text: "Peras",
                    activo: true
                },
                {
                    id: 336,
                    challengeId: 84, // El Marillenködel son Bolitas dulces de 
                    correcto: false,
                    text: "Uvas",
                    activo: true
                },
        
        
        
        
        
        
        
        
        
        
                /**
                * ----------------------------------------------------------------------------------------------------------
                * 5. Austria - Prueba 5
                * ----------------------------------------------------------------------------------------------------------
                */
                // Pregunta 1 - Prueba 5
                {
                    id: 337,
                    challengeId: 85, // La comida austriaca tiene gran influencia de los paises
                    correcto: true, // X
                    text: "Astro-Húngaro",
                    activo: true
                },
                {
                    id: 338,
                    challengeId: 85, // La comida austriaca tiene gran influencia de los paises
                    correcto: false, 
                    text: "Romano",
                    activo: true
                },
                {
                    id: 339,
                    challengeId: 85, // La comida austriaca tiene gran influencia de los paises
                    correcto: false,
                    text: "Checo",
                    activo: true
                },
                {
                    id: 340,
                    challengeId: 85, // La comida austriaca tiene gran influencia de los paises
                    correcto: false,
                    text: "Polaco",
                    activo: true
                },
        
        
        
        
               // Pregunta 2 - Prueba 5
               {
                    id: 341,
                    challengeId: 86, // El wienerschitzel es ____ que se sirve con ensalada de patatas frías
                    correcto: false, 
                    text: "Milanesa de gran tamaño de Pollo",
                    activo: true
                },
                {
                    id: 342,
                    challengeId: 86, // El wienerschitzel es ____ que se sirve con ensalada de patatas frías
                    correcto: true, // X
                    text: "Milanesa de gran tamaño de Res",
                    activo: true
                },
                {
                    id: 343,
                    challengeId: 86, // El wienerschitzel es ____ que se sirve con ensalada de patatas frías
                    correcto: false,
                    text: "Milanesa de gran tamaño de Cerdo",
                    activo: true
                },
                {
                    id: 344,
                    challengeId: 86, // El wienerschitzel es ____ que se sirve con ensalada de patatas frías
                    correcto: false,
                    text: "Milanesa de gran tamaño de Pato",
                    activo: true
                },
        
        
        
        
               // Pregunta 3 - Prueba 5
               {
                    id: 345,
                    challengeId: 87, // El punto citrico del Wiener Schnitzel se lo da el
                    correcto: false,
                    text: "Vinagre",
                    activo: true
                },
                {
                    id: 346,
                    challengeId: 87, // El punto citrico del Wiener Schnitzel se lo da el
                    correcto: false,
                    text: "Naranja",
                    activo: true
                },
                {
                    id: 347,
                    challengeId: 87, // El punto citrico del Wiener Schnitzel se lo da el
                    correcto: true, // X
                    text: "Limon",
                    activo: true
                },
                {
                    id: 348,
                    challengeId: 87, // El punto citrico del Wiener Schnitzel se lo da el
                    correcto: false,
                    text: "Toronja",
                    activo: true
                },
        
        
        
        
        
        
                // Pregunta 4 - Prueba 5
                {
                    id: 349,
                    challengeId: 88, // El Griesnockersuppe es 
                    correcto: true, // X
                    text: "Caldo de carne con ñoqui de semola",
                    activo: true
                },
                {
                    id: 350,
                    challengeId: 88, // El Griesnockersuppe es 
                    correcto: false,
                    text: "Caldo de pollo con ñoqui de semola",
                    activo: true
                },
                {
                    id: 351,
                    challengeId: 88, // El Griesnockersuppe es 
                    correcto: false,
                    text: "Caldo de pescado con ñoqui de semola",
                    activo: true
                },
                {
                    id: 352,
                    challengeId: 88, // El Griesnockersuppe es 
                    correcto: false,
                    text: "Caldo de verduras con ñoqui de semola",
                    activo: true
                },
        
        
        
        
                // Pregunta 5 - Prueba 5
                {
                    id: 353,
                    challengeId: 89, // La schittlauchsauce es una salsa a base de
                    correcto: false, 
                    text: "Tomate",
                    activo: true
                },
                {
                    id: 354,
                    challengeId: 89, // La schittlauchsauce es una salsa a base de
                    correcto: true, // X
                    text: "Cebolla",
                    activo: true
                },
                {
                    id: 355,
                    challengeId: 89, // La schittlauchsauce es una salsa a base de
                    correcto: false,
                    text: "Cebollin",
                    activo: true
                },
                {
                    id: 356,
                    challengeId: 89, // La schittlauchsauce es una salsa a base de
                    correcto: false,
                    text: "Pimenton",
                    activo: true
                },
        
        
        
                // Pregunta 6 - Prueba 5
                {
                    id: 357,
                    challengeId: 90, // El Strudel es una tarta rellena con
                    correcto: true, // X
                    text: "Manzanas",
                    activo: true
                },
                {
                    id: 358,
                    challengeId: 90, // El Strudel es una tarta rellena con
                    correcto: false, 
                    text: "Peras",
                    activo: true
                },
                {
                    id: 359,
                    challengeId: 90, // El Strudel es una tarta rellena con
                    correcto: false,
                    text: "Albaricoque",
                    activo: true
                },
                {
                    id: 360,
                    challengeId: 90, // El Strudel es una tarta rellena con
                    correcto: false,
                    text: "Ciruelas",
                    activo: true
                },
        
        
        
        
        
                    // Final UwU
        ]);
        
        // 6. Grecia
        await database.insert(schema.challengeOptions).values([



            /**
            * ----------------------------------------------------------------------------------------------------------
            * 6. Grecia - Actividad 16
            * ----------------------------------------------------------------------------------------------------------
            */
               // Pregunta 1 - Actividad 16
                {
                    id: 361,
                    challengeId: 91, // La cocina griega constituye la esencia de la gastronomia ________ al fusionar tradiciones culinarias
                    correcto: true, // X
                    text: "Nacional",
                    activo: true
                },
                {
                    id: 362,
                    challengeId: 91, // La cocina griega constituye la esencia de la gastronomia ________ al fusionar tradiciones culinarias
                    correcto: false,
                    text: "Mediterranea",
                    activo: true
                },
                {
                    id: 363,
                    challengeId: 91, // La cocina griega constituye la esencia de la gastronomia ________ al fusionar tradiciones culinarias
                    correcto: false,
                    text: "Vegana",
                    activo: true
                },
                {
                    id: 364,
                    challengeId: 91, // La cocina griega constituye la esencia de la gastronomia ________ al fusionar tradiciones culinarias
                    correcto: false,
                    text: "Internacional",
                    activo: true
                },
    
    
    
    
               // Pregunta 2 - Actividad 16
                {
                    id: 365,
                    challengeId: 92, // En la comida griega abundan las cremas a base de 
                    correcto: false,
                    text: "Leche",
                    activo: true
                },
                {
                    id: 366,
                    challengeId: 92, // En la comida griega abundan las cremas a base de 
                    correcto: false,
                    text: "Crema batida",
                    activo: true
                },
                {
                    id: 367,
                    challengeId: 92, // En la comida griega abundan las cremas a base de 
                    correcto: false,
                    text: "Nata",
                    activo: true
                },
                {
                    id: 368,
                    challengeId: 92, // En la comida griega abundan las cremas a base de 
                    correcto: true, // X
                    text: "Yogurt",
                    activo: true
                },
    
    
    
    
               // Pregunta 3 - Actividad 16
                {
                    id: 369,
                    challengeId: 93, // Los griegos prefieren los platos de
                    correcto: true, // X
                    text: "Carne",
                    activo: true
                },
                {
                    id: 370,
                    challengeId: 93, // Los griegos prefieren los platos de
                    correcto: false,
                    text: "Pescado",
                    activo: true
                },
    
    
                // Pregunta 4 - Actividad 16
                {
                    id: 371,
                    challengeId: 94, // La Moussaka es un pastel de forma rectangular que combina
                    correcto: false,
                    text: "Pollo y calabacín",
                    activo: true
                },
                {
                    id: 372,
                    challengeId: 94, // La Moussaka es un pastel de forma rectangular que combina
                    correcto: true, // X
                    text: "Carne y berenjenas",
                    activo: true
                },
                {
                    id: 373,
                    challengeId: 94, // La Moussaka es un pastel de forma rectangular que combina
                    correcto: false,
                    text: "Pescado y verduras",
                    activo: true
                },
                {
                    id: 374,
                    challengeId: 94, // La Moussaka es un pastel de forma rectangular que combina
                    correcto: false,
                    text: "Ninguna de las anteriores",
                    activo: true
                },
    
    
    
    
    
    
    
    
    
            /**
            *----------------------------------------------------------------------------------------------------------
            * 6. Grecia - Actividad 17
            *----------------------------------------------------------------------------------------------------------
            */
            // Pregunta 1 - Actividad 17
            {
                id: 375,
                challengeId: 95, // La ensalada griega por antonomasia es 
                correcto: true, // X
                text: "Horiatiki",
                activo: true
            },
            {
                id: 376,
                challengeId: 95, // La ensalada griega por antonomasia es 
                correcto: false, 
                text: "Marouli",
                activo: true
            },
            {
                id: 377,
                challengeId: 95, // La ensalada griega por antonomasia es 
                correcto: false,
                text: "Ntomatosalata",
                activo: true
            },
            {
                id: 378,
                challengeId: 95, // La ensalada griega por antonomasia es 
                correcto: false,
                text: "Ninguna de las anteriores",
                activo: true
            },
    
    
    
    
           // Pregunta 2 - Actividad 17
            {
                id: 379,
                challengeId: 96, // Que ingrediente tiene Omnipresencia en las preparaciones griegas?
                correcto: false,
                text: "Carne de cordero",
                activo: true
            },
            {
                id: 380,
                challengeId: 96, // Que ingrediente tiene Omnipresencia en las preparaciones griegas?
                correcto: false,
                text: "Yogurt",
                activo: true
            },
            {
                id: 381,
                challengeId: 96, // Que ingrediente tiene Omnipresencia en las preparaciones griegas?
                correcto: false,
                text: "Pan pita",
                activo: true
            },
            {
                id: 382,
                challengeId: 96, // Que ingrediente tiene Omnipresencia en las preparaciones griegas?
                correcto: true, // X
                text: "Aceite de Oliva",
                activo: true
            },
    
    
    
    
           // Pregunta 3 - Actividad 17
            {
                id: 383,
                challengeId: 97, // Cual es el queso tradicional de Grecia?
                correcto: false, 
                text: "Queso Manchego",
                activo: true
            },
            {
                id: 384,
                challengeId: 97, // Cual es el queso tradicional de Grecia?
                correcto: false,
                text: "Queso Mascarpone",
                activo: true
            },
            {
                id: 385,
                challengeId: 97, // Cual es el queso tradicional de Grecia?
                correcto: true, // X
                text: "Queso Feta",
                activo: true
            },
            {
                id: 386,
                challengeId: 97, // Cual es el queso tradicional de Grecia?
                correcto: false,
                text: "Queso Crema",
                activo: true
            },
    
    
    
    
    
            // Pregunta 4 - Actividad 17
            {
                id: 387,
                challengeId: 98, // Que especia es muy usada en postres y salados?
                correcto: false,
                text: "Romero",
                activo: true
            },
            {
                id: 388,
                challengeId: 98, // Que especia es muy usada en postres y salados?
                correcto: false,
                text: "Oregano",
                activo: true
            },
            {
                id: 389,
                challengeId: 98, // Que especia es muy usada en postres y salados?
                correcto: false,
                text: "Estragon",
                activo: true
            },
            {
                id: 390,
                challengeId: 98, // Que especia es muy usada en postres y salados?
                correcto: true, // X
                text: "Canela",
                activo: true
            },
    
    
    
    
    
    
    
    
    
    
            /**
            * ----------------------------------------------------------------------------------------------------------
            * 6. Grecia - Actividad 18
            * ----------------------------------------------------------------------------------------------------------
            */
            // Pregunta 1 - Actividad 18
            {
                id: 391,
                challengeId: 99, // Para el Tzatziki los ingredientes principales son
                correcto: false,
                text: "Queso feta y aceitunas",
                activo: true
            },
            {
                id: 392,
                challengeId: 99, // Para el Tzatziki los ingredientes principales son
                correcto: true, // X
                text: "Pepino y Yogurt",
                activo: true
            },
            {
                id: 393,
                challengeId: 99, // Para el Tzatziki los ingredientes principales son
                correcto: false,
                text: "Aceite de oliva y Tomate",
                activo: true
            },
            {
                id: 394,
                challengeId: 99, // Para el Tzatziki los ingredientes principales son
                correcto: false,
                text: "Ninguna de las anteriores",
                activo: true
            },
    
    
    
    
           // Pregunta 2 - Actividad 18
            {
                id: 395,
                challengeId: 100, // El MELITZANES PAPOUTSAKIA son
                correcto: false,
                text: "huevos rellenos",
                activo: true
            },
            {
                id: 396,
                challengeId: 100, // El MELITZANES PAPOUTSAKIA son
                correcto: false,
                text: "Tomates rellenos",
                activo: true
            },
            {
                id: 397,
                challengeId: 100, // El MELITZANES PAPOUTSAKIA son
                correcto: false, 
                text: "Pimientos rellenos",
                activo: true
            },
            {
                id: 398,
                challengeId: 100, // El MELITZANES PAPOUTSAKIA son
                correcto: true, // X
                text: "Berenjenas Rellenas",
                activo: true
            },
    
    
    
    
           // Pregunta 3 - Actividad 18
            {
                id: 399,
                challengeId: 101, // Las SPANAKÓPITA son
                correcto: false,
                text: "Empanadas de Carne",
                activo: true
            },
            {
                id: 400,
                challengeId: 101, // Las SPANAKÓPITA son
                correcto: true, // X 
                text: "Empanadas de Espinacas y queso feta",
                activo: true
            },
            {
                id: 401,
                challengeId: 101, // Las SPANAKÓPITA son
                correcto: false,
                text: "Empanadas de Pollo",
                activo: true
            },
            {
                id: 402,
                challengeId: 101, // Las SPANAKÓPITA son
                correcto: false,
                text: "Empanadas de Cordero",
                activo: true
            },
    
    
    
    
    
            // Pregunta 4 - Actividad 18
            {
                id: 403,
                challengeId: 102, // El Galaktoboureko es
                correcto: true, // X 
                text: "Pastel de leche",
                activo: true
            },
            {
                id: 404,
                challengeId: 102, // El Galaktoboureko es
                correcto: false,
                text: "Pastel de papas",
                activo: true
            },
            {
                id: 405,
                challengeId: 102, // El Galaktoboureko es
                correcto: false,
                text: "Pastel de Verduras",
                activo: true
            },
            {
                id: 406,
                challengeId: 102, // El Galaktoboureko es
                correcto: false,
                text: "Pastel de pollo",
                activo: true
            },
    
    
    
    
    
    
    
    
    
    
            /**
            * ----------------------------------------------------------------------------------------------------------
            * 6. Grecia - Prueba 6
            * ----------------------------------------------------------------------------------------------------------
            */
            // Pregunta 1 - Prueba 6
            {
                id: 407,
                challengeId: 103, // La cocina griega constituye la esencia de la gastronomia ________ al fusionar tradiciones culinarias 
                correcto: false,
                text: "Nacional",
                activo: true
            },
            {
                id: 408,
                challengeId: 103, // La cocina griega constituye la esencia de la gastronomia ________ al fusionar tradiciones culinarias 
                correcto: true, // X 
                text: "Mediterranea",
                activo: true
            },
            {
                id: 409,
                challengeId: 103, // La cocina griega constituye la esencia de la gastronomia ________ al fusionar tradiciones culinarias 
                correcto: false,
                text: "Vegana",
                activo: true
            },
            {
                id: 410,
                challengeId: 103, // La cocina griega constituye la esencia de la gastronomia ________ al fusionar tradiciones culinarias 
                correcto: false,
                text: "Internacional",
                activo: true
            },
    
    
    
    
           // Pregunta 2 - Prueba 6
           {
                id: 411,
                challengeId: 104, // La Moussaka es un pastel de forma rectangular que combina 
                correcto: false, 
                text: "Pollo y calabacín",
                activo: true
            },
            {
                id: 412,
                challengeId: 104, // La Moussaka es un pastel de forma rectangular que combina 
                correcto: true, // X
                text: "Carne y berenjenas",
                activo: true
            },
            {
                id: 413,
                challengeId: 104, // La Moussaka es un pastel de forma rectangular que combina 
                correcto: false,
                text: "Pescado y verduras",
                activo: true
            },
            {
                id: 414,
                challengeId: 104, // La Moussaka es un pastel de forma rectangular que combina 
                correcto: false,
                text: "Ninguna de las anteriores",
                activo: true
            },
    
    
    
    
           // Pregunta 3 - Prueba 6
           {
                id: 415,
                challengeId: 105, // Que ingrediente tiene Omnipresencia en las preparaciones griegas?
                correcto: false,
                text: "Carne de cordero",
                activo: true
            },
            {
                id: 416,
                challengeId: 105, // Que ingrediente tiene Omnipresencia en las preparaciones griegas?
                correcto: false,
                text: "Yogurt",
                activo: true
            },
            {
                id: 417,
                challengeId: 105, // Que ingrediente tiene Omnipresencia en las preparaciones griegas?
                correcto: false,
                text: "Pan pita",
                activo: true
            },
            {
                id: 418,
                challengeId: 105, // Que ingrediente tiene Omnipresencia en las preparaciones griegas?
                correcto: true, // X
                text: "Aceite de Oliva",
                activo: true
            },
    
    
    
    
    
    
            // Pregunta 4 - Prueba 6
            {
                id: 419,
                challengeId: 106, // Que especia es muy usada en postres y salados? 
                correcto: false,
                text: "Romero",
                activo: true
            },
            {
                id: 420,
                challengeId: 106, // Que especia es muy usada en postres y salados? 
                correcto: false,
                text: "Oregano",
                activo: true
            },
            {
                id: 421,
                challengeId: 106, // Que especia es muy usada en postres y salados? 
                correcto: false,
                text: "Estragon",
                activo: true
            },
            {
                id: 422,
                challengeId: 106, // Que especia es muy usada en postres y salados? 
                correcto: true, // X
                text: "Canela",
                activo: true
            },
    
    
    
    
            // Pregunta 5 - Prueba 6
            {
                id: 423,
                challengeId: 107, // Para el Tzatziki los ingredientes principales son
                correcto: false, 
                text: "Queso feta y aceitunas",
                activo: true
            },
            {
                id: 424,
                challengeId: 107, // Para el Tzatziki los ingredientes principales son
                correcto: true, // X
                text: "Pepino y Yogurt",
                activo: true
            },
            {
                id: 425,
                challengeId: 107, // Para el Tzatziki los ingredientes principales son
                correcto: false,
                text: "Aceite de oliva y Tomate",
                activo: true
            },
            {
                id: 426,
                challengeId: 107, // Para el Tzatziki los ingredientes principales son
                correcto: false,
                text: "Ninguna de las anteriores",
                activo: true
            },
    
    
    
            // Pregunta 6 - Prueba 6
            {
                id: 427,
                challengeId: 108, // El MELITZANES PAPOUTSAKIA son
                correcto: true, // X
                text: "Pastel de leche",
                activo: true
            },
            {
                id: 428,
                challengeId: 108, // El MELITZANES PAPOUTSAKIA son
                correcto: false, 
                text: "Pastel de papas",
                activo: true
            },
            {
                id: 429,
                challengeId: 108, // El MELITZANES PAPOUTSAKIA son
                correcto: false,
                text: "Pastel de Verduras",
                activo: true
            },
            {
                id: 430,
                challengeId: 108, // El MELITZANES PAPOUTSAKIA son
                correcto: false,
                text: "Pastel de pollo",
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