const SoccerField = require('../models/SoccerField');

const resolvers = {
    Query: {
        getFields: async () => {
            return await SoccerField.find({});
        },
    },
    Mutation: {
        addField: async (_, { name, location, description }) => {
            const newField = new SoccerField({ name, location, description });
            return await newField.save();
        },
    },
};

module.exports = resolvers;
