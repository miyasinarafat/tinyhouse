import express, {response} from 'express';
import bodyParser from "body-parser";
import {listings} from "./listings";

const app = express();
const port = 9000;

// Middleware
app.use(bodyParser.json());


app.get("/listings", (_request, response) => {
    return response.send(listings);
});

app.post('/delete-listing', (request, response) => {
    const id: string = request.body.id;

    for (let i = 0; i < listings.length; i++) {
        if (listings[i].id === id) {
            return response.send(listings.splice(i, 1));
        }
    }

    return response.send('Failed to delete listing.');
})


app.listen(port);
console.log(`[app]: http://localhost:${port}`);