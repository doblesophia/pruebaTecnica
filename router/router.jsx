import { createBrowserRouter } from "react-router-dom";
import SearchingBooks from "../src/pages/SearchingBooks";

const router= createBrowserRouter([
    {
        path:"/",
        element: <SearchingBooks/>
    }
])

export default router