import { UserAPIClient } from "../clients/user.client";
import transport from "./api-transport";

const client = new UserAPIClient(transport);

export default client;
