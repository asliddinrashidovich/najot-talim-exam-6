import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./layout/layout"
import RegisterPage from "./pages/signup"
import LoginPage from "./pages/login"
import Dashboard from "./pages/dashboard"
import Teachers from "./pages/teachers"

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index  element={<RegisterPage/>}/>
        <Route path="login" element={<LoginPage/>}/> 
        <Route path="dashboard" element={<Dashboard/>}/> 
        <Route path="teachers" element={<Teachers/>}/> 
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App