import * as TypeGraphQL from "type-graphql";
import { UpdateManyAnimeArgs } from "./args/UpdateManyAnimeArgs";
import { Anime } from "../../../models/Anime";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => Anime)
export class UpdateManyAnimeResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyAnime(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyAnimeArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.anime.updateMany(args);
  }
}
