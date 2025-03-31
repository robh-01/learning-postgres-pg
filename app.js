import dotenv from "dotenv";
import path from "path";
import express from "express";
import userRouter from "./routes/userRouter.js";

const app = express();
dotenv.config();

app.set("view engine", "ejs");

//setting views folder in our case is optional as our views folder is in root of the project and named "views"
app.set("views", path.join(import.meta.dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use("/", userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
