import { withContainer } from "~/components/withContainer";
import type { Route } from "./+types/home";
import { Tree } from "~/features/tree/Tree";

const title = "React Tree";

export function meta({}: Route.MetaArgs) {
  return [{ title }, { name: "description", content: "React Tree Example" }];
}

export const handle = {
  title,
};

const TreeWithContainer = withContainer(Tree);

export default function TreeRoute() {
  return <TreeWithContainer />;
}
