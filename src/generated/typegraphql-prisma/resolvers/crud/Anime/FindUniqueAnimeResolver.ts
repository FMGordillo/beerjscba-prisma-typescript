import * as TypeGraphQL from "type-graphql";
import { FindUniqueAnimeArgs } from "./args/FindUniqueAnimeArgs";
import { Anime } from "../../../models/Anime";

@TypeGraphQL.Resolver(_of => Anime)
export class FindUniqueAnimeResolver {
  @TypeGraphQL.Query(_returns => Anime, {
    nullable: true
  })
  async findUniqueAnime(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueAnimeArgs): Promise<Anime | null> {
    return ctx.prisma.anime.findUnique(args);
  }
}
