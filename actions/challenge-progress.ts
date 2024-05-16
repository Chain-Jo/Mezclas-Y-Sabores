"use server";

import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

import database from "@/database/drizzle";
import { getUserProgress } from "@/database/queries";
import { challengeProgress, challenges, userProgress } from "@/database/schema";
// import { UserProgress } from '../components/user-progress';

export const upsertChallengeProgress = async (challengeId: number) => {
    const { userId } = await auth();

    if (!userId) {
        throw new Error("Sin autorización");
    }

    const currentUserProgress = await getUserProgress();

    if (!currentUserProgress) {
        throw new Error("No se encontró el progreso del usuario");
    }

    const challenge = await database.query.challenges.findFirst({
        where: eq(challenges.id, challengeId)
    });

    if (!challenge) {
        throw new Error ("No se encontró la pregunta");
    }

    const lessonId = challenge.lessonId;

    const existingChallengeProgress = await database.query.challengeProgress.findFirst({
        where: and(
            eq(challengeProgress.userId, userId),
            eq(challengeProgress.challengeId, challengeId),
        ),
    });

    const isPrectice = !!existingChallengeProgress;

    // TODO: aquí se ve si el usuario ha hecho la lección antes 0653
    if (currentUserProgress.hearts === 0 && !isPrectice) {
        return { error: "corazones" };
    }

    if (isPrectice) {
        await database.update(challengeProgress).set({
            completed: true,
        })
        .where(
            eq(challengeProgress.id, existingChallengeProgress.id)
        );

        await database.update(userProgress).set({
            hearts: Math.min(currentUserProgress.hearts + 1, 5),
            points: currentUserProgress.points + 10,
        }).where(eq(userProgress.userId, userId));

        revalidatePath("/learn");
        revalidatePath("/lesson");
        revalidatePath("/quests");
        revalidatePath("/leaderboard");
        revalidatePath(`/lesson/${lessonId}`);
        return;
    }

    await database.insert(challengeProgress).values({
       challengeId,
       userId,
       completed: true, 
    });

    await database.update(userProgress).set({
        points: currentUserProgress.points + 10,
    }).where(eq(userProgress.userId, userId));

    revalidatePath("/learn");
    revalidatePath("/lesson");
    revalidatePath("/quests");
    revalidatePath("/leaderboard");
    revalidatePath(`/lesson/${lessonId}`);

}