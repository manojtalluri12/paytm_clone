import Landingpage from "../components/pages/landing-page";
import BusinessLandingPage from "../components/pages/business-page";
import ErrorPage from "../components/pages/error-page";
import Dashboard from "../components/pages/dashboard-page";

export const paytm_routes = [
  {
    path: "/",
    component: <Landingpage />,
    permision:"public"
  },
  {
    path: "/business",
    component: <BusinessLandingPage />,
    permision:"public"
  },
  {
    path:"/payment-gateway",
    component:<ErrorPage/>,
    permision:"public"
  },
  {
    path:"/dashboard",
    component:<Dashboard/>,
    permision:"private"
  }
];
