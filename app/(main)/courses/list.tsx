"use client";

import { toast } from 'sonner';
import { useTransition } from 'react';
import { useRouter } from 'next/navigation';

import { courses, userProgress } from '../../../database/schema';
import { upsertUserProgress } from '@/actions/user-progress';

import { Card } from './card';

type Props = {
    courses: typeof courses.$inferSelect[];
    activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
};

export const List = ( {
    courses,
    activeCourseId
}: Props ) => {

    const router = useRouter();
    const [pending, startTransition] = useTransition();

    const onClick = (id: number) => {
        if (pending) return;

        if (id === activeCourseId) {
            return router.push("/learn");
        };

        startTransition(() => {
            upsertUserProgress(id)
                .catch(()  => toast.error("Algo salió mal."));
        });
    };

    return (
        <div className = 'pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4'>
            { courses.map(( curso ) => (
                <Card
                    key = {curso.id}
                    id = {curso.id}
                    titulo = {curso.titulo}
                    enlace_imagen = {curso.enlace_imagen}
                    onClick = {onClick}
                    disabled = {pending}
                    active = {curso.id === activeCourseId}
                    activo = {curso.activo}
                />
            )) }
        </div>
    );
};