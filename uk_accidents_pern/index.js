const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json())

//ROUTES

//create a accident log

app.post("/logs", async (req, res) => {
    try {
        const  logs = req.body;
        const newLog = await pool.query
        ("INSERT INTO accidents (local_authority, latitude, longitude, year, district) VALUES($1,$2,$3,$4,$5) RETURNING *",
        [logs.local_authority, logs.latitude, logs.longitude, logs.year, logs.district]);

        res.json(newLog.rows[0]);

    } catch (err) {
        console.error(err.message);       
    }
})

//get all accidents

app.get("/logs", async (req, res) => {
    try {
        const allLogs = await pool.query("SELECT * FROM accidents")
        res.json(allLogs.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//get a accident with id

app.get("/logs/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const log = await pool.query("SELECT * FROM accidents WHERE id = $1", [id])
        
        res.json(log.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//get a accident with district

app.get("/logs/district/:district", async (req, res) => {
    try {
        const { district } = req.params;
        const log1 = await pool.query("SELECT * FROM accidents WHERE district = $1", [district])
        
        res.json(log1.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//update an accident

app.put("/logs/:id", async (req, res) => {
    try {
        const { id } = req.params;
        
        const local_authority = req.body.local_authority;
        const latitude= req.body.latitude;
        const longitude = req.body.longitude;
        const year = req.body.year;
        const district = req.body.district;
        
        const updateLocal_authority = await pool.query("UPDATE accidents SET local_authority = $1 WHERE id = $2",
        [local_authority, id]);
        
        const updateLatitude = await pool.query("UPDATE accidents SET latitude = $1 WHERE id = $2",
        [latitude, id]);
        
        const updateLongitude = await pool.query("UPDATE accidents SET longitude = $1 WHERE id = $2",
        [longitude, id]);
        
        const updateYear = await pool.query("UPDATE accidents SET year = $1 WHERE id = $2",
        [year, id]);
        
        const updateDistrict = await pool.query("UPDATE accidents SET district = $1 WHERE id = $2",
        [district, id]);
        
        res.json("Log was updated");
    } catch (err) {
        console.error(err.message);
    }
})

//delete an accident

app.delete("/logs/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteLog = await pool.query("DELETE FROM accidents WHERE id = $1",
        [id]);
        res.json("Log was deleted")
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(5000, () =>{
    console.log("server has started on port 5000");
});