import Home from "./pages/Home"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Product from "./pages/Product"


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/products/:name' element={<Product />}/>
                <Route path='/*' element={<Home />}/>
            </Routes>
        </BrowserRouter>
        )
  }
  
  export default App
  