import * as TypeGraphQL from "type-graphql";
import { UpdateAnimeArgs } from "./args/UpdateAnimeArgs";
import { Anime } from "../../../models/Anime";

@TypeGraphQL.Resolver(_of => Anime)
export class UpdateAnimeResolver {
  @TypeGraphQL.Mutation(_returns => Anime, {
    nullable: true
  })
  async updateAnime(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateAnimeArgs): Promise<Anime | null> {
    return ctx.prisma.anime.update(args);
  }
}
