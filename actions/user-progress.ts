"use server";

import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { auth, currentUser } from "@clerk/nextjs/server";

import database from "@/database/drizzle";

import { POINTS_TO_REFILL } from "@/constants";
import { getCourseById, getUserProgress } from "@/database/queries";
import { challengeProgress, challenges, userProgress } from "@/database/schema";


export const upsertUserProgress = async (courseId: number) => {
    const { userId } = await auth();

    const user = await currentUser();

    if (!userId || !user) {
        throw new Error("Sin autorización");
    }

    const curso = await getCourseById(courseId);

    if (!curso) {
        throw new Error("Curso no encontrado");
    }

    if (!curso.units.length || !curso.units[0].lessons.length) {
        throw new Error("El curso está vacío");
    }

    const existingUserProgress = await getUserProgress();

    if (existingUserProgress) {
        await database.update(userProgress).set({
            activeCourseId: courseId,
            userName: user.firstName || "User",
            userImageSrc: user.imageUrl || "/img/sombrero-cocinero.png",
        });

        revalidatePath("/learn");
        revalidatePath("/courses");
        redirect("/learn");
    }

    await database.insert(userProgress).values({
        // @ts-ignore: Unreachable code error
        userId,
        activeCourseId: courseId,
        userName: user.firstName || "User",
        email: user.emailAddresses,
        userImageSrc: user.imageUrl || "/img/sombrero-cocinero.png",
        createdAt: user.createdAt,
    });

    revalidatePath("/learn");
    revalidatePath("/courses");
    redirect("/learn");
};

export const reduceHearts = async (challengeId: number) => {
    const { userId } = await auth();

    if (!userId) {
        throw new Error("Sin autorización");
    }

    const currentUserProgress = await getUserProgress();

    const reto = await database.query.challenges.findFirst({
        where: eq(challenges.id, challengeId),
    });

    if (!reto) {
        throw new Error("No se encontró la pregunta");
    }

    const lessonId = reto.lessonId;

    const existitingChallengeProgress = await database.query.challengeProgress.findFirst({
        where: and(
            eq(challengeProgress.userId, userId),
            eq(challengeProgress.challengeId, challengeId),
        ),
    });

    const isPractice = !!existitingChallengeProgress;

    if (isPractice) {
        return { error: "práctica" };
    }

    if (!currentUserProgress) {
        throw new Error("No se encontró progreso de usuario");
    }

    if (currentUserProgress.hearts === 0) {
        return { error: "corazones" };
    }

    await database.update(userProgress).set({
        hearts: Math.max(currentUserProgress.hearts - 1, 0),
    }).where(eq(userProgress.userId, userId));

    revalidatePath("/shop");
    revalidatePath("/learn");
    revalidatePath("/quest");
    revalidatePath("/leaderboard");
    revalidatePath(`/lesson/${lessonId}`);
};

export const reduceHeartsTest = async (challengeId: number) => {
    const { userId } = await auth();

    if (!userId) {
        throw new Error("Sin autorización");
    }

    const currentUserProgress = await getUserProgress();

    const reto = await database.query.challenges.findFirst({
        where: eq(challenges.id, challengeId),
    });

    if (!reto) {
        throw new Error("No se encontró la pregunta");
    }

    const lessonId = reto.lessonId;

    const existitingChallengeProgress = await database.query.challengeProgress.findFirst({
        where: and(
            eq(challengeProgress.userId, userId),
            eq(challengeProgress.challengeId, challengeId),
        ),
    });

    const isPractice = !!existitingChallengeProgress;

    if (isPractice) {
        return { error: "práctica" };
    }

    if (!currentUserProgress) {
        throw new Error("No se encontró progreso de usuario");
    }

    if (currentUserProgress.hearts === 0) {
        return { error: "corazones" };
    }

    await database.update(userProgress).set({
        hearts: Math.max(currentUserProgress.hearts - 6, 0),
    }).where(eq(userProgress.userId, userId));

    revalidatePath("/shop");
    revalidatePath("/learn");
    revalidatePath("/quest");
    revalidatePath("/leaderboard");
    revalidatePath(`/lesson/${lessonId}`);
};

export const refillHearts = async () => {
    const currentUserProgress = await getUserProgress();

    if (!currentUserProgress) {
        throw new Error("No se encontró progreso de usuario");
    }

    if (currentUserProgress.hearts === 5) {
        throw new Error("Los intentos están full");
    }

    if (currentUserProgress.points < POINTS_TO_REFILL) {
        throw new Error("Sin puntos suficientes");
    }

    await database.update(userProgress).set({
        hearts: 5,
        points: currentUserProgress.points - POINTS_TO_REFILL,
    }).where(eq(userProgress.userId, currentUserProgress.userId));

    revalidatePath("/shop");
    revalidatePath("/learn");
    revalidatePath("/quest");
    revalidatePath("/leaderboard");
}