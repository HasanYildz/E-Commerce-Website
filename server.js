import express from 'express';
import colors from "colors";
import dotenv from 'dotenv';


// env
dotenv.config();


//Object
const app = express()


//API
app.get('/', (req, res) => {
    res.send("<h1>Welcome To Ecommerce apps</h1>")
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port${PORT}`.bgCyan.white);
})