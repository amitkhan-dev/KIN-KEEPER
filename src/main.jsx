import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayouts from './MainLayouts/MainLayouts';
import HomePage from './HomePage/HomePage';
import Friends from './Components/Navbar/Friends/Friends';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: "/friends",
        element: <Friends/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
