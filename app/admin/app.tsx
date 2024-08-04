"use client";

import React, { useEffect, useState } from "react";

import TopBox from "@/components/admin/topbox";
import ChartBox from "@/components/admin/chartbox";
import CoursesBox from "@/components/admin/coursesBox";

// import jsonServerProvider from "ra-data-json-server";
const nextLink = process.env.NEXT_PUBLIC_URL!;
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {

    // const dataProvider = jsonServerProvider(
    //   "https://jsonplaceholder.typicode.com"
    // );
  



    const fetchData = async () => {
      try {
        const response = await fetch(`${nextLink}/api/users`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const users = data;
  return (
    <div className="home">
      <div className="box box1 items-center justify-center flex flex-col">
        <TopBox props={users} />
      </div>
      <div className="box box2">
        <ChartBox />
      </div>
      <div className="box box3">
        <CoursesBox />
      </div>
    </div>
  );
}

export default App;
