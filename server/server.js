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

export default sequelize;
