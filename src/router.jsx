import { createBrowserRouter } from "react-router-dom";
import App from './App'
import Homepage from './pages/HomePage'
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import Characters from "./pages/Characters"
import Search from "./pages/Search";
import CharactersDetails from "./pages/CharactersDetails";
import FavoriteCharacters from "./pages/FavoriteCharacters";

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
    }, 
    {
        path: 'character/:id/',
        element: <CharactersDetails/>
    }, 
    {
        path: 'favorites/',
        element: <FavoriteCharacters/>
    }
    
], 
  errorElement: <NotFoundPage/>

}

])

export default router;