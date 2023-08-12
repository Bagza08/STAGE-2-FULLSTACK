
import  HomePage  from "./pages/HomePage"; 
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./pages/Register";

function App() {
  
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />      
      <Route path="/register" element={<Register />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
