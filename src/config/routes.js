import MainPage from "../views/pages/MainPage/MainPage";
import Contribute from '../views/pages/Contribute/Contribute';

const routes = [
    {
        path: "/",
        component: MainPage,
        exact: true
    },
    {
        path: "/contribute/:id?",
        component: Contribute,
        exact: true
    },

];

export default routes;


