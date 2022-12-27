var fs = require("fs");

const createNode = (count) => {
  let newData = {
    root: {
      index: "root",
      canMove: true,
      isFolder: true,
      children: [1, 2],
      data: "Root item",
      canRename: true,
    },
    1: {
      index: 1,
      canMove: true,
      isFolder: true,
      children: [3, 4],
      data: "Globe",
      canRename: true,
    },
    2: {
      index: 2,
      canMove: true,
      isFolder: false,
      children: [],
      data: "Globe2",
      canRename: true,
    },
  };
  let i = 2;
  while (count > 0) {
    let data = {
      [++i]: {
        index: i,
        canMove: true,
        isFolder: true,
        children: [i + 2, i + 3],
        data: `test child-${i}`,
        canRename: true,
      },
      [++i]: {
        index: i,
        canMove: true,
        isFolder: true,
        children: [i + 3, i + 4],
        data: `test child-${i}`,
        canRename: true,
      },
    };
    newData = { ...newData, ...data };
    count--;
  }
  return newData;
};

let json = JSON.stringify(createNode(5000));
fs.writeFile("myjsonfile.json", json, "utf8", () => console.log("done"));
