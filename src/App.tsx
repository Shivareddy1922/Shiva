import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Enterotp, LoginSignup, SetupProfile, RequestFeedback } from "./routes";
import { Home } from "./screens/Home";
import { IntroCarousel } from "./screens/IntroCarousel";
import { SplashScreen } from "./screens/SplashScreen";
import { Dashboard } from "./screens/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashScreen />,
  },
  {
    path: "/splash",
    element: <SplashScreen />,
  },
  {
    path: "/intro",
    element: <IntroCarousel />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginSignup />,
  },
  {
    path: "/enterotp",
    element: <Enterotp />,
  },
  {
    path: "/setup-profile",
    element: <SetupProfile />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/request-feedback",
    element: <RequestFeedback />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
