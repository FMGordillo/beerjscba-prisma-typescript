import * as TypeGraphQL from "type-graphql";
import { FindManyAnimeArgs } from "./args/FindManyAnimeArgs";
import { Anime } from "../../../models/Anime";

@TypeGraphQL.Resolver(_of => Anime)
export class FindManyAnimeResolver {
  @TypeGraphQL.Query(_returns => [Anime], {
    nullable: false
  })
  async findManyAnime(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyAnimeArgs): Promise<Anime[]> {
    return ctx.prisma.anime.findMany(args);
  }
}
