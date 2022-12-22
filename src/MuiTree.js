import React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import TreeNode from "./TreeNode";
const mockApiCall = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const nextId = Math.ceil(Math.random() * 100);
      resolve([
        {
          id: `${nextId}`,
          name: `child-${nextId}`,
          children: [],
        },
        {
          id: `${nextId + 1}`,
          name: `child-${nextId + 1}`,
          children: [],
        },
      ]);
    }, 100);
  });
};

const makeApiCall = mockApiCall;

const TreeViewDemo = (props) => {
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState("1");
  const [tree, setTree] = React.useState(
    new TreeNode({
      id: "1",
      name: "src",
      children: [],
    })
  );

  const handleChange = async (event, nodeId) => {
    const node = tree.search(nodeId);
    if (node && !node.children.length) {
      makeApiCall()
        .then((result) => {
          setTree(tree.addChildren(result, nodeId));
        })
        .catch((err) => console.error(err))
        .finally(() => {
          setSelected(nodeId);
          setExpanded([...expanded, nodeId]);
        });
    }
  };
  const createItemsFromTree = (fromTree) => {
    if (fromTree.children.length) {
      return (
        <TreeItem key={fromTree.id} nodeId={fromTree.id} label={fromTree.name}>
          {fromTree.children.length > 0 &&
            fromTree.children.map((child) => createItemsFromTree(child))}
        </TreeItem>
      );
    }
    return (
      <TreeItem key={fromTree.id} nodeId={fromTree.id} label={fromTree.name} />
    );
  };

  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      selected={selected}
      onNodeSelect={handleChange}
      expanded={expanded}
    >
      {createItemsFromTree(tree)}
    </TreeView>
  );
};

export default TreeViewDemo;
