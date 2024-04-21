import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Paginas/Home'
import Sobre from './Paginas/Sobre'
import Contato from './Paginas/Contato'
 
function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/sobre' element={<Sobre/>} />
          <Route path='/contato' element={<Contato/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
 
export default App
