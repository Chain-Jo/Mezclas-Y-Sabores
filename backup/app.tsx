"use client";

import { Admin, Resource } from "react-admin";
// import { useMyI18nProvider } from './src/i18nProvider';
import simpleRestProvider from "ra-data-simple-rest";

import { CourseList } from "../app/admin/course/list";
import { CourseCreate } from "../app/admin/course/create";
import { CourseEdit } from "../app/admin/course/edit";

import { UnitList } from '../app/admin/unit/list';
import { UnitCreate } from "../app/admin/unit/create";
import { UnitEdit } from "../app/admin/unit/edit";

import { LessonList } from "../app/admin/lesson/list";
import { LessonCreate } from "../app/admin/lesson/create";
import { LessonEdit } from "../app/admin/lesson/edit";

import { ChallengeList } from "../app/admin/challenge/list";
import { ChallengeCreate } from "../app/admin/challenge/create";
import { ChallengeEdit } from "../app/admin/challenge/edit";

import { ChallengeOptionList } from "../app/admin/challenge/challengeOption/list";
import { ChallengeOptionCreate } from "../app/admin/challenge/challengeOption/create";
import { ChallengeOptionEdit } from "../app/admin/challenge/challengeOption/edit";

import { RecipeList } from "../app/admin/recipe/list";
import { RecipeCreate } from "../app/admin/recipe/create";
import { RecipeEdit } from "../app/admin/recipe/edit";

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
