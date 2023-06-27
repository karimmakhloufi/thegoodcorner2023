import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./dataSource";

const port = 5050;
const app = express();

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

const start = async () => {
  await AppDataSource.initialize();
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
};

start();
