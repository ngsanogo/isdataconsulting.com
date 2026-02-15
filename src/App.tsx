import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Analytics from "./components/Analytics";
import Index from "./pages/Index";

const DataEngineering = lazy(() => import("./pages/DataEngineering"));
const ArchitectureData = lazy(() => import("./pages/ArchitectureData"));
const ProductDataServices = lazy(() => import("./pages/ProductDataServices"));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-black dark:border-white border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm opacity-50">Chargement...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Analytics />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/services/data-engineering"
            element={
              <Suspense fallback={<PageLoader />}>
                <DataEngineering />
              </Suspense>
            }
          />
          <Route
            path="/services/architecture-data"
            element={
              <Suspense fallback={<PageLoader />}>
                <ArchitectureData />
              </Suspense>
            }
          />
          <Route
            path="/services/product-data"
            element={
              <Suspense fallback={<PageLoader />}>
                <ProductDataServices />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
