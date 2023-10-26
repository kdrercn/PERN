import React, { Fragment, useEffect, useState } from "react";

import EditLogs from "./EditLogs";

const ListLogs = () => {


    const [logs, setLogs] = useState([]);

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
    const [isShown, setIsShown] = useState(true);
    const handleClick = event => {
        // 👇️ toggle shown state
        setIsShown(current => !current);
    
        // 👇️ or simply set it to true
        // setIsShown(true);
      };
    

    useEffect(() => {
        getLogs();
    }, [])
    
    return <Fragment>
        <div className="text-center">
            <button 
            className="btn btn-info mt-5 text-center"
            onClick={handleClick}>
                Show Accidents
            </button>

        {/* 👇️ show elements on click */}
        {isShown && (
        <div>
            <table className="table mt-5 text-center">
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
            {logs.map(log => (
                <tr key={log.id}>
                    <td>{log.local_authority}</td>
                    <td>{log.latitude}</td>
                    <td>{log.longitude}</td>
                    <td>{log.year}</td>
                    <td>{log.district}</td>
                    <td>
                        <EditLogs log = {log} />
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
        </div>
        )}
        
        </div>
    </Fragment>;
};

export default ListLogs;