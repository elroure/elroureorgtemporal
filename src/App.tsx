
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";
import Historia from "./pages/Historia";
import Fundamentos from "./pages/Fundamentos";
import Escuela from "./pages/Escuela";
import Formaciones from "./pages/Formaciones";
import Asesoramientos from "./pages/Asesoramientos";
import Textos from "./pages/Textos";
import Videos from "./pages/Videos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/fundamentos" element={<Fundamentos />} />
          <Route path="/escuela" element={<Escuela />} />
          <Route path="/formaciones" element={<Formaciones />} />
          <Route path="/asesoramientos" element={<Asesoramientos />} />
          <Route path="/textos" element={<Textos />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
