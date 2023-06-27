import "reflect-metadata";
import { AppDataSource } from "./dataSource";
import { Ad } from "./entities/ad";

const start = async () => {
  await AppDataSource.initialize();
  const bikeAd = new Ad();
  bikeAd.title = "I'm selling a bike";
  bikeAd.content = "The price is 50 €";
  bikeAd.save();
};

start();
