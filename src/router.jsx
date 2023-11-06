import { createBrowserRouter } from "react-router-dom";
import App from './App'
import Homepage from './pages/HomePage'
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import Characters from "./pages/Characters"
import Search from "./pages/Search";

const router = createBrowserRouter([{
    path: "/",
    element: <App/>,
    children: [{
        index: true,
        element: <Homepage/>,

    },{
        path: 'about/',
        element: <AboutPage/>
    },
    {
        path: 'characters/',
        element: <Characters />
    },
    {
        path: 'search/',
        element: <Search />
    }
    
], 
  errorElement: <NotFoundPage/>

}

])

export default router;