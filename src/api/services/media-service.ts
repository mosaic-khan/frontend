import { MediaAPIClient } from "../clients/media.client";
import transport from "./api-transport";

const client = new MediaAPIClient(transport);

export default client;
