import "./App.css";
import MuiTree from "./MuiTree";
import RSTree from "./RSTree";
import RCTree from "./RCTree";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mui" element={<MuiTree />} />
        <Route path="/rdnd" element={<RSTree />} />
        <Route path="/rctree" element={<RCTree />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
