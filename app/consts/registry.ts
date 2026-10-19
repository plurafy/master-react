export type Nav = {
  id: string;
  label: string;
  path: string;
};

export const navs = [
  { id: "home", label: "Home", path: "/" },
  { id: "accordion", label: "Accordion", path: "/accordion" },
  { id: "counter", label: "Counter", path: "/counter" },
  { id: "tree", label: "Tree", path: "/tree" },
  { id: "virtual-list", label: "Virtual List", path: "/virtual-list" },
] satisfies Nav[];
