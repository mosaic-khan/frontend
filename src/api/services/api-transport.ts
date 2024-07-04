import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";

export default new GrpcWebFetchTransport({
  baseUrl: "http://back.khanmedia.ir:8080",
});
