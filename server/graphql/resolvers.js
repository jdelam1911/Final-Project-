const SoccerField = require('../models/SoccerField');

const resolvers = {
    Query: {
        getSoccerFields: async () => await SoccerField.findAll(),
        getSoccerField: async (_, { id }) => await SoccerField.findByPk(id),
    },
    Mutation: {
        addSoccerField: async (_, { name, location, description }) => {
            const newField = await SoccerField.create({ name, location, description });
            return newField;
        },
        deleteSoccerField: async (_, { id }) => {
            await SoccerField.destroy({ where: { id } });
            return "Soccer Field deleted successfully!";
        }
    }
};

module.exports = resolvers;
