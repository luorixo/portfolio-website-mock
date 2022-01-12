import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/post' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
