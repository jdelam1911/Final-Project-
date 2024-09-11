const { gql } = require('apollo-server-express');

// Define your schema for the soccer fields
const typeDefs = gql`
    type SoccerField {
        id: ID!
        name: String!
        location: String!
        description: String
    }

    type Query {
        getSoccerFields: [SoccerField]
        getSoccerField(id: ID!): SoccerField
    }

    type Mutation {
        addSoccerField(name: String!, location: String!, description: String): SoccerField
        deleteSoccerField(id: ID!): String
    }
`;

module.exports = typeDefs;
