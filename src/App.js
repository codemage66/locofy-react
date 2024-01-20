import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import DashboardADMIN from "./admin/DashboardADMIN";
import Pills from "./admin/Pills";
import HeaderNavigation from "./admin/HeaderNavigation";
import Memberlist from "./admin/member";

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
      case "/pills":
        title = "";
        metaDescription = "";
        break;
      case "/header-navigation":
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
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<DashboardADMIN />} />
      <Route path="/pills" element={<Pills />} />
      <Route path="/header-navigation" element={<HeaderNavigation />} />
      <Route path="/member" element={<Memberlist />} />
    </Routes>
  );
}
export default App;
