"use client";

import Navbar from "@/components/admin/navbar";
import Footer from "@/components/admin/footer";
import Menu from "@/components/admin/menu";
import { Admin, Resource, defaultTheme, resolveBrowserLocale } from "react-admin";
import { createTheme } from "@mui/material/styles";
import indigo from "@mui/material/colors/indigo";
import { green, grey } from '@mui/material/colors';
import pink from "@mui/material/colors/pink";
import red from "@mui/material/colors/red";
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

import polyglotI18nProvider from 'ra-i18n-polyglot';
import englishMessages from 'ra-language-english';
import frenchMessages from 'ra-language-french';
import { i18nProvider } from './i18nProvider';

const dataProvider = simpleRestProvider("/api");
// const dataProvider = jsonServerProvider(
//   "https://jsonplaceholder.typicode.com"
// );


import jsonServerProvider from "ra-data-json-server";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: grey,
    secondary: green,
    error: red,
  },
});

// const messages = {
//   fr: frenchMessages,
//   en: englishMessages,
// };
// const i18nProvider = polyglotI18nProvider(locale => messages[locale], resolveBrowserLocale()) // or 'fr'

export default function AdminLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {


  return (
    <section className="admin">
      <div className="main">

        <Admin
          i18nProvider={i18nProvider}
          theme={theme}
          dataProvider={dataProvider}
        >
          <Resource
            name="courses"
            list={CourseList}
            create={CourseCreate}
            edit={CourseEdit}
            recordRepresentation="titulo"
            options={{ label: "Cursos" }}
          />
          <Resource
            name="units"
            list={UnitList}
            create={UnitCreate}
            edit={UnitEdit}
            recordRepresentation="titulo"
            options={{ label: "Unidades" }}
          />
          <Resource
            name="lessons"
            list={LessonList}
            create={LessonCreate}
            edit={LessonEdit}
            recordRepresentation="titulo"
            options={{ label: "Lecciones" }}
          />
          <Resource
            name="recipes"
            list={RecipeList}
            create={RecipeCreate}
            edit={RecipeEdit}
            recordRepresentation="titulo"
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
        {/* <TableLog/> */}
        <div className="adminContainer">
          <div className="contentContainer">{children}</div>
        </div>
        <Footer />
      </div>
    </section>
  );
}
