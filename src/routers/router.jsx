import { createBrowserRouter } from "react-router";
import { Home } from "../pages/Home/Home";
import RootLayout from "../layouts/RootLayout";
// import { NotFound } from "../pages/NotFound/NotFound";
import ChannelDetails from "../pages/ChannelDetails/ChannelDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/c/channelDetails", element: <ChannelDetails /> },
    ],
    // errorElement: <NotFound />,
  },
]);

export default router;
