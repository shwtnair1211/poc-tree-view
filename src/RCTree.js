import React, { useState, useReducer } from "react";
import { Tree, UncontrolledTreeEnvironment } from "react-complex-tree";
import "react-complex-tree/lib/style.css";
import { EventEmitter } from "./EventEmitter";
import initialData from "./myjsonfile.json";
const onDidChangeTreeDataEmitter = new EventEmitter();

const SingleTree = () => {
  const [treeData, setTreeData] = useState(initialData);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const handleChange = (itemId, newChildren) => {
    const isFolder = treeData[itemId].isFolder || true;
    setTreeData({
      ...treeData,
      [itemId]: {
        ...treeData[itemId],
        children: newChildren,
        isFolder,
      },
    });

    forceUpdate();
  };
  return (
    <UncontrolledTreeEnvironment
      canDragAndDrop={true}
      canReorderItems={true}
      canDropOnNonFolder={true}
      canDropOnFolder={true}
      dataProvider={{
        getTreeItem: (itemId) => {
          console.log(itemId);
          return new Promise((res) => {
            res(treeData[itemId]);
          });
        },
        onChangeItemChildren: async (itemId, newChildren) => {
          handleChange(itemId, newChildren);
          onDidChangeTreeDataEmitter.emit([itemId]);
        },
        onDidChangeTreeData: (listener) => {
          const handlerId = onDidChangeTreeDataEmitter.on((payload) => {
            listener(payload);
          });
          return { dispose: () => onDidChangeTreeDataEmitter.off(handlerId) };
        },
      }}
      getItemTitle={(item) => item.data}
      viewState={{
        "tree-3": {},
      }}
    >
      <Tree treeId="tree-3" rootItem="root" treeLabel="Tree Example" />
    </UncontrolledTreeEnvironment>
  );
};

export default SingleTree;
