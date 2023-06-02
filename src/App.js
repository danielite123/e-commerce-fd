import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="success" variant="success">
            <Container>
              <Navbar.Brand as={Link} to="/" className="text-white">
                GreenShop
              </Navbar.Brand>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
