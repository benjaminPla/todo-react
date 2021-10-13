import express from "express";
import middlewares from "./middlewares.js";
import controllers from "./controllers.js";

const routes = express.Router();

routes.get("/getAll", controllers.getAll);
routes.post("/post", middlewares.missingTask, middlewares.alreadyExists, controllers.post);
routes.delete("/delete", middlewares.missingTask, middlewares.notFound, controllers.delete);

export default routes;
