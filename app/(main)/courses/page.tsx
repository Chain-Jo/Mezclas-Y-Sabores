import { getCourses, getUserProgress } from "@/database/queries";
import { List } from "./list";

const CoursesPage = async() => {

    // Queries
    const coursesData = getCourses();
    const userProgressData = getUserProgress();

    const [
        courses,
        userProgress,
    ] = await Promise.all([
        coursesData,
        userProgressData,
    ]);

    return (
        <div className="h-full max-w-[912px] px-3 mx-auto">
            <h1 className="text-2xl font-bold text-neutral-700">
                Cursos disponibles
            </h1>
            <List
                // courses={ coursesData }
                courses={ courses }
                // activeCourseId={ userProgressData?.activeCourseId }
                activeCourseId={ userProgress?.activeCourseId }
            />
            {/* {JSON.stringify(coursesData)} */}
        </div>
    );
};



export default CoursesPage;