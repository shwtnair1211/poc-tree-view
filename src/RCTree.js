import React, { useState } from "react";
import {
  ControlledTreeEnvironment,
  Tree,
  StaticTreeDataProvider,
  UncontrolledTreeEnvironment,
} from "react-complex-tree";
import { longTree } from "./demoData";
import "react-complex-tree/lib/style.css";
import initialData from "./myjsonfile.json";
const mockApiCall = async (nextId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        [nextId]: {
          index: nextId,
          canMove: true,
          isFolder: true,
          children: [],
          data: "test child",
          canRename: true,
        },
      });
    }, 100);
  });
};

const SingleTree = () => {
  const [expandedItems, setExpandedItems] = useState([]);
  const [treeData, setTreeData] = useState(initialData);
  console.log(treeData);
  const handleExpand = (item) => {
    const nextId = Math.ceil(Math.random() * 100);
    mockApiCall(nextId)
      .then((result) => {
        console.log(result);
        setExpandedItems([...expandedItems, item.index]);

        setTreeData({
          ...treeData,
          ...result,
          [item.index]: { ...item, children: [nextId] },
        });
      })
      .catch((err) => console.error(err));
  };
  console.log("ex", expandedItems);
  console.log();
  return (
    <UncontrolledTreeEnvironment
      dataProvider={
        new StaticTreeDataProvider(treeData, (item, data) => ({
          ...item,
          data,
        }))
      }
      getItemTitle={(item) => item.data}
      viewState={{}}
      canDragAndDrop={true}
      canReorderItems={true}
    >
      <Tree treeId="tree-3" rootItem="root" treeLabel="Tree Example" />
    </UncontrolledTreeEnvironment>
  );
};

export default SingleTree;