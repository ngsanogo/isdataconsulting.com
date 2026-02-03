/**
 * ISData Consulting - Application principale
 * Site vitrine avec routing pour les pages de services
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DataEngineering from "./pages/DataEngineering";
import ArchitectureData from "./pages/ArchitectureData";
import ProductDataServices from "./pages/ProductDataServices";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services/data-engineering" element={<DataEngineering />} />
        <Route path="/services/architecture-data" element={<ArchitectureData />} />
        <Route path="/services/product-data" element={<ProductDataServices />} />
      </Routes>
    </BrowserRouter>
  );
}
