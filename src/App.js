import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './components/fontAwesomeIcons';
import Login from "./paginas/Login/Login";
import { ProtectedRoute } from "./components/protect/protect.route";


import PlaylistBlank from "./paginas/PlaylistBlank";
import Card from "./components/nologin/Card";
import PlaylistCreator from "./paginas/playlistCreator";




function App() {
  return (
<Router>
  <Switch>
      <Route exact path ="/" component={Login} />

      <Route path ="/error" component={Card} />
      
      <ProtectedRoute  path ="/playlists" component={PlaylistBlank} />
      <ProtectedRoute path ="/playlistcreator" component={PlaylistCreator} />
      
      
      
      
      
  </Switch>
</Router>
  );
}

export default App;
