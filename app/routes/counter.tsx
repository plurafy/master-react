import { withContainer } from "~/components/withContainer";
import type { Route } from "./+types/home";
import { Counter } from "~/features/counter/Counter";

const title = "React Counter";

export function meta({}: Route.MetaArgs) {
  return [{ title }, { name: "description", content: "React Counter Example" }];
}

export const handle = {
  title,
};

const CounterWithContainer = withContainer(Counter);

export default function CounterRoute() {
  return <CounterWithContainer />;
}
