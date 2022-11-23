import "reflect-metadata";
import { DataSource } from "typeorm";
require("dotenv/config");

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST_NAME,
  port: 5432,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: false,
  logging: false,
  entities: ["./src/entities/*.ts"],
  migrations: ["./src/database/migrations/*.ts"],
});
