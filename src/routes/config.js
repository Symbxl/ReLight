import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import ContactPage from "../pages/ContactPage";
import ServicesPage from "../pages/ServicesPage";
import PricingPage from "../pages/PricingPage";
import GalleryPage from "../pages/GalleryPage";

export const config = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "pricing", element: <PricingPage /> },
      { path: "gallery", element: <GalleryPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);
