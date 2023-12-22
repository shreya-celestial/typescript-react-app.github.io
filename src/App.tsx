import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home";
import UserLayout, {
  loader as userLoader,
} from "./components/userLayout/UserLayout";
import NotFound from "./components/userLayout/NotFound";
import Personal from "./components/pages/Personal";
import Academic from "./components/pages/Academic";
import Employment from "./components/pages/Employment";
import Professional from "./components/pages/Professional";
import AllUsers from "./components/pages/AllUsers";

const App: React.FC = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    {
      path: "/:id",
      id: "user",
      element: <UserLayout />,
      errorElement: <NotFound />,
      loader: userLoader,
      children: [
        { index: true, element: <Personal /> },
        { path: "personal", element: <Personal /> },
        { path: "professional", element: <Professional /> },
        { path: "academic", element: <Academic /> },
        { path: "employment", element: <Employment /> },
        { path: "all", element: <AllUsers /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
