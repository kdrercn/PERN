import React, { Fragment, useState } from "react";



const EditLogs = ({ log }) => {
    const [local_authority, setLocalAuthority] = useState(log.local_authority)
    const [latitude, setLatitude] = useState(log.latitude)
    const [longitude, setLongitude] = useState(log.longitude)
    const [year, setYear] = useState(log.year)
    const [district, setDistrict] = useState(log.district)

    //edit

    const updateDistrict = async(e) => {
        e.preventDefault();
        try {
            const body = { district };
            const response = await fetch(`http://localhost:5000/logs/${log.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })

            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }


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

        <div 
            className="modal" 
            id={`id${log.id}`}
            onClick={() => setDistrict(log.district)}
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Edit Log</h4>
                        <button type="button" 
                                className="close" 
                                data-dismiss="modal" 
                                onClick={() => setDistrict(log.district)}>
                                    &times;
                        </button>
                    </div>

            <div className="modal-body">
                <label htmlFor="exampleFormControlSelect1">Example select</label>
                    <select className="form-control" id="exampleFormControlSelect1" >
                        <option value="local_authority">Local Authority</option>
                        <option value="latitude">Latitude</option>
                        <option value="longitude">Longitude</option>
                        <option value="year">Year</option>
                        <option value="district">District</option>
                    </select>
                <input type="text" className="form-control mt-2" value={district} onChange={e => setDistrict(e.target.value)}></input>
            </div>

            <div className="modal-footer">
                <button type="button" 
                className="btn btn-warning" 
                data-dismiss="modal"
                onClick={e => updateDistrict(e)}
                >
                    Edit
                </button>
                <button 
                    type="button" 
                    className="btn btn-danger" 
                    data-dismiss="modal"
                    onClick={() => setDistrict(log.district)}
                >
                    Close
                </button>
            </div>

            </div>
        </div>
        </div>
    </Fragment>
    )
};

export default EditLogs;