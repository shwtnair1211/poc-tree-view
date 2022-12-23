import "./App.css";
import MuiTree from "./MuiTree";
import RSTree from "./RSTree";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/poc1" element={<RSTree />} />
        <Route path="/poc" element={<MuiTree />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
