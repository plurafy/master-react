import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/tree", "routes/tree.tsx"),
  route("/virtual-list", "routes/virtual-list.tsx"),
  route("/accordion", "routes/accordion.tsx"),
  route("/counter", "routes/counter.tsx"),
  route("/filter-select", "routes/filter-select.tsx"),
] satisfies RouteConfig;
