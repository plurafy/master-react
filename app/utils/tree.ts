export const getLeafNodeIds = (node) => {
  if (!node.children || node.children.length === 0) {
    return [node.id];
  }
  return node.children.flatMap(getLeafNodeIds);
};

export const getNodeState = (node, selection) => {
  const leafNodeIds = getLeafNodeIds(node);

  const allChecked = leafNodeIds.every((id) => selection[id]);
  if (allChecked) {
    return { checked: true, indeterminate: false };
  }

  const someChecked = leafNodeIds.some((id) => selection[id]);
  return { checked: allChecked, indeterminate: someChecked };
};

/**
 * Get the IDs of all selected nodes in the tree, including both leaf and parent nodes.
 * @param {Object} node - The current node.
 * @param {Object} checkedMap - A map of checked node IDs.
 * @returns {Array} - An array of selected node IDs.
 */
export const getAllSelectedNodes = (node, checkedMap) => {
  const result = [];

  function traverse(currentNode) {
    const isLeaf = !currentNode.children || currentNode.children.length === 0;

    if (isLeaf) {
      if (checkedMap[currentNode.id]) {
        result.push(currentNode.id);
      }
      return;
    }

    const { checked } = getNodeState(currentNode, checkedMap);
    if (checked) {
      result.push(currentNode.id);
    }

    currentNode.children.forEach(traverse);
  }

  traverse(node);
  return result;
};

/**
 * Get the IDs of all selected parent nodes in the tree.
 * If all leaf nodes under a parent are selected, the parent node is considered selected.
 * @param {Object} node - The current node.
 * @param {Object} checkedMap - A map of checked node IDs.
 * @returns {Array} - An array of selected parent node IDs.
 */
export function getSelectedParentNodes(node, checkedMap) {
  function isAllSelected(currentNode) {
    const leafNodeIds = getLeafNodeIds(currentNode);
    return leafNodeIds.every((id) => checkedMap[id]);
  }

  const children = node.children || [];

  if (children.length === 0) {
    return checkedMap[node.id] ? [node.id] : [];
  }

  const selectedChildren = children.flatMap((child) =>
    getSelectedParentNodes(child, checkedMap),
  );
  const allSelected = isAllSelected(node);

  if (allSelected) {
    return [node.id];
  }

  return selectedChildren;
}
