import { 
  createBrowserRouter, 
  RouterProvider
 } from "react-router-dom";

import { LoginScreen } from "./pages/login-screen";
import { HomePage } from "./pages/home-page";

const router = createBrowserRouter([
  {path: '/', element: <LoginScreen />},
  {path: '/home', element: <HomePage />},
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
