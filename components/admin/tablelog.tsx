"use client"
import React, { useEffect, useState } from "react";

const nextLink = process.env.NEXT_PUBLIC_URL!;

const TableLog = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
      {

      }
      
        <div className="flex flex-col items-center justify-between">

          <div className="table">
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
                            {!action.userName.includes(admin)
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

export default TableLog;
