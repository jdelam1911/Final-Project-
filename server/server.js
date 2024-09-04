const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const connectDB = require('./config/db');
const typeDefs = require('./schemas/schema');
const resolvers = require('./resolvers');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Connect to Database
connectDB();

// Initialize Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Apply middleware to Apollo Server
await server.start();
server.applyMiddleware({ app });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`GraphQL playground available at http://localhost:${PORT}${server.graphqlPath}`);
});
