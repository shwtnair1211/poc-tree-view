// import React, { useState } from "react";
// import {
//   Tree,
//   getBackendOptions,
//   MultiBackend,
// } from "@minoru/react-dnd-treeview";
// import { DndProvider } from "react-dnd";
// const TreeComp = () => {
//   const [treeData, setTreeData] = useState([
//     { id: 1, parent: 0, droppable: true, text: "Globe" },
//   ]);
//   const handleDrop = (newTreeData, options) => setTreeData(newTreeData);

//   const mockApiCall = async (parentId) => {
//     console.log(parentId);
//     return new Promise((resolve) => {
//       const nextId = Math.ceil(Math.random() * 100);
//       resolve([
//         {
//           id: `${nextId}`,
//           text: `child-${nextId}`,
//           parent: parentId,
//           droppable: true,
//         },
//         {
//           id: `${nextId + 1}`,
//           text: `child-${nextId + 1}`,
//           parent: parentId,
//           droppable: true,
//         },
//       ]);
//     });
//   };
//   const makeApiCall = mockApiCall;
//   const handleChange = (ids) => {
//     let parentId = ids[ids.length - 1];
//     console.log(parentId);
//     makeApiCall(parentId)
//       .then((result) => {
//         console.log(result);
//         setTreeData(treeData.concat(result));
//       })
//       .catch((err) => console.error(err));
//   };
//   return (
//     <DndProvider backend={MultiBackend} options={getBackendOptions()}>
//       <Tree
//         tree={treeData}
//         rootId={0}
//         onDrop={handleDrop}
//         render={(node, { depth, isOpen, onToggle }) => (
//           <div style={{ marginLeft: depth * 10 }}>
//             {node.droppable && (
//               <span onClick={onToggle}>{isOpen ? "[-]" : "[+]"}</span>
//             )}
//             {node.text}
//           </div>
//         )}
//         onChangeOpen={handleChange}
//       />
//     </DndProvider>
//   );
// };

// export default TreeComp;

const RSTree = () => {
  return <div>Commented</div>;
};

export default RSTree;
