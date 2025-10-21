import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import About from '../pages/About/About.jsx';
import Contact from '../pages/Contact/Contact.jsx';
import Home from '../pages/home/Home.jsx';
import Shop from '../pages/Shop/Shop.jsx';
import Root from '../pages/Root/Root.jsx';
import ErrorPage from '../pages/ErrorPage/ErrorPage.jsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: Root,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/shop", element: <Shop /> },
    ],
  },
]);