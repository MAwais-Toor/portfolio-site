import  {createBrowserRouter} from 'react-router'
import Home from "./pages/Home"
import About from "./pages/About"
import App from '../App'
import Project from './pages/Project'
import Services from './pages/Services'
import NotFound from './pages/Notfound'


export const Routers = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
])