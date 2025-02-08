import router from "./routers/router";
import { RouterProvider } from "react-router";

function App() {
  return (
    <div className="min-h-svh h-full">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
