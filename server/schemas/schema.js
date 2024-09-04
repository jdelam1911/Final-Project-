const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type SoccerField {
        id: ID!
        name: String!
        location: String!
        description: String
        createdAt: String
    }

    type Query {
        getFields: [SoccerField]
    }

    type Mutation {
        addField(name: String!, location: String!, description: String): SoccerField
    }
`;

module.exports = typeDefs;
