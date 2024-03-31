// import SignIn from "../src/layouts/pages/authentication/sign-in";
import Donate from "../pages/Donate";

import Home from "../pages/home";
import AboutUs from "../pages/aboutUs";
import ContactUs from "../pages/contact";
import SignInPage from "../pages/signIn";
const routes = [
  {
    key: "signIn",
    route: "/signIn",
    Component: SignInPage, // Use Component (capitalized) to indicate this is a component reference
  },
  {
    key: "donate",
    route: "/donate",
    Component: Donate,
  },
  {
    key: "home",
    route: "/home",
    Component: Home, // Now, you'll pass highlight as a prop in App.js
  },
  {
    key: "about",
    route: "/about",
    Component: AboutUs,
  },
  {
    key: "contact",
    route: "/contact",
    Component: ContactUs,
  },
];

export default routes;
