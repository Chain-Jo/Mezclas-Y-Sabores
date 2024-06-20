"use client";

import Navbar from "@/components/admin/navbar";
import Footer from "@/components/admin/footer";
import Menu from "@/components/admin/menu";
import { Admin, Resource, defaultTheme } from "react-admin";
import { createTheme } from "@mui/material/styles";
import indigo from "@mui/material/colors/indigo";
import pink from "@mui/material/colors/pink";
import red from "@mui/material/colors/red";
// import { useMyI18nProvider } from './src/i18nProvider';
import simpleRestProvider from "ra-data-simple-rest";

import { CourseList } from "./course/list";
import { CourseCreate } from "./course/create";
import { CourseEdit } from "./course/edit";

import { UnitList } from "./unit/list";
import { UnitCreate } from "./unit/create";
import { UnitEdit } from "./unit/edit";

import { LessonList } from "./lesson/list";
import { LessonCreate } from "./lesson/create";
import { LessonEdit } from "./lesson/edit";

import { ChallengeList } from "./challenge/list";
import { ChallengeCreate } from "./challenge/create";
import { ChallengeEdit } from "./challenge/edit";

import { ChallengeOptionList } from "./challengeOption/list";
import { ChallengeOptionCreate } from "./challengeOption/create";
import { ChallengeOptionEdit } from "./challengeOption/edit";

import { RecipeList } from "./recipe/list";
import { RecipeCreate } from "./recipe/create";
import { RecipeEdit } from "./recipe/edit";

const dataProvider = simpleRestProvider("/api");

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: indigo,
    secondary: pink,
    error: red,
  },
});

export default function AdminLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="admin">
      <div className="main">
        <Admin
          theme={theme}
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
        <div className="adminContainer">
          <div className="contentContainer">{children}</div>
        </div>
        <Footer />
      </div>
    </section>
  );
}
