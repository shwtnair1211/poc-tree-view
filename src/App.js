import "./App.css";
import MuiTree from "./MuiTree";
import RSTree from "./RSTree";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MuiTree />} />
        <Route path="/poc" element={<RSTree />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
