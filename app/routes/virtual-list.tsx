import { withContainer } from "~/components/withContainer";
import type { Route } from "./+types/home";
import { VirtualList } from "~/features/virtual-list/VirtualList";
import { data } from "~/consts/list-data";

const title = "React Virtual List";

export function meta({}: Route.MetaArgs) {
  return [
    { title },
    { name: "description", content: "React Virtual List Example" },
  ];
}

export const handle = {
  title,
};

const VirtualListWithContainer = withContainer((props: any) => (
  <VirtualList {...props} data={data} />
));

export default function VirtualListRoute() {
  return <VirtualListWithContainer />;
}
