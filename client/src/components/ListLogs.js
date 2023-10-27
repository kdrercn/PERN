import React, { Fragment, useEffect, useState } from "react";

import EditLogs from "./EditLogs";

const ListLogs = () => {


    const [logs, setLogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [logsPerPage] = useState(5); // Number of logs to display per page
  

    //delete

    const deleteLog = async (id) => {
        try {
            const deleteLog  = await fetch(`http://localhost:5000/logs/${id}`, {
                method: "DELETE"
            });
            
            setLogs(logs.filter(log => log.id !== id));
        } catch (err) {
            console.error(err.message)            
        }
        window.location = "/";
    }

    const getLogs = async () => {
        try {
            const response = await fetch("http://localhost:5000/logs")
            const jsonData = await response.json();
            
            setLogs(jsonData);


        } catch (err) {
            console.error(err.message);            
        }
    }
    const [isShown, setIsShown] = useState(false);
    const [buttonText, setButtonText] = useState("Show Accidents");
    const handleClick = event => {
        setIsShown(current => !current);
        if (buttonText === "Show Accidents") {
            setButtonText("Hide Accidents");
          } else {
            setButtonText("Show Accidents");
          }
    };
      

    useEffect(() => {
        getLogs();
    }, [])
    
    const indexOfLastLog = currentPage * logsPerPage;
    const indexOfFirstLog = indexOfLastLog - logsPerPage;
    const currentLogs = logs.slice(indexOfFirstLog, indexOfLastLog);
  
    const totalLogs = logs.length;
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalLogs / logsPerPage); i++) {
      pageNumbers.push(i);
    }
    
    // Function to change page
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    return (
      <Fragment>
        <div className="text-center">
          <button className="btn btn-info mt-3 mb-3 text-center" onClick={handleClick}>
            {buttonText}
          </button>
          {isShown && (
            <div>
              <table className="table text-center">
                <thead>
                  <tr>
                    <th>Local Authority</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Year</th>
                    <th>District</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {currentLogs.map((log) => (
                    <tr key={log.id}>
                      <td>{log.local_authority}</td>
                      <td>{log.latitude}</td>
                      <td>{log.longitude}</td>
                      <td>{log.year}</td>
                      <td>{log.district}</td>
                      <td>
                        <EditLogs log={log} />
                      </td>
                      <td>
                        <button className="btn btn-danger" onClick={() => deleteLog(log.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="pagination-container">
              <ul className="pagination">
                {pageNumbers.map((number) => (
                  <li key={number} className="page-item">
                    <button onClick={() => paginate(number)} className="page-link">
                      {number}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default ListLogs;