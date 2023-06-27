import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./dataSource";
import { Ad } from "./entities/ad";

const port = 5050;
const app = express();

app.use(express.json());

app.post("/api/ad", async (req, res) => {
  console.log(req.body);
  const addFromClient = new Ad();
  addFromClient.content = req.body.content;
  addFromClient.title = req.body.title;
  const result = await addFromClient.save();
  res.status(201).send(result);
});

app.get("/api/ad", async (_req, res) => {
  const result = await Ad.find();
  res.send(result);
});

const start = async () => {
  await AppDataSource.initialize();
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
};

start();
