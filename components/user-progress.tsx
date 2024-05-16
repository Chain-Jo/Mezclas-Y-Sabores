import Link from "next/link";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";

import { courses } from "@/database/schema";
import { Button } from "@/components/ui/button";

type Props = {
    activeCourse: typeof courses.$inferSelect; 
    hearts: number;
    points: number;
};

export const UserProgress = ({ 
    activeCourse, 
    points, 
    hearts, 
}: Props) => {
    return (
        <div className="flex items-center justify-between gap-x-2 w-full">
            <Link href="">
                <Button variant="ghost">
                    <Image
                        src={activeCourse.imageSrc}
                        alt={activeCourse.title}
                        // className="rounded-md border"
                        className="rounded-md"
                        width={40}
                        height={40}
                    />
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-orange-500">
                    <Image src="/img/estrella.png" height={28} width={28} alt="Points" className="mr-2"/>
                    {points}
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-rose-500">
                    <Image src="/img/corazon.png" height={22} width={22} alt="Hearts" className="mr-2"/>
                    {1 === 1 
                    ? hearts
                    : <InfinityIcon className="h-4 w-4 strke-[3]"/> }
                 
                </Button>
            </Link>
        </div>
    )
}