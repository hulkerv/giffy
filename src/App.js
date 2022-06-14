import "./App.css";
import Home from './pages/Home/Home'
import Detail from "./pages/Detail/Detail";
import SearchResults from './pages/SearchResults/SearchResults'

import { Route } from "wouter";

const App = () => {
  return (
    <div className="App">
      <section className="App-content">
        <img src="../public/logo.png" alt="logo" className="App-logo" />
        <Route
          component={Home}
          path='/'
        />
        <Route
          component={SearchResults}
          path="/search/:keyword"
        />
        <Route
          component={Detail}
          path="/gif/:id"
        />
      </section>
    </div>
  );
};

export default App;
