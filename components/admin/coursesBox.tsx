"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";

interface DataObject {
  titulo: string;
  value: number;
}

const newData = [
  { value: 1, date: "2024-05-10" },
  { value: 2, date: "2024-05-11" },
  { value: 3, date: "2024-05-12" },
  { value: 4, date: "2024-06-15" },
  { value: 5, date: "2024-08-10" },
];

const label = "value";
const CoursesBox = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/courses");
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

  const newData: DataObject[] = [];
  for (let i = 0; i < data.length; i++) {
    newData.push({ value: data[i].id, titulo: data[i].titulo });
  }

  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="titulo">
          <Image
            src="img/admin/userIcon.svg"
            alt="user"
            width={30}
            height={30}
          />
          <h2>Cantidad de Cursos</h2>
        </div>
        <h2>{newData.length}</h2>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={newData}>
              <Line type="monotone" dataKey="value" dot={false} />
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 140, y: 150 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default CoursesBox;
