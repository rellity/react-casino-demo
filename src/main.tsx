import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './app/home/HomePage';
import { ActiveTabProvider } from './modules/store/filter-store';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ActiveTabProvider>

      <RouterProvider router={router} />

    </ActiveTabProvider>
  </StrictMode>,
)
