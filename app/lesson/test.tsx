"use client";

import { toast } from "sonner";
import Image from "next/image";
import Confetti from "react-confetti";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useAudio, useWindowSize, useMount } from "react-use";

import { reduceHearts, reduceHeartsTest } from "@/actions/user-progress";
import { useHeartsModal } from "@/store/use-hearts-modal";
import { challengeOptions, challenges } from "@/database/schema";
import { usePracticeModal } from "@/store/use-practice-modal";
import { upsertChallengeProgress } from "@/actions/challenge-progress";

import { Header } from "./header";
import { Footer } from "./footer";
import { Reto } from "./challenge";
import { ResultCard } from "./result-card";
import { QuestionBubble } from "./cuestion-bubble";
import { useTestModal } from "@/store/use-test-modal";

type Props = {
    initialPercentage: number;
    isTest: boolean;
    initialHearts: number;
    initialLessonId: number;
    initialLessonChallenges: (typeof challenges.$inferSelect & {
        completed: boolean;
        challengeOptions: typeof challengeOptions.$inferSelect[];
    })[];
};

export const Test = ({
    initialPercentage,
    isTest,
    initialHearts,
    initialLessonId,
    initialLessonChallenges,
}: Props) => {

    const { open: openHeartsModal } = useHeartsModal();

    const { open: openPracticeModal } = usePracticeModal();

    const { open: openTestModal } = useTestModal();

    useMount(() => {
        if (initialPercentage === 100) {
            openPracticeModal();
        }
    });

    useMount(() => {
        if (isTest === true) {
            openTestModal();
        }
    });
    
    const { width, height } = useWindowSize();

    const router = useRouter();

    const [finishAudio] = useAudio({ src: "/audio/finish.mp3", autoPlay: true });
    const [
        correctAudio,
        _c,
        correctControls,
    ] = useAudio({ src: "/audio/correct.mp3" });
    const [
        incorrectAudio,
        _i,
        incorrectControls,
    ] = useAudio({ src: "/audio/incorrect.mp3" });
    const [pending, startTransition] = useTransition();

    const [lessonId, setLessonId] = useState(initialLessonId);
    const [hearts, setHearts] = useState(initialHearts);
    const [percentage, setPercentage] = useState(()=> {
        return initialPercentage === 100 ? 0 : initialPercentage;
    });
    const [challenges] = useState(initialLessonChallenges);
    const [activeIndex, setActiveIndex] = useState(() => {
        const uncompletedIndex = challenges.findIndex((reto) => !reto.completed);
        return uncompletedIndex === -1 ? 0 : uncompletedIndex;
    });

    const [selectedOption, setSelectedOption] = useState<number | undefined>();

    const [status, setStatus] = useState<"correct" | "wrong" | "none">("none");

    const currentChallenge = challenges[activeIndex];
    const options = currentChallenge?.challengeOptions ?? [];

    const onNext = () => {
        setActiveIndex((current) => current + 1);
    };

    const onSelect = (id: number) => {
        if (status !== "none") return;

        setSelectedOption(id);
    };

    const onContinue = () => {
        if (!selectedOption) return;

        if (status === "wrong") {
            setStatus("none");
            setSelectedOption(undefined);
            return;
        }
        if (status === "correct") {
            onNext();
            setStatus("none");
            setSelectedOption(undefined);
            return;
        }

        const correctOption = options.find((option) => option.correcto);

        if (!correctOption) {
            return;
        }

        if (correctOption.id === selectedOption) {
            startTransition(() => {
                upsertChallengeProgress(currentChallenge.id)
                    .then((response) => {
                        if (response?.error === "corazones") {
                            openHeartsModal();
                            return;
                        }
                        correctControls.play();
                        setStatus("correct");
                        setPercentage((prev) => prev + 100 / challenges.length);

                        // This is a practice
                        if (initialPercentage === 0) {
                            setHearts((prev) => Math.min(prev + 1, 5))
                        }
                    })
                    .catch(() => toast.error("Algo salió mal, inténtelo de nuevo"))
            });
            console.log("Incorrect Option!");
        } else {
            startTransition(() => {
                reduceHeartsTest(currentChallenge.id)
                    .then((response) => {
                        if (response?.error === "corazones") {
                            openHeartsModal();
                            return;
                        }
                        
                        incorrectControls.play();
                        setStatus("wrong");
                        if (!response?.error) {
                            setHearts((prev) => Math.max(prev - 6, 0));
                        }
                    })
                    .catch(() => toast.error("Algo salió mal, inténtelo de nuevo"));
            });
        }
    };

    // Finish page
    if (!currentChallenge) {
        return (
            <>
            {finishAudio}
            <Confetti
                width={width}
                height={height}
                recycle={false}
                numberOfPieces={500}
                tweenDuration={10000}
            />
            {/* añadido algunos estilos como el gap y el w-[] */}
                <div className="flex flex-col gap-y-4 lg:gap-y-8 mx-auto text-center items-center justify-center h-full w-[500px]">
                    <Image
                        src="/img/finish.png"
                        alt="Finish"
                        className="hidden lg:block"
                        height={200}
                        width={200}
                    />
                    <Image
                        src="/img/finish.png"
                        alt="Finish"
                        className="block lg:hidden"
                        height={100}
                        width={100}
                    />
                    <h1 className="text-xl lg:text-3xl font-bold text-neutral-700">
                        ¡Buen trabajo! <br />
                        Completaste la lección.
                    </h1>
                    <div className="flex items-center w-full gap-x-12 ">
                        <ResultCard
                            variant="points"
                            value={challenges.length * 10}
                        />
                        <ResultCard
                            variant="hearts"
                            value={hearts}
                        />
                    </div>
                </div>
                <Footer
                    lessonId={lessonId}
                    status="completed"
                    onCheck={() => router.push("/learn")}
                />
            </>
        );
    }

    const titulo = currentChallenge.type === "COMPLETAR" 
    ? "Selecciona el correcto" 
    : currentChallenge.question

    return (
        <>
            {incorrectAudio}
            {correctAudio}
            <Header
                hearts={hearts}
                percentage={percentage}
                test={isTest}
            />
            <div className="flex-1">
                <div className="h-full flex items-center justify-center">
                    {/* cambié el lg:w-[] de 600 a 1000px */}
                    <div className="lg:min-h-[350px] lg:w-[1000px] w-full px-6 lg:px-0 flex flex-col gap-y-12">
                        <h1 className="text-lg lg:text-3xl text-center lg:text-start font-bold text-neutral-700">
                            {titulo}
                        </h1>
                        <div>

                            {currentChallenge.type === "COMPLETAR" && (
                                <QuestionBubble question={currentChallenge.question}/>
                            )}
                            {currentChallenge.activo === true
                                ?
                                <Reto
                                    options={options}
                                    onSelect={onSelect}
                                    status={status}
                                    selectedOption={selectedOption}
                                    disabled={pending}
                                    type={currentChallenge.type}
                                    activo={currentChallenge.activo}
                                />
                                
                                : null
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer
                disabled={pending || !selectedOption}
                status={status}
                onCheck={onContinue}
            />
        </>
    )
}