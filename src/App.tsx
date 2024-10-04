/* eslint-disable @typescript-eslint/no-unused-vars */
import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import { Hooks } from "./components/Hooks";
import Loader from "./components/Loader";
const HomeScreen = lazy(() => import("./Screens/HomeScreen"));
const NotFound = lazy(() => import("./Screens/NotFound"));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Hooks />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
