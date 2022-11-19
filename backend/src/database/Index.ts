import "reflect-metadata";
import { DataSource } from "typeorm";
require("dotenv/config");

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST_NAME as string,
  port: 5432,
  username: process.env.USERNAME as string,
  password: process.env.PASSWORD as string,
  database: process.env.DATABASE_NAME as string,
  synchronize: false,
  logging: false,
  entities: ["./src/entities/*.ts"],
  migrations: ["./src/database/migrations/*.ts"],
});
