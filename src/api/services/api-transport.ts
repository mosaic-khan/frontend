import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";

export default new GrpcWebFetchTransport({
  baseUrl: "http://185.80.196.246:8080",
});
