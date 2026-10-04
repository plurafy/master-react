import { useState, useCallback, useMemo } from "react";
import { data } from "./data";
import { TreeNode } from "~/components/TreeNode";
import { getAllSelectedNodes, getSelectedParentNodes } from "~/utils/tree";
import { Preview } from "~/components/Preview";

export const Tree = () => {
  const [selection, setSelection] = useState<Record<string, boolean>>({});

  const handleToggle = useCallback(
    (leafIds: string[], shouldCheck: boolean) => {
      setSelection((prev) => {
        const next = { ...prev };

        leafIds.forEach((id) => {
          if (shouldCheck) {
            next[id] = true;
          } else {
            delete next[id];
          }
        });
        return next;
      });
    },
    [],
  );

  const output = useMemo(() => {
    return {
      allSelectedNodes: getAllSelectedNodes(data, selection),
      selectedParentNodes: getSelectedParentNodes(data, selection),
    };
  }, [selection]);

  return (
    <Preview name="Tree Component" output={JSON.stringify(output, null, 2)}>
      <TreeNode data={data} selection={selection} onToggle={handleToggle} />
    </Preview>
  );
};
