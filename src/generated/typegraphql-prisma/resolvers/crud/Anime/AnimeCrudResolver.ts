import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAnimeArgs } from "./args/AggregateAnimeArgs";
import { CreateAnimeArgs } from "./args/CreateAnimeArgs";
import { DeleteAnimeArgs } from "./args/DeleteAnimeArgs";
import { DeleteManyAnimeArgs } from "./args/DeleteManyAnimeArgs";
import { FindFirstAnimeArgs } from "./args/FindFirstAnimeArgs";
import { FindManyAnimeArgs } from "./args/FindManyAnimeArgs";
import { FindUniqueAnimeArgs } from "./args/FindUniqueAnimeArgs";
import { UpdateAnimeArgs } from "./args/UpdateAnimeArgs";
import { UpdateManyAnimeArgs } from "./args/UpdateManyAnimeArgs";
import { UpsertAnimeArgs } from "./args/UpsertAnimeArgs";
import { Anime } from "../../../models/Anime";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateAnime } from "../../outputs/AggregateAnime";

@TypeGraphQL.Resolver(_of => Anime)
export class AnimeCrudResolver {
  @TypeGraphQL.Query(_returns => Anime, {
    nullable: true
  })
  async findUniqueAnime(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueAnimeArgs): Promise<Anime | null> {
    return ctx.prisma.anime.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Anime, {
    nullable: true
  })
  async findFirstAnime(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstAnimeArgs): Promise<Anime | null> {
    return ctx.prisma.anime.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Anime], {
    nullable: false
  })
  async findManyAnime(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyAnimeArgs): Promise<Anime[]> {
    return ctx.prisma.anime.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Anime, {
    nullable: false
  })
  async createAnime(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateAnimeArgs): Promise<Anime> {
    return ctx.prisma.anime.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Anime, {
    nullable: true
  })
  async deleteAnime(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteAnimeArgs): Promise<Anime | null> {
    return ctx.prisma.anime.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Anime, {
    nullable: true
  })
  async updateAnime(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateAnimeArgs): Promise<Anime | null> {
    return ctx.prisma.anime.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyAnime(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyAnimeArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.anime.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyAnime(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyAnimeArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.anime.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Anime, {
    nullable: false
  })
  async upsertAnime(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertAnimeArgs): Promise<Anime> {
    return ctx.prisma.anime.upsert(args);
  }

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
