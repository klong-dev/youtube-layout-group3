import { createBrowserRouter } from "react-router";
import { Home } from "../pages/Home/Home";
import RootLayout from "../layouts/RootLayout";
// import { NotFound } from "../pages/NotFound/NotFound";
import TrendingScreen from "../pages/TrendingScreen/TrendingScreen";
import Detail from "../pages/Detail/Detail";
import ChannelDetails from "../pages/ChannelDetails/ChannelDetails";
import HistoryPage from "../pages/History/History";
import Search from "../pages/Search/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/c/:channelId", element: <ChannelDetails /> },
      { path: "history", element: <HistoryPage /> },
      { path: "detail", element: <Detail /> },
      { path: "/video/:videoId", element: <Detail /> },
      { path: "/results", element: <Search /> },
      {path: "trending/:categoryId?", element: <TrendingScreen />},
    ],
    // errorElement: <NotFound />,
  },
]);

export default router;
