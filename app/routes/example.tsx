import type { Route } from "./+types/home";
import { Example } from "../features/example/example";
import { withContainer } from "~/components/withContainer";

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

const ExampleWithContainer = withContainer(Example);

export default function ExampleRoute() {
  return <ExampleWithContainer />;
}
