import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import MoviePage from './components/movies/MoviePage.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './components/errors/NotFound.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />
  },
  {
    path: '/movies',
    element: <MoviePage />,
  },
  {
    path: '/movies/:movieId',
    element: <MoviePage />,
    errorElement: <NotFound />
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
