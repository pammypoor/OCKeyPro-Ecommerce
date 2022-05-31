import Client from "shopify-buy";

export const client = Client.buildClient({
    storefrontAccessToken: process.env.SHOPIFY_STORE_API_TOKEN,
    domain: process.env.SHOPIFY_STORE_ENDPOINT
});