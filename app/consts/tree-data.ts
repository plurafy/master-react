export interface ITreeNode {
  id: string;
  label: string;
  children?: ITreeNode[];
}

export const data: ITreeNode = {
  id: "1",
  label: "Electronics",
  children: [
    {
      id: "2",
      label: "Mobiles",
      children: [
        { id: "3", label: "iPhone", children: [] },
        { id: "4", label: "Samsung", children: [] },
      ],
    },
    {
      id: "5",
      label: "Laptops",
      children: [
        { id: "6", label: "MacBook", children: [] },
        { id: "7", label: "Dell", children: [] },
      ],
    },
  ],
};
