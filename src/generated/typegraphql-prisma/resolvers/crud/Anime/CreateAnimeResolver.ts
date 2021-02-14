import * as TypeGraphQL from "type-graphql";
import { CreateAnimeArgs } from "./args/CreateAnimeArgs";
import { Anime } from "../../../models/Anime";

@TypeGraphQL.Resolver(_of => Anime)
export class CreateAnimeResolver {
  @TypeGraphQL.Mutation(_returns => Anime, {
    nullable: false
  })
  async createAnime(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateAnimeArgs): Promise<Anime> {
    return ctx.prisma.anime.create(args);
  }
}
