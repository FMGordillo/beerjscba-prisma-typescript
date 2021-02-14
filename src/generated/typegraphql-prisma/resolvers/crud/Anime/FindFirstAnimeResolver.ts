import * as TypeGraphQL from "type-graphql";
import { FindFirstAnimeArgs } from "./args/FindFirstAnimeArgs";
import { Anime } from "../../../models/Anime";

@TypeGraphQL.Resolver(_of => Anime)
export class FindFirstAnimeResolver {
  @TypeGraphQL.Query(_returns => Anime, {
    nullable: true
  })
  async findFirstAnime(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstAnimeArgs): Promise<Anime | null> {
    return ctx.prisma.anime.findFirst(args);
  }
}
