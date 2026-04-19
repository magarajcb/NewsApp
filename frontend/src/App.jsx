import {createBrowserRouter, RouterProvider} from "react-router"
import Login from "../pages/Login"
import Register from "../pages/register"
import Home from "../pages/Home"
import Welcome from "../pages/Welcome"
import Preferences from "../pages/preferences"
import Profile from "../pages/profile"
import SavedNews from "../pages/savednews"
import ProtectedRoute from "../components/ProtectedRoute"
const App=()=>{
  const router=createBrowserRouter([{
    path:'/',
    element:<Welcome/>
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