// import cn from 'classnames';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import routesConfig from '../../routes/routesConfig';

import PeoplePage from '../PeoplePage/PeoplePage';
import HomePage from '../HomePage/HomePage';
import Header from '../../components/Header/Header';

import css from './App.module.css';


const App = () => {
  return (
    <>


      <Router>
        <div className={css.wrapper}>
          <Header />
          <Routes>
            {routesConfig.map((route, index) =>
              <Route
                key={index}
                path={route.path}
                // exact={route.exact}
                element={<route.element />}
              />
            )}
          </Routes>
        </div>
      </Router>


    </>
  );
}

export default App;