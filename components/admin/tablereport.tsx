"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePDF } from 'react-to-pdf';
const nextLink = process.env.NEXT_PUBLIC_URL!;

const TableReport = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { toPDF, targetRef } = usePDF({ filename: 'reporte.pdf' });


  const admin = "(admin)";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${nextLink}/api/actions`, {
          method: "GET",
        })
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

  return (
    <>
    {/* <button type="button" value="Imprimir" />
     */}
     <div className="w-full">

      <button onClick={() => toPDF()} className="p-2 flex items-center px-4 rounded-xl hover:bg-gray-200/50">
        Imprimir
      </button>
     </div>

      <div className="flex flex-col items-center justify-between" ref={targetRef}>
        <div className="table">
          <div className="bg-green-950 text-white flex items-center p-6">
              <Image
                src="/img/MYS-logo-512.png"
                alt="logo-MyS"
                height={40}
                width={40}
              />
            <h1 className="text-amber-500 tracking-wide text-2xl font-extrabold pl-6">
              MEZCLAS & SABORES
            </h1>
          </div>
          <table className="tableLog">
            <thead>
              <tr>
                <th><p>  Usuarios  </p></th>
                <th><p> Acciones </p></th>
                <th>  Fecha y Hora  </th>
              </tr>
            </thead>
            <tbody>
              {data.map((action: any) =>
                <tr key={action.actionId}>
                  {action.userName.includes(admin)
                    ?
                    null

                    :
                    <>
                      <td>  {action.userName} </td>
                      <td>  {action.actionName} </td>
                      <td>  {action.createdAt}  </td>
                    </>

                  }
                </tr>
              )}

            </tbody>
          </table>

        </div>
      </div>
    </>
  );
};

export default TableReport;
