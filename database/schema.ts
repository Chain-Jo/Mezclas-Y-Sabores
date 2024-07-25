import { relations } from "drizzle-orm";
import { boolean, integer, pgEnum, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";


export const courses = pgTable("courses", {
    id: serial("id").primaryKey(),
    titulo: text("titulo").notNull(),
    enlace_imagen: text("imagen").notNull(),
    activo: boolean("activo").notNull(),
});

export const coursesRelations = relations(courses, ({ many }) => ({
    userProgress: many(userProgress),
    units: many(units),
}));

export const units = pgTable("units", {
    id: serial("id").primaryKey(),
    titulo: text("titulo").notNull(), // Unidad 1
    descripcion: text("descripcion").notNull(), // Aprende lo básico
    courseId: integer("id_curso").references(() => courses.id, { onDelete: "cascade" }).notNull(),
    orden: integer("orden").notNull(),
    activo: boolean("activo").notNull(),
});

export const unitsRelations = relations (units, ({ many, one }) => ({
    curso: one(courses, {
        fields: [units.courseId],
        references: [courses.id],
    }),
    lessons: many(lessons),
    recipesX: many(recipesX)
}));

export const lessons = pgTable("lessons", {
    id: serial("id").primaryKey(),
    titulo: text("titulo").notNull(), // lección 1
    unitId: integer("id_unidad").references(() => units.id, { onDelete: "cascade" }).notNull(),
    orden: integer("orden").notNull(),
    activo: boolean("activo").notNull(),
    prueba: boolean("prueba").notNull(),
});

export const lessonsRelations = relations (lessons, ({ many, one }) => ({
    unit: one(units, {
        fields: [lessons.unitId],
        references: [units.id],
    }),

    challenges: many(challenges),
}));

// recetas

// export const recipes = pgTable("recipes", {
//     id: serial("id").primaryKey(),
//     titulo: text("titulo").notNull(),
//     descripcion: text("descripcion").notNull(),
//     enlace_imagen: text("imgae_src").notNull(),
//     unitId: integer("unit_id").references(() => units.id, { onDelete: "cascade" }).notNull(),
//     orden: integer("orden").notNull(),
// });

// export const recipesRelations = relations (recipes, ({ many, one }) => ({
//     unit: one(units, {
//         fields: [recipes.unitId],
//         references: [units.id],
//     }),
// }));


export const recipesX = pgTable("recipesX", {
    id: serial("id").primaryKey(),
    titulo: text("titulo").notNull(),
    link: text("enlace").notNull(),
    unitId: integer("id_unidad").references(() => units.id, { onDelete: "cascade" }).notNull(),
    unidad_referenciada: integer("unidad_referenciada").notNull(),
    orden: integer("orden").notNull(),
    activo: boolean("activo").notNull(),
});

export const recipesRelationsX = relations (recipesX, ({ many, one }) => ({
    unit: one(units, {
        fields: [recipesX.unitId],
        references: [units.id],
    }),
}));

export const challengesEnum = pgEnum("type", ["SELECCION", "COMPLETAR"]);

export const challenges = pgTable("challenges", {
    id: serial("id").primaryKey(),
    lessonId: integer("id_leccion").references(() => lessons.id, { onDelete: "cascade" }).notNull(),
    type: challengesEnum("tipo").notNull(),
    question: text("pregunta").notNull(),
    orden: integer("orden").notNull(),
    activo: boolean("activo").notNull(),
});

export const challengesRelations = relations (challenges, ({ many, one }) => ({
    lesson: one(lessons, {
        fields: [challenges.lessonId],
        references: [lessons.id],
    }),
    challengeOptions: many(challengeOptions),
    challengeProgress: many(challengeProgress),
}));

export const challengeOptions = pgTable("challenge_options", {
    id: serial("id").primaryKey(),
    challengeId: integer("id_reto").references(() => challenges.id, { onDelete: "cascade" }).notNull(),
    text: text("texto").notNull(),
    correcto: boolean("correcto").notNull(),
    enlace_imagen: text("imagen"),
    activo: boolean("activo").notNull(),
    // audioSrc: text("audio_src"),
});

export const challengeOptionsRelations = relations (challengeOptions, ({ one }) => ({
    reto: one(challenges, {
        fields: [challengeOptions.challengeId],
        references: [challenges.id],
    }),
}));

export const challengeProgress = pgTable("challenge_progress", {
    id: serial("id").primaryKey(),
    userId: text("id_usuario").notNull(), // TODO: confirmar que no explota
    challengeId: integer("id_reto").references(() => challenges.id, { onDelete: "cascade" }).notNull(),
    completed: boolean("completado").notNull().default(false)
});

export const challengeProgressRelations = relations (challengeProgress, ({ one }) => ({
    reto: one(challenges, {
        fields: [challengeProgress.challengeId],
        references: [challenges.id],
    }),
}));

export const userProgress = pgTable("user_progress", {
    userId: text("id_usuario").primaryKey(),
    userName: text("nombre_usuario").notNull().default("User"),
    email: text("correo_usuario").notNull(),
    userImageSrc: text("imagen_usuario").notNull().default("/img/sombrero-cocinero.png"),
    activeCourseId: integer("id_curso_activo").references(() => courses.id, {onDelete: "cascade"}),
    hearts: integer("corazones").notNull().default(5),
    points: integer("puntos").notNull().default(0),
    createdAt: text('fecha_creado').notNull(),
});

export const userPorgressRelations = relations(userProgress, ({ one }) => ({
    activeCourse: one(courses, {
        fields: [userProgress.activeCourseId],
        references: [courses.id],
    }),
}));

export const userActions = pgTable("user_actions", {
    actionId: text("id_accion").primaryKey(),
    userName: text("nombre_usuario").notNull(),
    actionName: text("nombre_accion").notNull(),
    createdAt: text('fecha_creado').notNull(),
});