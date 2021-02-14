import * as TypeGraphQL from "type-graphql";
import { DeleteAnimeArgs } from "./args/DeleteAnimeArgs";
import { Anime } from "../../../models/Anime";

@TypeGraphQL.Resolver(_of => Anime)
export class DeleteAnimeResolver {
  @TypeGraphQL.Mutation(_returns => Anime, {
    nullable: true
  })
  async deleteAnime(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteAnimeArgs): Promise<Anime | null> {
    return ctx.prisma.anime.delete(args);
  }
}
