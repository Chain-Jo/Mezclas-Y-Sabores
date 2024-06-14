"use client";

import { Admin, Resource } from "react-admin";
// import { useMyI18nProvider } from './src/i18nProvider';
import simpleRestProvider from "ra-data-simple-rest";

import { CourseList } from "./admin/course/list";
import { CourseCreate } from "./admin/course/create";
import { CourseEdit } from "./admin/course/edit";

import { UnitList } from './admin/unit/list';
import { UnitCreate } from "./admin/unit/create";
import { UnitEdit } from "./admin/unit/edit";

import { LessonList } from "./admin/lesson/list";
import { LessonCreate } from "./admin/lesson/create";
import { LessonEdit } from "./admin/lesson/edit";

import { ChallengeList } from "./admin/challenge/list";
import { ChallengeCreate } from "./admin/challenge/create";
import { ChallengeEdit } from "./admin/challenge/edit";

import { ChallengeOptionList } from "./admin/challengeOption/list";
import { ChallengeOptionCreate } from "./admin/challengeOption/create";
import { ChallengeOptionEdit } from "./admin/challengeOption/edit";

import { RecipeList } from "./admin/recipe/list";
import { RecipeCreate } from "./admin/recipe/create";
import { RecipeEdit } from "./admin/recipe/edit";

const dataProvider = simpleRestProvider("/api");

const App = () => {

    // const i18nProvider = useMyI18nProvider();
    // if (!i18nProvider) return null;

    return (
        <Admin 
            dataProvider={dataProvider}
            // i18nProvider={i18nProvider}
        >
            <Resource
                name="courses"
                list={CourseList}
                create={CourseCreate}
                edit={CourseEdit}
                recordRepresentation="title"
                options={{ label: "Cursos" }}
            />
            <Resource
                name="units"
                list={UnitList}
                create={UnitCreate}
                edit={UnitEdit}
                recordRepresentation="title"
                options={{ label: "Unidades" }}
            />
            <Resource
                name="lessons"
                list={LessonList}
                create={LessonCreate}
                edit={LessonEdit}
                recordRepresentation="title"
                options={{ label: "Lecciones" }}
            />
            <Resource
                name="recipes"
                list={RecipeList}
                create={RecipeCreate}
                edit={RecipeEdit}
                recordRepresentation="title"
                options={{ label: "Recetas" }}
            />
            <Resource
                name="challenges"
                list={ChallengeList}
                create={ChallengeCreate}
                edit={ChallengeEdit}
                recordRepresentation="question"
                options={{ label: "Preguntas" }}
            />
            <Resource
                name="challengeOptions"
                list={ChallengeOptionList}
                create={ChallengeOptionCreate}
                edit={ChallengeOptionEdit}
                recordRepresentation="text"
                options={{ label: "Respuestas" }}
            />
        </Admin>
    );
};

export default App;
