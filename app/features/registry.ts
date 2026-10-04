export type Feature = {
  id: string;
  label: string;
  path: string;
};

export const features = [
  { id: "home", label: "Home", path: "/" },
  { id: "example", label: "Example", path: "/example" },
  { id: "tree", label: "Tree", path: "/tree" },
] satisfies Feature[];
