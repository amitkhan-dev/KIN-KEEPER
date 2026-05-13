import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayouts from './MainLayouts/MainLayouts';
import HomePage from './HomePage/HomePage';
import Friends from './Components/Navbar/Friends/Friends';
import Timeline from './Timeline/Timeline';
import Analysis from './Analysis/Analysis';
import ErrorPage from './HomePage/Errorpage/ErrorPage';
import FriendsDetails from './Components/Navbar/Friends/FriendsDetails';
import { TimelineProvider } from './Timeline/TimelineContext';

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
      },
      {
        path: "/friendsDetails/:id",
        element: <FriendsDetails />,
        loader: () => fetch('/data.json')
      },
      {
        path: "/timeline",
        element: <Timeline/>
      },
      {
        path: "/Analysis",
        element: <Analysis/>
      }
    ],
    errorElement: <ErrorPage />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineProvider>
      <RouterProvider router={router} />
    </TimelineProvider>
  </StrictMode>,
)
