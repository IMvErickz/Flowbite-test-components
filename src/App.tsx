import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { NewCard } from "./pages/newCard"
import { ProductContextProvider } from "./contexts/ProductContext"

function App() {

  return (
    <BrowserRouter>
      <ProductContextProvider>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new/card" element={<NewCard />} />
        </Routes>
      </ProductContextProvider>
    </BrowserRouter>
  )
}

export default App
