import Navbar from "./components/Navbar";
import IndexPage from "./components/indexPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  
    

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
           <Route exact path='/' element={<IndexPage/>}/>
        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
