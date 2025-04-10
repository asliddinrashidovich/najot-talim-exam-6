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
import NotFound from "./pages/not-found"
import PropTypes from "prop-types"

App.propTypes = {
  children: PropTypes.node.isRequired
}

function App() {
  const isAuth = () => {
    return localStorage.getItem('token') != null
  }
  function ProtectedRoute({children}) {
    const auth = isAuth()

    if(auth) {
      return children;
    } else {
      return <NotFound/>
    }
  }
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index  element={<RegisterPage/>}/>
        <Route path="login" element={<LoginPage/>}/> 
        <Route path="dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/> 
        <Route path="teachers/" >
          <Route index element={<ProtectedRoute><Teachers/></ProtectedRoute>}/>
          <Route path="add-teacher" element={<ProtectedRoute><AddTeacher/></ProtectedRoute>}/> 
          <Route path="teacher" element={<ProtectedRoute><TeacherPage/></ProtectedRoute>}/> 
        </Route> 
        <Route path="students" element={<ProtectedRoute><Students/></ProtectedRoute>}/> 
        <Route path="*" element={<NotFound/>}/> 
        <Route path="billing" element={<ProtectedRoute><Billings/></ProtectedRoute>}/> 
        <Route path="settings" element={<ProtectedRoute><Settings/></ProtectedRoute>}/> 
        <Route path="exams" element={<ProtectedRoute><Exams/></ProtectedRoute>}/> 
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