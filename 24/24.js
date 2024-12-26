/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {
  const compare = (node1, node2) => {
    if (node1 === node2) return true;
    if (node1?.value !== node2?.value) return false;
    return compare(node1.left, node2.right) && compare(node1.right, node2.left);
  };

  return [compare(tree1, tree2), tree1.value];
}
