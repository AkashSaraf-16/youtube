import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import store from "./store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainConatiner from "./components/MainConatiner";
import WatchPage from "./components/WatchPage";
import SearchResults from "./components/SearchResults";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainConatiner />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "search",
        element: <SearchResults />,
      },
      {
        path: "demo",
        element: (
          <>
            <Demo />
            <Demo2 />
          </>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
