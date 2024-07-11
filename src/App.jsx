import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import RootLayout from "./components/RootLayout";
import MainPage from "./pages/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // { index: true, element: <HomePage /> },
      { index: true, element: <MainPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
