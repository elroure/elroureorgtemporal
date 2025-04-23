
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Historia from "./pages/Historia";
import Pedagogia from "./pages/Pedagogia";
import Escuela from "./pages/Escuela";
import Formaciones from "./pages/Formaciones";
import TextosVideos from "./pages/TextosVideos";

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
          <Route path="/pedagogia" element={<Pedagogia />} />
          <Route path="/escuela" element={<Escuela />} />
          <Route path="/formaciones" element={<Formaciones />} />
          <Route path="/textos-y-videos" element={<TextosVideos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
