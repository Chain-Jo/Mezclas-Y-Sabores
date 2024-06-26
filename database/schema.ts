import { relations } from "drizzle-orm";
import { boolean, integer, pgEnum, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";


export const courses = pgTable("courses", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    imageSrc: text("image_src").notNull(),
    activo: boolean("activo").notNull(),
});

export const coursesRelations = relations(courses, ({ many }) => ({
    userProgress: many(userProgress),
    units: many(units),
}));

export const units = pgTable("units", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(), // Unidad 1
    description: text("description").notNull(), // Aprende lo básico
    courseId: integer("course_id").references(() => courses.id, { onDelete: "cascade" }).notNull(),
    order: integer("order").notNull(),
    activo: boolean("activo").notNull(),
});

export const unitsRelations = relations (units, ({ many, one }) => ({
    course: one(courses, {
        fields: [units.courseId],
        references: [courses.id],
    }),
    lessons: many(lessons),
    recipesX: many(recipesX)
}));

export const lessons = pgTable("lessons", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(), // lección 1
    unitId: integer("unit_id").references(() => units.id, { onDelete: "cascade" }).notNull(),
    order: integer("order").notNull(),
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
//     title: text("title").notNull(),
//     description: text("description").notNull(),
//     imageSrc: text("imgae_src").notNull(),
//     unitId: integer("unit_id").references(() => units.id, { onDelete: "cascade" }).notNull(),
//     order: integer("order").notNull(),
// });

// export const recipesRelations = relations (recipes, ({ many, one }) => ({
//     unit: one(units, {
//         fields: [recipes.unitId],
//         references: [units.id],
//     }),
// }));


export const recipesX = pgTable("recipesX", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    link: text("link").notNull(),
    unitId: integer("unit_id").references(() => units.id, { onDelete: "cascade" }).notNull(),
    order: integer("order").notNull(),
    activo: boolean("activo").notNull(),
});

export const recipesRelationsX = relations (recipesX, ({ many, one }) => ({
    unit: one(units, {
        fields: [recipesX.unitId],
        references: [units.id],
    }),
}));

export const challengesEnum = pgEnum("type", ["SELECT", "ASSIST"]);

export const challenges = pgTable("challenges", {
    id: serial("id").primaryKey(),
    lessonId: integer("lesson_id").references(() => lessons.id, { onDelete: "cascade" }).notNull(),
    type: challengesEnum("type").notNull(),
    question: text("question").notNull(),
    order: integer("order").notNull(),
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
    challengeId: integer("challenge_id").references(() => challenges.id, { onDelete: "cascade" }).notNull(),
    text: text("text").notNull(),
    correct: boolean("correct").notNull(),
    imageSrc: text("imgae_src"),
    activo: boolean("activo").notNull(),
    // audioSrc: text("audio_src"),
});

export const challengeOptionsRelations = relations (challengeOptions, ({ one }) => ({
    challenge: one(challenges, {
        fields: [challengeOptions.challengeId],
        references: [challenges.id],
    }),
}));

export const challengeProgress = pgTable("challenge_progress", {
    id: serial("id").primaryKey(),
    userId: text("user_id").notNull(), // TODO: confirmar que no explota
    challengeId: integer("challenge_id").references(() => challenges.id, { onDelete: "cascade" }).notNull(),
    completed: boolean("completed").notNull().default(false)
});

export const challengeProgressRelations = relations (challengeProgress, ({ one }) => ({
    challenge: one(challenges, {
        fields: [challengeProgress.challengeId],
        references: [challenges.id],
    }),
}));

export const userProgress = pgTable("user_progress", {
    userId: text("user_id").primaryKey(),
    userName: text("user_name").notNull().default("User"),
    email: text("email_adress").notNull(),
    userImageSrc: text("user_image_src").notNull().default("/img/sombrero-cocinero.png"),
    activeCourseId: integer("active_course_id").references(() => courses.id, {onDelete: "cascade"}),
    hearts: integer("hearts").notNull().default(5),
    points: integer("points").notNull().default(0),
    createdAt: text('created_at').notNull(),
});

export const userPorgressRelations = relations(userProgress, ({ one }) => ({
    activeCourse: one(courses, {
        fields: [userProgress.activeCourseId],
        references: [courses.id],
    }),
}));
