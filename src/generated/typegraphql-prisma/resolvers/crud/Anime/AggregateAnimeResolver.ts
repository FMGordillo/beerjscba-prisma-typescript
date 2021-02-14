import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAnimeArgs } from "./args/AggregateAnimeArgs";
import { Anime } from "../../../models/Anime";
import { AggregateAnime } from "../../outputs/AggregateAnime";

@TypeGraphQL.Resolver(_of => Anime)
export class AggregateAnimeResolver {
  @TypeGraphQL.Query(_returns => AggregateAnime, {
    nullable: false
  })
  async aggregateAnime(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAnimeArgs): Promise<AggregateAnime> {
    function transformFields(fields: Record<string, any>): Record<string, any> {
      return Object.fromEntries(
        Object.entries(fields)
          // remove __typename and others
          .filter(([key, value]) => !key.startsWith("__"))
          .map<[string, any]>(([key, value]) => {
            if (Object.keys(value).length === 0) {
              return [key, true];
            }
            return [key, transformFields(value)];
          }),
      );
    }

    return ctx.prisma.anime.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
