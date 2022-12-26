import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRecord from "./components/AddRecord";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addRecord" element={<AddRecord/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
