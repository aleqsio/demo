import {
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";

const nonNull = (item) => new GraphQLNonNull(item);

const list = (item) => new GraphQLList(item);

const CatType = new GraphQLObjectType({
  name: "Cat",
  fields: {
    id: { type: nonNull(GraphQLID) },
    name: { type: nonNull(GraphQLString) },
    rating: { type: nonNull(GraphQLFloat) },
    likes: { type: nonNull(GraphQLInt) },
    skips: { type: nonNull(GraphQLInt) },
  },
});


const cats = [{
  id: 1,
  name: "Perełka",
  likes: 170,
  skips:10,
  rating: 5.0
},
{
  id: 1,
  name: "Kitka",
  likes: 150,
  skips:5,
  rating: 4.9
},
];

const UserQueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    cats: {
      type: list(CatType),
      resolve: () => cats,
    },
  },
});

export const mockSchema = new GraphQLSchema({ query: UserQueryType });
