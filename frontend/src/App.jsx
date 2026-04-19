import {createBrowserRouter, RouterProvider} from "react-router"
import Login from "../pages/Login"
import Register from "../pages/register"
import Home from "../pages/Home"
const App=()=>{
  const router=createBrowserRouter([{
    path:'/',
    element:<Home/>
  },{
    path:'/login',
    element:<Login/>
  },{
    path:'/register',
    element:<Register/>
  }])
  return(
  <RouterProvider
  router={router}/>
  )


}
export default App;