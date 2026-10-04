import type { Route } from "./+types/home";
import { Example } from "../features/example/example";

const title = "React Example";

export function meta({}: Route.MetaArgs) {
  return [
    { title },
    { name: "description", content: "Welcome to React Example!" },
  ];
}

export const handle = {
  title,
};

export default function ExampleRoute() {
  return <Example />;
}
