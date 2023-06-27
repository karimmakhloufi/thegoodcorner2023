import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "thegoodcornerdb.sqlite",
  synchronize: true,
  logging: ["error", "query"],
  entities: ["src/entities/*"],
});
