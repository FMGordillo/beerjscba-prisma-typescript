import * as TypeGraphQL from "type-graphql";
import { DeleteManyAnimeArgs } from "./args/DeleteManyAnimeArgs";
import { Anime } from "../../../models/Anime";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => Anime)
export class DeleteManyAnimeResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyAnime(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyAnimeArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.anime.deleteMany(args);
  }
}
