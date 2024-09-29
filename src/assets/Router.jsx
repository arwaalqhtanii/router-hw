import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './pages/MainLayout';
import Sea from './pages/Sea';
import Desert from './pages/Desert';
import Forest from './pages/Forest';
import Mountain from './pages/Mountain';  
import River from './pages/River';       
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,  
    errorElement: <ErrorPage />,  
  },
  {
    path: "/sea",
    element: <Sea />,  
  },
  {
    path: "/desert",
    element: <Desert />,  

  },
  {
    path: "/forest",
    element: <Forest />,  
  },
  {
    path: "/mountain",
    element: <Mountain />,  
  },
  {
    path: "/river",
    element: <River />,  
  },
]);

// const Router = () => {
//   return <RouterProvider router={router} />;
// };

export default router;

