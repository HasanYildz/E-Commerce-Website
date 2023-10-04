import express from 'express';
import colors from "colors";
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';

// env
dotenv.config();

//DataBase config
connectDB();

//Object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//Routes

app.use("/api/v1/auth", authRoutes);

//API
app.get('/', (req, res) => {
    res.send("<h1>Welcome To Ecommerce appp</h1>")
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port${PORT}`.bgCyan.white);
})