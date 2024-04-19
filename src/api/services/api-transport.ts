import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";

export default new GrpcWebFetchTransport({
  baseUrl: "http://82.115.13.61:8080",
});
