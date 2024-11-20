import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js";
import courseRoute from "./routes/course.route.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT ||  3000;



// default middleware
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

// apis
app.use("/api/v1/user", userRoute);
app.use("/api/v1/course", courseRoute);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server listen at port ${PORT}`)
})