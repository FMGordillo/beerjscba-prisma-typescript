import * as TypeGraphQL from "type-graphql";
import { UpsertAnimeArgs } from "./args/UpsertAnimeArgs";
import { Anime } from "../../../models/Anime";

@TypeGraphQL.Resolver(_of => Anime)
export class UpsertAnimeResolver {
  @TypeGraphQL.Mutation(_returns => Anime, {
    nullable: false
  })
  async upsertAnime(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertAnimeArgs): Promise<Anime> {
    return ctx.prisma.anime.upsert(args);
  }
}
