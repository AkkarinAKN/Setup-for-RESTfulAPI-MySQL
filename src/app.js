import express from "express";
import morgan from "morgan";
import cors from "cors";
//Routes
import carRoutes from "./routes/Car";

const app = express();
//setting
app.set("port", 5000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//ROutes
app.use("/api/car", carRoutes);


//error status
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something is wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });

export default app;
