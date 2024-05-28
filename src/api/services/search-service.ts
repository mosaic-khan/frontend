import { SearchAPIClient } from "../clients/search.client";
import transport from "./api-transport";

const client = new SearchAPIClient(transport);

export default client;
