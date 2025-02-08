import { Provider } from "react-redux";
import router from "./routers/router";
import { RouterProvider } from "react-router";
import store from "./redux/trending/store";

function App() {
  return (
    <div className="min-h-svh h-full">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
