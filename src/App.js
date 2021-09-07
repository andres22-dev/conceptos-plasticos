import React, { useState } from 'react';
import Home from './components/Screens/Home';
import HomeInfo from './components/Screens/HomeInfo';
import ViewGeneral from './components/Screens/ViewGeneral';

import './styles/home.css';

const App = () => {
  const [layout, setLayout] = useState("Home");

  const changeView = (screen) => {
    setLayout(screen)
  }
  const shared_props = {
    changeView: changeView
  }
  return (
    <div className="layout">
      {layout === "Home" &&
        <Home {...shared_props} />
      }
      {layout === "HomeInfo" &&
        <HomeInfo {...shared_props} />
      }
      {layout === "ViewGeneral" &&
        <ViewGeneral />
      }
    </div>
  );
}

export default App;
