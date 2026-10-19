export type Nav = {
  id: string;
  label: string;
  path: string;
};

export const navs = [
  { id: "home", label: "Home", path: "/" },
  { id: "example", label: "Example", path: "/example" },
  { id: "tree", label: "Tree", path: "/tree" },
] satisfies Nav[];
