import { 
  createBrowserRouter, 
  RouterProvider
 } from "react-router-dom";

import { LoginPage } from "./pages/login-page";
import { HomePage } from "./pages/home-page";
import { RegisterPage } from "./pages/register-page";
import { CanteenPage } from "./pages/canteen-page";
import { LibraryPage } from "./pages/library-page";
import { FavoritesPage } from "./pages/favorites-page";
import { SwissStorePage } from "./pages/swiss-store-page";
import { AccountPage } from "./pages/account-page";
import { ExtractPage } from "./pages/extract-page";

const router = createBrowserRouter([
  {path: '/', element: <LoginPage />},
  {path: '/home', element: <HomePage />},
  {path: '/register', element: <RegisterPage />},
  {path: '/canteen', element: <CanteenPage />},
  {path: '/library', element: <LibraryPage />},
  {path: '/favorites', element: <FavoritesPage />},
  {path: '/swissstore', element: <SwissStorePage />},
  {path: '/account', element: <AccountPage />},
  {path: '/extract', element: <ExtractPage />},
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
