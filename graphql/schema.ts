import {GraphQLObjectType, GraphQLSchema} from 'graphql';

const baseQuery = new GraphQLObjectType({
    name: 'Query',
    description: 'The base query',
    fields: {

    }
});

const baseMutation = new GraphQLObjectType({
    name: 'Mutation',
    description: 'The base mutation',
    fields: {

    }
});

export const schema = new GraphQLSchema({
    query: baseQuery,
    mutation: baseMutation
});