import * as TypeGraphQL from "type-graphql";
import { Anime } from "../../../models/Anime";
import { User } from "../../../models/User";
import { UserFavoriteAnimesArgs } from "./args/UserFavoriteAnimesArgs";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Anime], {
    nullable: false
  })
  async favoriteAnimes(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFavoriteAnimesArgs): Promise<Anime[]> {
    return ctx.prisma.user.findUnique({
      where: {
        id: user.id,
      },
    }).favoriteAnimes(args);
  }
}
