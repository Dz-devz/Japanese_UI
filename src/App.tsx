import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Header from "../components/Header";
import Showcase from "../components/Showcase";

function App() {
  const Layout = () => {
    return (
      <section className="bg-[#FFFAFA] h-screen">
        <Header />
        <Showcase />
        <About />
      </section>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
