import { Ad } from "../entities/ad";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver(Ad)
export class AdResolver {
  @Query(() => [Ad])
  async getAllAds() {
    const result = Ad.find();
    return result;
  }

  @Query(() => Ad)
  async getAdById(@Arg("id") idArg: number) {
    const result = Ad.findOneByOrFail({ id: idArg });
    return result;
  }

  @Mutation(() => Ad)
  async addAd(
    @Arg("title") titleArg: string,
    @Arg("content") contentArg: string
  ) {
    const adFromClient = new Ad();
    adFromClient.title = titleArg;
    adFromClient.content = contentArg;
    const result = await adFromClient.save();
    return result;
  }
}
