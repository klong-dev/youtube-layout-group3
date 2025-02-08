import { createBrowserRouter } from "react-router";
import { Home } from "../pages/Home/Home";
import RootLayout from "../layouts/RootLayout";
// import { Search } from "@/pages/Search/Search";
// import { Watch } from "@/pages/Watch/Watch";
import { NotFound } from "../pages/NotFound/NotFound";
import Detail from "../pages/Detail/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "detail", element: <Detail /> },
      //   { path: "watch", element: <Watch /> },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
