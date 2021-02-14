import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  fanType = "fanType",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
