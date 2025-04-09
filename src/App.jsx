import './App.css'
import ResourcesCEE from "./pages/ResourcesCEE.jsx";
import PracticeCEE from "./pages/PracticeCEE.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ResourcesCEE />} />
          <Route path="/practice" element={<PracticeCEE />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
