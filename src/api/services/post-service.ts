import { PostAPIClient } from "../clients/post.client";
import transport from "./api-transport";

const client = new PostAPIClient(transport);

export default client;
