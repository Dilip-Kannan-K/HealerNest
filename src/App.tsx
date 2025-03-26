
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "@/store";

// Layout
import Layout from "./components/layout/Layout";

// Pages
import HomePage from "./pages/Index";
import NotFound from "./pages/NotFound";
const Partners = lazy(() => import("./pages/Partners"));
const Services = lazy(() => import("./pages/Services"));
const Articles = lazy(() => import("./pages/Articles"));
const Affiliates = lazy(() => import("./pages/Affiliates"));
const Connect = lazy(() => import("./pages/Connect"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const GetStarted = lazy(() => import("./pages/GetStarted"));
const ArticleDetail = lazy(() => import("./pages/ArticleDetail"));
const Session = lazy(() => import("./pages/Session"));

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="partners" element={
            <Suspense fallback={<div className="w-full h-screen flex items-center justify-center"><div className="animate-pulse-gentle text-lilac">Loading...</div></div>}>
              <Partners />
            </Suspense>
          } />
          <Route path="services" element={
            <Suspense fallback={<div className="w-full h-screen flex items-center justify-center"><div className="animate-pulse-gentle text-lilac">Loading...</div></div>}>
              <Services />
            </Suspense>
          } />
          <Route path="articles" element={
            <Suspense fallback={<div className="w-full h-screen flex items-center justify-center"><div className="animate-pulse-gentle text-lilac">Loading...</div></div>}>
              <Articles />
            </Suspense>
          } />
          <Route path="affiliates" element={
            <Suspense fallback={<div className="w-full h-screen flex items-center justify-center"><div className="animate-pulse-gentle text-lilac">Loading...</div></div>}>
              <Affiliates />
            </Suspense>
          } />
          <Route path="connect" element={
            <Suspense fallback={<div className="w-full h-screen flex items-center justify-center"><div className="animate-pulse-gentle text-lilac">Loading...</div></div>}>
              <Connect />
            </Suspense>
          } />
          <Route path="session" element={
            <Suspense fallback={<div className="w-full h-screen flex items-center justify-center"><div className="animate-pulse-gentle text-lilac">Loading...</div></div>}>
              <Session />
            </Suspense>
          } />
          <Route path="login" element={
            <Suspense fallback={<div className="w-full h-screen flex items-center justify-center"><div className="animate-pulse-gentle text-lilac">Loading...</div></div>}>
              <Login />
            </Suspense>
          } />
          <Route path="register" element={
            <Suspense fallback={<div className="w-full h-screen flex items-center justify-center"><div className="animate-pulse-gentle text-lilac">Loading...</div></div>}>
              <Register />
            </Suspense>
          } />
          <Route path="get-started" element={
            <Suspense fallback={<div className="w-full h-screen flex items-center justify-center"><div className="animate-pulse-gentle text-lilac">Loading...</div></div>}>
              <GetStarted />
            </Suspense>
          } />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </Provider>
);

export default App;
