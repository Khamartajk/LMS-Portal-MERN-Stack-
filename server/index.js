import express from 'express';
import connectDB from './database/db.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRoutes from './routes/user.route.js';

dotenv.config({});

// calling database connection file
connectDB();


const app = express();
const PORT = process.env.PORT || 5000;


// default middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin : "http://localhost:8000",
  credentials:true
}))

// apis comes here
app.use("/api/v1/user",userRoutes)



app.listen(PORT,() => {
  console.log(`Server is running on http://localhost:${PORT}`);
})
