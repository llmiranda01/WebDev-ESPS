import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Comidas from "./pages/Comidas";
import Detalhes from "./pages/Detalhes";
import Sobre from "./pages/Sobre";

function App(){
  return(
    <>
    <Header/>

    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/comidas" element={<Comidas/>}/>
        <Route path="/comidas/:id" element={<Detalhes/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
      </Routes>
    </main>
    </>
  )
}

export default App