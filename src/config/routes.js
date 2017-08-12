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
        path: "/contribute/:id?",
        component: Contribute,
        exact: true
    },

];

export default routes;


