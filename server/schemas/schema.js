const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLList } = require('graphql');
const SoccerField = require('../models/SoccerField');
const SoccerFieldType = new GraphQLObjectType({
    name: 'SoccerField',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        location: { type: GraphQLString },
        description: { type: GraphQLString },
    }),
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        fields: {
            type: new GraphQLList(SoccerFieldType),
            resolve(parent, args) {
                return SoccerField.find({});
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});