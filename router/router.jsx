import { createBrowserRouter } from "react-router-dom";
import SearchingBooks from "../src/pages/SearchingBooks";
import Details from "../src/pages/Details";
import SearchingHouses from "../src/pages/SearchingHouses";
import Home from "../src/pages/Home";
import Favorites from "../src/pages/Favorites";
import FormBook from "../src/pages/FormBook";

const router= createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path:"/books",
        element: <SearchingBooks/>
    },
    {
        path: "/books/:isbn",
        element: <Details/>
    },
    {
        path: "/houses",
        element: <SearchingHouses/>
    },
    {
        path: "/favorites",
        element: <Favorites/>
    },
    {
        path: "/formbook",
        element: <FormBook/>
    }
])

export default router