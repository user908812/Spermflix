import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import MoviePage from './Spermflix/movies/MoviePage.tsx'
import NotFound from './components/errors/NotFound.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

window.addEventListener('contextmenu', e => e.preventDefault());

const router = createBrowserRouter([
  {
    path: '/Spermflix',
    element: <App />,
    errorElement: <NotFound />
  },
  {
    path: '/Spermflix/*',
    element: <NotFound />
  },
  {
    path: 'Spermflix/movies',
    element: <MoviePage />,
  },
  {
    path: 'Spermflix/movies/:movieId',
    element: <MoviePage />
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
