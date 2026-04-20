import {createBrowserRouter, RouterProvider} from "react-router"
import Login from "../pages/Login"
import Register from "../pages/register"
import Home from "../pages/Home"

import Preferences from "../pages/preferences"
import Profile from "../pages/profile"
import SavedNews from "../pages/savednews"
import ProtectedRoute from "../components/ProtectedRoute"
import Dashboard from "../pages/dashboard"
const App=()=>{
  const router=createBrowserRouter([{
    path:'/',
    element:<Dashboard/>
  },{
    path:'/login',
    element:<Login/>
  },{
    path:'/register',
    element:<Register/>
  },{
    path:'/home',
    element: (
  <ProtectedRoute>
    <Home />
  </ProtectedRoute>
)
  },{
    path:'/preferences',
    element:(
    <ProtectedRoute><Preferences/></ProtectedRoute>)
  },{
    path:'/profile',
    element:(
    <ProtectedRoute><Profile/></ProtectedRoute>)
  },{
    path:'/saved-news',
    element:(
    <ProtectedRoute><SavedNews/></ProtectedRoute>)
  }])
  return(
  <RouterProvider
  router={router}/>
  )


}
export default App;