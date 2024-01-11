import Landingpage from "../components/pages/landing-page";
import BusinessLandingPage from "../components/pages/business-page";
import ErrorPage from "../components/pages/error-page";

export const paytm_routes = [
  {
    path: "/",
    component: <Landingpage />,
  },
  {
    path: "/business",
    component: <BusinessLandingPage />,
  },
  {
    path:"/payment-gateway",
    component:<ErrorPage/>
  }
];
