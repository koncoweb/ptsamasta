import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import Layanan from "./pages/Layanan";
import PemeliharaanDetail from "./components/layanan/PemeliharaanDetail";
import JasaProfesionalDetail from "./components/layanan/JasaProfesionalDetail";
import PerdaganganDetail from "./components/layanan/PerdaganganDetail";
import EventOrganizerDetail from "./components/layanan/EventOrganizerDetail";
import AjukanPenawaran from "./components/layanan/AjukanPenawaran";
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
          <Route path="/profil" element={<Profile />} />
          <Route path="/profil/:subPage" element={<Profile />} />
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/layanan/pemeliharaan" element={<PemeliharaanDetail />} />
          <Route path="/layanan/jasa-profesional" element={<JasaProfesionalDetail />} />
          <Route path="/layanan/perdagangan" element={<PerdaganganDetail />} />
          <Route path="/layanan/event-organizer" element={<EventOrganizerDetail />} />
          <Route path="/layanan/pemeliharaan/:serviceType/penawaran" element={<AjukanPenawaran />} />
          <Route path="/layanan/:subPage" element={<Layanan />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
