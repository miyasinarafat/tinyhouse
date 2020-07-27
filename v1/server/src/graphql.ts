import {
    GraphQLString as gqString,
    GraphQLID as gqID,
    GraphQLInt as gqInt,
    GraphQLNonNull as gqNonNull,
    GraphQLList as gqList,
    GraphQLObjectType,
    GraphQLSchema
} from 'graphql';

import {listings} from "./listings";

const Listing = new GraphQLObjectType({
    name: 'Listing',
    fields: {
        id: {type: gqNonNull(gqID)},
        title: {type: gqNonNull(gqString)},
        image: {type: gqNonNull(gqString)},
        address: {type: gqNonNull(gqString)},
        price: {type: gqNonNull(gqInt)},
        numOfGuests: {type: gqNonNull(gqInt)},
        numOfBeds: {type: gqNonNull(gqInt)},
        numOfBaths: {type: gqNonNull(gqInt)},
        rating: {type: gqNonNull(gqInt)},
    }
})


const query = new GraphQLObjectType({
    name: "Query",
    fields: {
        listings: {
            type: gqNonNull(gqList(gqNonNull(Listing))),
            resolve: () => {
                return listings;
            }
        }
    }
});

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        deleteListing: {
            type: gqNonNull(Listing),
            args: {
                id: {type: gqNonNull(gqID)}
            },
            resolve: (_root, {id}) => {
                for (let i = 0; i < listings.length; i++) {
                    if (listings[i].id === id) {
                        return listings.splice(i, 1)[0];
                    }
                }

                throw Error("Failed to delete listing");
            }
        }
    }
});

export const schema = new GraphQLSchema({query, mutation});