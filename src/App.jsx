import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./layout/layout"
import RegisterPage from "./pages/signup"
import LoginPage from "./pages/login"
import Dashboard from "./pages/dashboard"
import Teachers from "./pages/teachers"
import TeacherPage from "./pages/teacher"
import AddTeacher from "./pages/addteacher"
import Students from "./pages/students"
import Billings from "./pages/billing"
import Settings from "./pages/settings"
import Exams from "./pages/exams"

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index  element={<RegisterPage/>}/>
        <Route path="login" element={<LoginPage/>}/> 
        <Route path="dashboard" element={<Dashboard/>}/> 
        <Route path="teachers/" >
          <Route index element={<Teachers/>}/>
          <Route path="add-teacher" element={<AddTeacher/>}/> 
          <Route path="teacher" element={<TeacherPage/>}/> 
        </Route> 
        <Route path="students" element={<Students/>}/> 
        <Route path="billing" element={<Billings/>}/> 
        <Route path="settings" element={<Settings/>}/> 
        <Route path="exams" element={<Exams/>}/> 
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