import { Ad } from "../entities/ad";
import { Query, Resolver } from "type-graphql";

@Resolver(Ad)
export class AdResolver {
  @Query(() => [Ad])
  async getAllAds() {
    const result = Ad.find();
    return result;
  }
}
