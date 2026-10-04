import type { Route } from "./+types/home";
import { Toc } from "~/features/toc/toc";

const title = "Master React";

export function meta({}: Route.MetaArgs) {
  return [
    { title },
    { name: "description", content: "Welcome to React Mastery!" },
  ];
}

export const handle = {
  title,
};

export default function Home() {
  return <Toc />;
}
