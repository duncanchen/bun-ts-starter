import { CosmosClient } from "@azure/cosmos";
import { DefaultAzureCredential } from "@azure/identity";
import { Q } from "@blackie-ops/cosmosdb";
const conn =
  "AccountEndpoint=https://dev-market.documents.azure.com:443/;AccountKey=xq9rpUhH7qJqgkLJrXLgADIo3aqhGSxDTy1c4q2bFicYGwd4qCK5beIzjvUqAyo3zQdsb60F4URuZlwygyfY5w==;";
const staging =
  "AccountEndpoint=https://mulan-stg-eus-docdb.documents.azure.com:443/;AccountKey=W1EWqVjGI2dIysPOMMfQHTThabQXTtD8nVB251Srue8dRGYyVQXXYWt7h3GKBfkcd4HFHIHryrpvTInmqf3aGA==;";

const endpoint = "https://mulan-stg-eus-docdb.documents.azure.com:443/";

// const staging = "AccountEndpoint=https://mulan-stg-eus-docdb.documents.azure.com:443/;AccountKey=W1EWqVjGI2dIysPOMMfQHTThabQXTtD8nVB251Srue8dRGYyVQXXYWt7h3GKBfkcd4HFHIHryrpvTInmqf3aGB==;"
const databaseName = "trade";
const containerName = "market";
const client = new CosmosClient({
  endpoint,
  aadCredentials: new DefaultAzureCredential(),
});
const database = client.database(databaseName);
export const container = database.container(containerName);
