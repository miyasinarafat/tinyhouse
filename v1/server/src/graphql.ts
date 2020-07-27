import {GraphQLObjectType, GraphQLString as gqString, GraphQLSchema} from 'graphql';

const query = new GraphQLObjectType({
    name: "Query",
    fields: {
        hello: {
            type: gqString,
            resolve: () => "Hello from the Query!"
        }
    }
});

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        hello: {
            type: gqString,
            resolve: () => "Hello from the Mutation!"
        }
    }
});

export const schema = new GraphQLSchema({query, mutation});