import EditSong from "../views/pages/EditSong/EditSong";
import MainPage from "../views/pages/MainPage/MainPage";
import Home from "../views/pages/MainPage/Home";
import Contribute from '../views/pages/Contribute/Contribute';
import About from '../views/pages/About/About';

const routes = [
    {
        path: "/",
        component: MainPage,
        exact: true
    },
    {
        path: "/home",
        component: Home,
        exact: true
    },
    {
        path: "/editsong",
        component: EditSong,
        exact: true
    },
    {
        path: "/contribute/:id?",
        component: Contribute,
        exact: true
    },
    {
        path: "/about",
        component: About,
        exact: true
    },
];

export default routes;


