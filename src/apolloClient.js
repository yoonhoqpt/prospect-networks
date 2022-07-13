import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// the uri for the apollo server
const httpLink = createHttpLink ({
    uri: "https://xy3ojstr30.execute-api.us-west-2.amazonaws.com/beta/"
});

const authLink = setContext((_, { header }) => {
    return {
        headers: {
            ...headers,
            authorization: localStorage.getItem("token") || ""
        }
    }
});

// initializing the Apollo client
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default client;