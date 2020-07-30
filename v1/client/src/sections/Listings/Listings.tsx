import React from "react";
import {server} from "../../lib/api";
import {DeleteListing, DeleteListingVariables, ListingsData} from "./types";

const LISTINGS = `
    query Listings {
      listings {
        id
        title
        price
        address
        numOfGuests
        numOfBeds
        numOfBaths
        rating
      }
    }
`;

const DELETE_LISTING = `
    mutation DeleteListing($id: ID!) {
      deleteListing(id: $id) {
        id
        title
      }
    }
`;



interface Props {
    title: string
}

export const Listings = ({title}: Props) => {
    const fetchListings = async () => {
        const {data} = await server.fetch<ListingsData>({query: LISTINGS});
        console.log(data);
    };

    const deleteListing = async () => {
        const {data} = await server.fetch<DeleteListing, DeleteListingVariables>({
            query: DELETE_LISTING,
            variables: {
                id: "5f1fde279650711bd60ee4b9"
            }
        });

        console.log(data);
    };

    return <div>
        <h2>{title}</h2>
        <button onClick={fetchListings}>Query Listings!</button> <br/><br/>
        <button onClick={deleteListing}>Delete a Listing!</button>
    </div>;
}