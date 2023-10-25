import React, { Fragment, useState } from "react";

const InputLogs = () => {

    const [local_authority, setLocalAuthority] = useState("")
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")
    const [year, setYear] = useState("")
    const [district, setDistrict] = useState("")

    const onSubmitForm = async (e) => {
        e.preventDefault()
        try {
            const body = {
                local_authority,
                latitude,
                longitude,
                year,
                district
            };
            await fetch("http://localhost:5000/logs", {
                method: "POST",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.alert("Success!");
            window.location = "/";
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">UK Accidents</h1>
            <form className="text-center mt-5 " onSubmit={onSubmitForm}>
                <input 
                    type="text" required
                    className="form-control mt-2" 
                    value={local_authority}
                    placeholder="Local Authority (E00000000)"
                    onInput={e => e.target.setCustomValidity("")}
                    onInvalid={e => e.target.setCustomValidity("Local Authority is required")}
                    onChange={e => setLocalAuthority(e.target.value)}
                    
                />
                <input 
                    type="number" required
                    className="form-control mt-2" 
                    value={latitude}
                    placeholder="Latitude (51.50000)"
                    onInput={e => e.target.setCustomValidity("")}
                    onInvalid={e => e.target.setCustomValidity("Latitude is required")}
                    onChange={e => setLatitude(e.target.value)}
                />
                <input 
                    type="number" required
                    className="form-control mt-2" 
                    value={longitude}
                    placeholder="Longitude (-0.08000)"
                    onInput={e => e.target.setCustomValidity("")}
                    onInvalid={e => e.target.setCustomValidity("Longitude is required")}
                    onChange={e => setLongitude(e.target.value)}
                />
                <input 
                    type="number" required
                    className="form-control mt-2" 
                    value={year}
                    placeholder="Year (2005)"
                    onInput={e => e.target.setCustomValidity("")}
                    onInvalid={e => e.target.setCustomValidity("Year is required")}
                    onChange={e => setYear(e.target.value)}
                />
                <input 
                    type="text" required
                    className="form-control mt-2" 
                    value={district}
                    placeholder="District (City of London)"
                    onInput={e => e.target.setCustomValidity("")}
                    onInvalid={e => e.target.setCustomValidity("District is required")}
                    onChange={e => setDistrict(e.target.value)}
                />
                <div className="text-center">
                    <button className="btn btn-success mt-3">Add Accident</button>
                </div>
            </form>
        </Fragment>
    )
}

export default InputLogs;