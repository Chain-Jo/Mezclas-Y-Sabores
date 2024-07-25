
import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../database/schema";

const sql = neon(process.env.DATABASE_URL!);

const database = drizzle(sql, {schema});

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

        await database.insert(schema.courses).values([
            {
                id:1,
                titulo: "Panadería",
                enlace_imagen: "/img/un-pan.png",
                activo: true
            },
            {
                id:2,
                titulo: "Carnes",
                enlace_imagen: "/img/filete.png",
                activo: true,
            },
            {
                id:3,
                titulo: "Repostería",
                enlace_imagen: "/img/pastel-de-cumpleanos.png",
                activo: true
            },
            {
                id:4,
                titulo: "Cocteles",
                enlace_imagen: "/img/coctel.png",
                activo: true
            }
        ]);

        await database.insert(schema.units).values([
            {
                id: 1,
                courseId: 1, // Panadería
                titulo: "Unidad 1",
                descripcion: "Aprende los fundamentos de la panadería",
                orden:1,
                activo: true
            }
        ]);

        await database.insert(schema.units).values([
            {
                id: 2,
                courseId: 1, // Panadería
                titulo: "Unidad 2",
                descripcion: "Aprende algo más",
                orden:2,
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


        await database.insert(schema.recipesX).values([
            {
                id: 1,
                unitId: 1, 
                titulo: "Receta Arepa",
                link: "https://drive.google.com/file/d/1c25MhgpDjvFfVhngWTb8yCH2ewRtUZED/view?usp=drive_link",
                orden:1,
                activo: true,
                unidad_referenciada:1
            },
        ]);

        await database.insert(schema.recipesX).values([
            {
                id: 2,
                unitId: 2, 
                titulo: "Receta Hallaca Venezolana",
                link: "https://drive.google.com/file/d/15vEm-HcTQV4RAA0xShNMUx7Hr-cyjtx4/view?usp=drive_link",
                orden:2,
                activo: true,
                unidad_referenciada: 2,
            },
        ]);

        await database.insert(schema.lessons).values([
            {
                id: 1,
                unitId: 1, // Unidad 1 (aprende los fundamentos)
                orden: 1,
                titulo: "Teoría I",
                activo: true,
                prueba: false
            },
            {
                id: 2,
                unitId: 1, // Unidad 1 (aprende los fundamentos)
                orden: 2,
                titulo: "Teoría II",
                activo: true,
                prueba: true
            },
            {
                id: 3,
                unitId: 1, // Unidad 1 (aprende los fundamentos)
                orden: 3,
                titulo: "Teoría III",
                activo: true,
                prueba: false
            },
            {
                id: 4,
                unitId: 1, // Unidad 1 (aprende los fundamentos)
                orden: 4,
                titulo: "Teoría IV",
                activo: true,
                prueba: false
            },
            {
                id: 5,
                unitId: 2, // Unidad 2 
                orden: 5,
                titulo: "Teoría V",
                activo: true,
                prueba: false
            },

        ]);
        
        await database.insert(schema.challenges).values([
            {
                id: 1,
                lessonId: 1, // Teoría I
                type: "SELECCION",
                orden: 1,
                question: '¿Cuál de éstos es un "Pan de molde"?',
                activo: true
            },
            {
                id: 2,
                lessonId: 1, // Teoría I
                type: "COMPLETAR",
                orden: 2,
                question: '¿Para preparar una arepa se necesita harina de maíz, agua, sal y ____?',
                activo: true
            },
            {
                id: 3,
                lessonId: 1, // Teoría I
                type: "SELECCION",
                orden: 3,
                question: '¿Cuál de los siguientes cortes de frutas y verduras se conoce como "Brunoise"',
                activo: true
            },
            {
                id: 4,
                lessonId: 1, // Teoría I
                type: "COMPLETAR",
                orden: 4,
                question: '¿Por cuanto tiempo se debe hervir un huevo para que quede completamente cocido?',
                activo: true
            },
        ]);

        // Challenges lesson 1
        await database.insert(schema.challengeOptions).values([
            {
                id: 1,
                challengeId: 1, // ¿Cuál de éstos es un "Pan de molde"?
                enlace_imagen: "/img/options/pan-molde.jpg",
                correcto: true,
                text: "Pan de sándwich",
                activo: true
            },
            {
                id: 2,
                challengeId: 1, // ¿Cuál de éstos es un "Pan de molde"?
                enlace_imagen: "/img/options/pan-campesino.jpg",
                correcto: false,
                text: "Pan redondo",
                activo: true
            },
            {
                id: 3,
                challengeId: 1, // ¿Cuál de éstos es un "Pan de molde"?
                enlace_imagen: "/img/options/bagel.jpg",
                correcto: false,
                text: "Pan en forma de dona",
                activo: true
            },
            {
                id: 4,
                challengeId: 1, // ¿Cuál de éstos es un "Pan de molde"?
                enlace_imagen: "/img/options/cruasan.jpg",
                correcto: false,
                text: "Cruasán",
                activo: true
            },
        ]);

        // Challenges lesson 1
        await database.insert(schema.challengeOptions).values([
            {
                id: 5,
                challengeId: 2, // ¿Cuál de éstos es un "Pan de molde"?
                correcto: true,
                text: "Aceite",
                activo: true
            },
            {
                id: 6,
                challengeId: 2, // ¿Cuál de éstos es un "Pan de molde"?
                correcto: false,
                text: "Harina de trigo",
                activo: true
            },
            {
                id: 7,
                challengeId: 2, // ¿Cuál de éstos es un "Pan de molde"?
                correcto: false,
                text: "Polvo para hornear",
                activo: true
            },
            {
                id: 8,
                challengeId: 2, // ¿Cuál de éstos es un "Pan de molde"?
                correcto: false,
                text: "Miel",
                activo: true
            },
        ]);
        
        // Challenges lesson 1
        await database.insert(schema.challengeOptions).values([
            {
                id: 9,
                challengeId: 3, // ¿Cuál de éstos es un "Pan de molde"?
                enlace_imagen: "/img/options/corte-vichy.jpg",
                correcto: false,
                text: "Rodajas de unos 2mm de espesor",
                activo: true
            },
            {
                id: 10,
                challengeId: 3, // ¿Cuál de éstos es un "Pan de molde"?
                enlace_imagen: "/img/options/corte-brunoise.jpg",
                correcto: true,
                text: "Cubos de 1 a 2 mm",
                activo: true
            },
            {
                id: 11,
                challengeId: 3, // ¿Cuál de éstos es un "Pan de molde"?
                enlace_imagen: "/img/options/corte-macedonia.jpg",
                correcto: false,
                text: "Cubos de 4mm",
                activo: true
            },
            {
                id: 12,
                challengeId: 3, // ¿Cuál de éstos es un "Pan de molde"?
                enlace_imagen: "/img/options/corte-jardinera.jpg",
                correcto: false,
                text: "Tiras de unos 4 cm de largo, 4 mm de ancho y 4 mm de espesor",
                activo: true
            },
        ]);

        // Challenges lesson 1
        await database.insert(schema.challengeOptions).values([
            {
                id: 13,
                challengeId: 4, // ¿Cuál de éstos es un "Pan de molde"?
                correcto: false,
                text: "5 minutos",
                activo: true
            },
            {
                id: 14,
                challengeId: 4, // ¿Cuál de éstos es un "Pan de molde"?
                correcto: false,
                text: "10 minutos",
                activo: true
            },
            {
                id: 15,
                challengeId: 4, // ¿Cuál de éstos es un "Pan de molde"?
                correcto: true,
                text: "15 minutos",
                activo: true
            },
            {
                id: 16,
                challengeId: 4, // ¿Cuál de éstos es un "Pan de molde"?
                correcto: false,
                text: "20 minutos",
                activo: true
            },
        ]);

        // lesson 2
        await database.insert(schema.challenges).values([
            {
                id: 5,
                lessonId: 2, // Teoría I
                type: "SELECCION",
                orden: 5,
                question: '¿Cuál de éstos es un "Pan de molde"?',
                activo: true
            },
            {
                id: 6,
                lessonId: 2, // Teoría I
                type: "COMPLETAR",
                orden: 6,
                question: '¿Cúal de las siguientes opciones no es un fruto seco?',
                activo: true
            },
            // {
            //     id: 7,
            //     lessonId: 2, // Teoría I
            //     type: "SELECCION",
            //     orden: 3,
            //     question: '¿Cuál de los siguientes cortes de frutas y verduras se conoce como "Brunoise"',
            // },
            // {
            //     id: 8,
            //     lessonId: 2, // Teoría I
            //     type: "COMPLETAR",
            //     orden: 4,
            //     question: '¿Por cuanto tiempo se debe hervir un huevo para que quede completamente cocido?',
            // },
        ]);

        // Challenges lesson 2
        await database.insert(schema.challengeOptions).values([
            {
                id: 17,
                challengeId: 5, // ¿Cuál de éstos es un "Pan de molde"?
                enlace_imagen: "/img/options/pan-molde.jpg",
                correcto: true,
                text: "Pan de sándwich",
                activo: true
            },
            {
                id: 18,
                challengeId: 5, // ¿Cuál de éstos es un "Pan de molde"?
                enlace_imagen: "/img/options/pan-campesino.jpg",
                correcto: false,
                text: "Pan redondo",
                activo: true
            },
            {
                id: 19,
                challengeId: 5, // ¿Cuál de éstos es un "Pan de molde"?
                enlace_imagen: "/img/options/bagel.jpg",
                correcto: false,
                text: "Pan en forma de dona",
                activo: true
            },
            {
                id: 20,
                challengeId: 5, // ¿Cuál de éstos es un "Pan de molde"?
                enlace_imagen: "/img/options/cruasan.jpg",
                correcto: false,
                text: "Cruasán",
                activo: true
            },
        ]);

        // Challenges lesson 2
        await database.insert(schema.challengeOptions).values([
            {
                id: 21,
                challengeId: 6, // ¿Cuál de éstos es un "Pan de molde"?
                correcto: false,
                text: "Merey",
                activo: true
            },
            {
                id: 22,
                challengeId: 6, // ¿Cuál de éstos es un "Pan de molde"?
                correcto: false,
                text: "Almendra",
                activo: true
            },
            {
                id: 23,
                challengeId: 6, // ¿Cuál de éstos es un "Pan de molde"?
                correcto: false,
                text: "Pistacho",
                activo: true
            },
            {
                id: 24,
                challengeId: 6, // ¿Cuál de éstos es un "Pan de molde"?
                correcto: true,
                text: "Maní",
                activo: true
            },
        ]);

        // lesson 5
        await database.insert(schema.challenges).values([
             {
                 id: 7,
                 lessonId: 5, // Teoría I
                 type: "SELECCION",
                 orden: 7,
                 question: '¿Cuál de los siguientes cortes de frutas y verduras se conoce como "Brunoise"',
                 activo: true,
             },
             {
                 id: 8,
                 lessonId: 5, // Teoría I
                 type: "COMPLETAR",
                 orden: 8,
                 question: '¿Por cuanto tiempo se debe hervir un huevo para que quede completamente cocido?',
                 activo: true
             },
        ]);

        await database.insert(schema.challengeOptions).values([
            {
                id: 25,
                challengeId: 7, // ¿Cuál de éstos es un "Pan de molde"?
                correcto: false,
                text: "Merey",
                activo: true
            },
            {
                id: 26,
                challengeId: 7, // ¿Cuál de éstos es un "Pan de molde"?
                correcto: true,
                text: "Almendra",
                activo: true
            },
            {
                id: 27,
                challengeId: 8, // ¿Cuál de éstos es un "Pan de molde"?
                correcto: false,
                text: "Pistacho",
                activo: true
            },
            {
                id: 28,
                challengeId: 8, // ¿Cuál de éstos es un "Pan de molde"?
                correcto: true,
                text: "Maní",
                activo: true
            },
        ]);

        console.log("Rellenado Completado");
    } catch (error) {
        console.error(error);
        throw new Error("Error en rellenar la base de datos");
        
    }
};

main();