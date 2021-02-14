import * as TypeGraphQL from "type-graphql";
import { Anime } from "../../../models/Anime";
import { User } from "../../../models/User";

@TypeGraphQL.Resolver(_of => Anime)
export class AnimeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async fan(@TypeGraphQL.Root() anime: Anime, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return ctx.prisma.anime.findUnique({
      where: {
        id: anime.id,
      },
    }).fan({});
  }
}
