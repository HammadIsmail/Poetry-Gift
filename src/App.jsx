import HeartBeat from "./Components/HeartBeat";
import Envelop from "./Components/Envelop";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
export default function App() {
  const router = createBrowserRouter([
    {
        path:"/",
        element:<HeartBeat/>
    },
    {
        path:"/envelop",
        element:<Envelop/>
    },
    
])
  return (
  <>
          <RouterProvider router={router}/>
  </>
  )
}