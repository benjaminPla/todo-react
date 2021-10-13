import express from "express";
import routes from "./src/routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT;
app.listen(PORT, console.log("server on port: " + PORT));
