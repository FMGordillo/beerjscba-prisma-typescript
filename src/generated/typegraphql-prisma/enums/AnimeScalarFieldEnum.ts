import * as TypeGraphQL from "type-graphql";

export enum AnimeScalarFieldEnum {
  id = "id",
  name = "name",
  studio = "studio",
  releaseDate = "releaseDate",
  endDate = "endDate",
  fanId = "fanId"
}
TypeGraphQL.registerEnumType(AnimeScalarFieldEnum, {
  name: "AnimeScalarFieldEnum",
  description: undefined,
});
