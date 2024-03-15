import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { Film } from "./pages/Film"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/film/:id' element={<Film />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
