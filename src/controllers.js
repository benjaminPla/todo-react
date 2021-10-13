import server from "../server/server.js";

let response = { success: true, body: null };

const controllers = {
  getAll: async (req, res) => {
    response.body = await server.getAll();
    res.status(200).send(response);
  },
  post: (req, res) => {
    response.body = "successfully added task: " + req.body.task;
    server.post(req.body);
    res.status(200).send(response);
  },
  delete: (req, res) => {
    response.body = "successfully deleted task: " + req.body.task;
    server.delete(req.body);
    res.status(200).send(response);
  },
};

export default controllers;
