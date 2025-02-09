import { createBrowserRouter } from "react-router";
import { Home } from "../pages/Home/Home";
import RootLayout from "../layouts/RootLayout";
import { NotFound } from "../pages/NotFound/NotFound";
import ChannelDetails from "../pages/ChannelDetails/ChannelDetails";
import HistoryPage from "../pages/History/History";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/c/channelDetails", element: <ChannelDetails /> },
      { path: "history", element: <HistoryPage /> },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
