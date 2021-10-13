import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER_NAME, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DIALECT,
  logging: false,
  define: {
    freezeTableName: true,
  },
});
await sequelize.authenticate(console.log("sequelize on"));

const server = {
  createTable: async () => {
    sequelize.query(`
    CREATE TABLE IF NOT EXISTS tasks(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    task VARCHAR(30) NOT NULL);`);
  },
  getAll: async () => {
    return sequelize.query("SELECT * FROM tasks WHERE 1;", { type: "SELECT" });
  },
  getOne: async (data) => {
    return sequelize.query("SELECT * FROM tasks WHERE id = ? OR task = ?;", {
      type: "SELECT",
      replacements: [data.id, data.task],
    });
  },
  post: async (data) => {
    sequelize.query("INSERT INTO tasks (task) VALUES (?);", { replacements: [data.task] });
  },
  delete: async (data) => {
    sequelize.query("DELETE FROM tasks WHERE id = ? OR task = ?;", {
      replacements: [data.id, data.task],
    });
  },
};

await server.createTable();

export default server;
