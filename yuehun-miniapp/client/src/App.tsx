import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { useEffect } from "react";
import { Route, Router as WouterRouter, Switch, useLocation } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import CharacterDetail from "./pages/CharacterDetail";
import Theater from "./pages/Theater";
import ScriptHall from "./pages/ScriptHall";
import IPGallery from "./pages/IPGallery";
import Profile from "./pages/Profile";

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/character/:id" component={CharacterDetail} />
      <Route path="/theater" component={Theater} />
      <Route path="/script" component={ScriptHall} />
      <Route path="/ip-gallery" component={IPGallery} />
      <Route path="/profile" component={Profile} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location]);

  return null;
}

function App() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith("#/#")) {
      const normalized = `#${hash.slice(3)}`;
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}${normalized}`);
    }
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <WouterRouter hook={useHashLocation}>
            <ScrollToTop />
            <AppRouter />
          </WouterRouter>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
