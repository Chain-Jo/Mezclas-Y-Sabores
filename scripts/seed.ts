
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
                title: "Panadería",
                imageSrc: "/img/un-pan.png"
            },
            {
                id:2,
                title: "Carnes",
                imageSrc: "/img/filete.png"
            },
            {
                id:3,
                title: "Repostería",
                imageSrc: "/img/pastel-de-cumpleanos.png"
            },
            {
                id:4,
                title: "Cocteles",
                imageSrc: "/img/coctel.png"
            }
        ]);

        await database.insert(schema.units).values([
            {
                id: 1,
                courseId: 1, // Panadería
                title: "Unidad 1",
                description: "Aprende los fundamentos de la panadería",
                order:1,
            }
        ]);

        await database.insert(schema.recipes).values([
            {
                id: 1,
                unitId: 1, 
                title: "Receta del pan",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure quaerat incidunt veritatis iusto reiciendis! Numquam exercitationem a perferendis, sit deserunt et obcaecati est eius. Debitis totam modi harum esse.",
                imageSrc: "/img/options/corte-vichy.jpg",
                order:1,
            },
        ]);

        await database.insert(schema.lessons).values([
            {
                id: 1,
                unitId: 1, // Unidad 1 (aprende los fundamentos)
                order: 1,
                title: "Teoría I",
            },
            {
                id: 2,
                unitId: 1, // Unidad 1 (aprende los fundamentos)
                order: 2,
                title: "Teoría II",
            },
            {
                id: 3,
                unitId: 1, // Unidad 1 (aprende los fundamentos)
                order: 3,
                title: "Teoría III",
            },
            {
                id: 4,
                unitId: 1, // Unidad 1 (aprende los fundamentos)
                order: 4,
                title: "Teoría IV",
            },
        ]);
        
        await database.insert(schema.challenges).values([
            {
                id: 1,
                lessonId: 1, // Teoría I
                type: "SELECT",
                order: 1,
                question: '¿Cuál de éstos es un "Pan de molde"?',
            },
            {
                id: 2,
                lessonId: 1, // Teoría I
                type: "ASSIST",
                order: 2,
                question: '¿Para preparar una arepa se necesita harina de maíz, agua, sal y ____?',
            },
            {
                id: 3,
                lessonId: 1, // Teoría I
                type: "SELECT",
                order: 3,
                question: '¿Cuál de los siguientes cortes de frutas y verduras se conoce como "Brunoise"',
            },
            {
                id: 4,
                lessonId: 1, // Teoría I
                type: "ASSIST",
                order: 4,
                question: '¿Por cuanto tiempo se debe hervir un huevo para que quede completamente cocido?',
            },
        ]);

        // Challenges lesson 1
        await database.insert(schema.challengeOptions).values([
            {
                id: 1,
                challengeId: 1, // ¿Cuál de éstos es un "Pan de molde"?
                imageSrc: "/img/options/pan-molde.jpg",
                correct: true,
                text: "Pan de sándwich",
            },
            {
                id: 2,
                challengeId: 1, // ¿Cuál de éstos es un "Pan de molde"?
                imageSrc: "/img/options/pan-campesino.jpg",
                correct: false,
                text: "Pan redondo",
            },
            {
                id: 3,
                challengeId: 1, // ¿Cuál de éstos es un "Pan de molde"?
                imageSrc: "/img/options/bagel.jpg",
                correct: false,
                text: "Pan en forma de dona",
            },
            {
                id: 4,
                challengeId: 1, // ¿Cuál de éstos es un "Pan de molde"?
                imageSrc: "/img/options/cruasan.jpg",
                correct: false,
                text: "Cruasán",
            },
        ]);

        // Challenges lesson 1
        await database.insert(schema.challengeOptions).values([
            {
                id: 5,
                challengeId: 2, // ¿Cuál de éstos es un "Pan de molde"?
                correct: true,
                text: "Aceite",
            },
            {
                id: 6,
                challengeId: 2, // ¿Cuál de éstos es un "Pan de molde"?
                correct: false,
                text: "Harina de trigo",
            },
            {
                id: 7,
                challengeId: 2, // ¿Cuál de éstos es un "Pan de molde"?
                correct: false,
                text: "Polvo para hornear",
            },
            {
                id: 8,
                challengeId: 2, // ¿Cuál de éstos es un "Pan de molde"?
                correct: false,
                text: "Miel",
            },
        ]);
        
        // Challenges lesson 1
        await database.insert(schema.challengeOptions).values([
            {
                id: 9,
                challengeId: 3, // ¿Cuál de éstos es un "Pan de molde"?
                imageSrc: "/img/options/corte-vichy.jpg",
                correct: false,
                text: "Rodajas de unos 2mm de espesor",
            },
            {
                id: 10,
                challengeId: 3, // ¿Cuál de éstos es un "Pan de molde"?
                imageSrc: "/img/options/corte-brunoise.jpg",
                correct: true,
                text: "Cubos de 1 a 2 mm",
            },
            {
                id: 11,
                challengeId: 3, // ¿Cuál de éstos es un "Pan de molde"?
                imageSrc: "/img/options/corte-macedonia.jpg",
                correct: false,
                text: "Cubos de 4mm",
            },
            {
                id: 12,
                challengeId: 3, // ¿Cuál de éstos es un "Pan de molde"?
                imageSrc: "/img/options/corte-jardinera.jpg",
                correct: false,
                text: "Tiras de unos 4 cm de largo, 4 mm de ancho y 4 mm de espesor",
            },
        ]);

        // Challenges lesson 1
        await database.insert(schema.challengeOptions).values([
            {
                id: 13,
                challengeId: 4, // ¿Cuál de éstos es un "Pan de molde"?
                correct: false,
                text: "5 minutos",
            },
            {
                id: 14,
                challengeId: 4, // ¿Cuál de éstos es un "Pan de molde"?
                correct: false,
                text: "10 minutos",
            },
            {
                id: 15,
                challengeId: 4, // ¿Cuál de éstos es un "Pan de molde"?
                correct: true,
                text: "15 minutos",
            },
            {
                id: 16,
                challengeId: 4, // ¿Cuál de éstos es un "Pan de molde"?
                correct: false,
                text: "20 minutos",
            },
        ]);


        // lesson 2
        await database.insert(schema.challenges).values([
            {
                id: 5,
                lessonId: 2, // Teoría I
                type: "SELECT",
                order: 5,
                question: '¿Cuál de éstos es un "Pan de molde"?',
            },
            {
                id: 6,
                lessonId: 2, // Teoría I
                type: "ASSIST",
                order: 6,
                question: '¿Cúal de las siguientes opciones no es un fruto seco?',
            },
            // {
            //     id: 7,
            //     lessonId: 2, // Teoría I
            //     type: "SELECT",
            //     order: 3,
            //     question: '¿Cuál de los siguientes cortes de frutas y verduras se conoce como "Brunoise"',
            // },
            // {
            //     id: 8,
            //     lessonId: 2, // Teoría I
            //     type: "ASSIST",
            //     order: 4,
            //     question: '¿Por cuanto tiempo se debe hervir un huevo para que quede completamente cocido?',
            // },
        ]);


        // Challenges lesson 2
        await database.insert(schema.challengeOptions).values([
            {
                id: 17,
                challengeId: 5, // ¿Cuál de éstos es un "Pan de molde"?
                imageSrc: "/img/options/pan-molde.jpg",
                correct: true,
                text: "Pan de sándwich",
            },
            {
                id: 18,
                challengeId: 5, // ¿Cuál de éstos es un "Pan de molde"?
                imageSrc: "/img/options/pan-campesino.jpg",
                correct: false,
                text: "Pan redondo",
            },
            {
                id: 19,
                challengeId: 5, // ¿Cuál de éstos es un "Pan de molde"?
                imageSrc: "/img/options/bagel.jpg",
                correct: false,
                text: "Pan en forma de dona",
            },
            {
                id: 20,
                challengeId: 5, // ¿Cuál de éstos es un "Pan de molde"?
                imageSrc: "/img/options/cruasan.jpg",
                correct: false,
                text: "Cruasán",
            },
        ]);

        // Challenges lesson 2
        await database.insert(schema.challengeOptions).values([
            {
                id: 21,
                challengeId: 6, // ¿Cuál de éstos es un "Pan de molde"?
                correct: false,
                text: "Merey",
            },
            {
                id: 22,
                challengeId: 6, // ¿Cuál de éstos es un "Pan de molde"?
                correct: false,
                text: "Almendra",
            },
            {
                id: 23,
                challengeId: 6, // ¿Cuál de éstos es un "Pan de molde"?
                correct: false,
                text: "Pistacho",
            },
            {
                id: 24,
                challengeId: 6, // ¿Cuál de éstos es un "Pan de molde"?
                correct: true,
                text: "Maní",
            },
        ]);

        console.log("Rellenado Completado");
    } catch (error) {
        console.error(error);
        throw new Error("Error en rellenar la base de datos");
        
    }
};

main();