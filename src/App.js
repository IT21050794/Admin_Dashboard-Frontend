import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import BusRouteRecords from "./pages/BusRouteRecords";
import RouteSummary from "./pages/RouteSummary";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-design-2":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-design-3":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-design-4":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/userManagement" element={<UserManagement />} />
      <Route path="/busRouteRecords" element={<BusRouteRecords />} />
      <Route path="/routeSummary" element={<RouteSummary />} />
    </Routes>
  );
}
export default App;
