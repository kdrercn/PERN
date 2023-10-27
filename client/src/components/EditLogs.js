import React, { Fragment, useState } from "react";

const EditLogs = ({ log }) => {
  const [selectedOption, setSelectedOption] = useState("local_authority");
  const [inputValue, setInputValue] = useState("");

  const updateLog = async (e) => {
    e.preventDefault();
    try {
      const updatedLog = { ...log, [selectedOption]: inputValue };
      const response = await fetch(`http://localhost:5000/logs/${log.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedLog),
      });
  
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${log.id}`}
      >
        Edit
      </button>

      <div className="modal" id={`id${log.id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Log</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <label htmlFor="exampleFormControlSelect1">Accident ID : {log.id}</label>
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                onChange={(e) => setSelectedOption(e.target.value)}
                value={selectedOption}
              >
                <option value="local_authority">Local Authority</option>
                <option value="latitude">Latitude</option>
                <option value="longitude">Longitude</option>
                <option value="year">Year</option>
                <option value="district">District</option>
              </select>
              <input
                type="text"
                className="form-control mt-2"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={updateLog}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditLogs;
