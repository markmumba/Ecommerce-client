import Navbar from "./components/navbar";
import ProductPage from "./components/products";
import Hero from "./components/hero ";
import { Routes, Route } from "react-router-dom";

export const ENDPOINT = "http://localhost:4000/api";
export const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {
  return (
    <>
      <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/products" element={<ProductPage />} />
        </Routes>

    </>
  );
}

export default App;
