"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
interface DataObject {
  date: string; // Assuming date is in string format
  value: number;
  group?: string;
}
const nextLink = process.env.NEXT_PUBLIC_URL!;

function organizeByMonthAndDay(data: DataObject[]): DataObject[] {
  return data.map((item) => {
    // Parse the date
    const date = new Date(item.date);
    const month = date.getMonth() + 1; // Months are zero-based in JavaScript
    const year = date.getFullYear();
    const day = date.getDate();
    const monthDayYear = `${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    }`;

    // Return a new object with the group property
    return { ...item, group: monthDayYear };
  });
}



const label = "value";
const ChartBox = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
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

  const newData: DataObject[] = [];
  for (let i = 0; i < data.length; i++) {
    // @ts-ignore: Unreachable code error
    newData.push({ value: i + 1, date: data[i].createdAt });
  }

  const organizedData: DataObject[] = organizeByMonthAndDay(newData);
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <Image
            src="img/admin/userIcon.svg"
            alt="user"
            width={30}
            height={30}
          />
          <h2>Cantidad de Usuarios</h2>
        </div>
        <h2>{organizedData.length}</h2>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={organizedData}>
              <Line type="monotone" dataKey="value" dot={false} />
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none"}}
                position={{ x: 140, y: 150 }}
                
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
     
    </div>
  );
};

export default ChartBox;
