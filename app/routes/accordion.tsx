import { withContainer } from "~/components/withContainer";
import type { Route } from "./+types/home";
import { Accordion } from "~/features/accordion/Accordion";

const title = "React Accordion";

export function meta({}: Route.MetaArgs) {
  return [
    { title },
    { name: "description", content: "React Accordion Example" },
  ];
}

export const handle = {
  title,
};

const AccordionWithContainer = withContainer(Accordion);
export default AccordionWithContainer;
