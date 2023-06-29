import "reflect-metadata";
import { AppDataSource } from "./dataSource";
import { Ad } from "./entities/ad";

const start = async () => {
  await AppDataSource.initialize();
};

start();
