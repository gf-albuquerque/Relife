import bodyParser = require("body-parser");
import * as express from "express";
import { Request, Response } from "express";
import { AppDataSource } from "./database/Index";
import { routes } from "./routes/Routes";

AppDataSource.initialize()
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use(bodyParser.json());

    app.use(routes);

    app.listen(3333, () => console.log("Server is running"));
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
