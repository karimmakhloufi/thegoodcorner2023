import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./dataSource";

const port = 5050;
const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Test POST");
});

const start = async () => {
  await AppDataSource.initialize();
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
};

start();
