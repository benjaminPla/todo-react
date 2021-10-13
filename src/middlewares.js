import server from "../server/server.js";

let response = { success: false, body: null };

const middlewares = {
  missingId: (req, res, next) => {
    response.body = "missing 'id' field on request";
    !req.body.id ? res.status(400).send(response) : next();
  },
  missingTask: (req, res, next) => {
    response.body = "missing 'task' field on request";
    !req.body.task ? res.status(400).send(response) : next();
  },
  alreadyExists: async (req, res, next) => {
    response.body = "task already exists";
    (await server.getOne(req.body)) == "" ? next() : res.status(400).send(response);
  },
  notFound: async (req, res, next) => {
    response.body = "task not found";
    (await server.getOne(req.body)) == "" ? res.status(400).send(response) : next();
  },
};

export default middlewares;
