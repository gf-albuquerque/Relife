import "reflect-metadata";
import { DataSource } from "typeorm";
require("dotenv/config");

export const AppDataSource = new DataSource({
  type: "postgres",
  url: "postgres://relifeadmin:j1tkBPr3qUNePgjjLHcWTseLYilb8S0v@dpg-cdshdd1a6gdu2488r3dg-a/relifedb",
  synchronize: false,
  logging: false,
  entities: ["./src/entities/*.ts"],
  migrations: ["./src/database/migrations/*.ts"],
});
