import TableAproved from "@/components/admin/tableaproved";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { redirect } from "next/navigation";
import { FeedWrapper } from "@/components/feed-wrapper";
import { UserProgress } from "@/components/user-progress";
import { StickyWrapper } from "@/components/sticky-wrapper";

const aprovedPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
            {/* <StickyWrapper> */}
                {/* <UserProgress 
                    // activeCourse={userProgress.activeCourse}
                /> */}

            {/* </StickyWrapper> */}
            <FeedWrapper>
                <div className="w-full flex flex-col items-center">
                    <Image
                        src="/img/calificacion.png"
                        alt="Shop"
                        height={100}
                        width={100}
                    />
                    <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
                        Reportes del sistema
                    </h1>
                    <p className="text-muted-foreground text-center text-lg mb-6">
                        Como van los usuarios del curso.
                    </p>

                    <Separator className="mb-4 h-0.5 rounded-full"/>
                        <div 
                        // className="flex items-center w-full p-2 px-4 rounded-xl hover:bg-gray-200/50"
                        className="flex flex-col items-center w-full p-2 px-4 rounded-xl justify-between"
                    >

                        <TableAproved />
                    </div>



                </div>
            </FeedWrapper>
        </div>
    // <div>
    //     <TableAproved></TableAproved>
    // </div>
  );
};

export default aprovedPage;
