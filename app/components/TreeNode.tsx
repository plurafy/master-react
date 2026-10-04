import { Checkbox } from "./Checkbox";

import { getLeafNodeIds, getNodeState } from "../utils/tree";

interface TreeNodeProps {
  data: any;
  selection: Record<string, boolean>;
  onToggle: (ids: string[], shouldCheck: boolean) => void;
}

export const TreeNode = ({ data, selection, onToggle }: TreeNodeProps) => {
  const { checked, indeterminate } = getNodeState(data, selection);

  const handleChange = () => {
    const shouldCheck = !checked;
    const leafIds = getLeafNodeIds(data);
    onToggle(leafIds, shouldCheck);
  };

  return (
    <ul className="max-w-md space-y-1 ps-5 mt-2 text-body list-none list-inside">
      <Checkbox
        key={data.id}
        id={data.id}
        label={data.label}
        checked={checked}
        indeterminate={indeterminate}
        onChange={handleChange}
      />
      {data.children?.map(
        (node: { id: string; label: string; children?: any[] }) => (
          <TreeNode
            key={node.id}
            data={node}
            selection={selection}
            onToggle={onToggle}
          />
        ),
      )}
    </ul>
  );
};
