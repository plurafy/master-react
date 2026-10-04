import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/example", "routes/example.tsx"),
  route("/tree", "routes/tree.tsx"),
] satisfies RouteConfig;
