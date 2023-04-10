import PeoplePage from "../containers/PeoplePage/PeoplePage";
import PersonPage from "../containers/PersonPage/PersonPage";
import HomePage from "../containers/HomePage/HomePage";
import FavouritesPage from "../containers/FavouritesPage/FavouritesPage";
import SearchPage from "../containers/SearchPage/SearchPage";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import NotFoundPage from "../containers/NotFoundPage/NotFoundPage";

const routesConfig = [
  {
    path: '/',
    element: HomePage
  },
  {
    path: '/people',
    element: PeoplePage
  },
  {
    path: '/people/:id',
    element: PersonPage
  },
  {
    path: '/favourites',
    element: FavouritesPage
  },
  {
    path: '/search',
    element: SearchPage
  },
  {
    path: '/fail',
    element: ErrorMessage
  },
  {
    path: '/not-found',
    element: NotFoundPage
  },
  {
    path: '*',
    element: NotFoundPage
  }
]
export default routesConfig;