import Main from "./pages/Main";
import GoodPage from "./pages/GoodPage";

const MAIN_ROUTE = '/'
const GOOD_ROUTE = '/good'

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: GOOD_ROUTE + '/:id',
        Component: GoodPage
    }
]