import  {createBrowserRouter} from 'react-router'
import App from '../App'
import Home from "./pages/Home"
import About from './pages/About'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'



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
                path: "/about",
                element: <About />
            },
            {
                path: "/resume",
                element: <Resume />
            },
            {
                path: "/portfolio",
                element: <Portfolio />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
])