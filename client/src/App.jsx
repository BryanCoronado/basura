import { BrowserRouter, Navigate, Route, Routes  } from "react-router-dom";
import { Principal } from "./pages/Principal";
import { Carta } from "./pages/Carta";
import { Navegacion } from "./components/Navegacion";

function App (){
  return (
    <BrowserRouter>
      <Navegacion/>
      <Routes>
        <Route path="/" element={<Navigate to="/Principal"/>}/>
        <Route path="/principal" element={<Principal/>} />
        <Route path="/carta" element={<Carta/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
