import Navbar from './navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';


function App() {

  return (
    <Router>
    <div className="App">
      <Navbar/>
      
        <Switch>
          <Route exact path="/">
            <div className="content">
              <Home/>  
            </div>
            </Route>
            {/* <Route path="/create">
              <Create/>
            </Route> */}
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
        </Switch>
      </div>
    </Router>
  );
} 

export default App;
