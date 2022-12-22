import "./App.css";
import MuiTree from "./MuiTree";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <MuiTree />
    </DndProvider>
  );
}

export default App;
