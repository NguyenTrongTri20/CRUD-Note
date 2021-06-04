
import './App.css';
import Projects from './component/Main';
import NavBar from './component/NavBar';
import './font/fontawesome-free-5.15.3-web/css/all.css'
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom'

function App() {
  const theme = useSelector(state => state.theme)
  const {isLightTheme} = theme

  return (
    <div className="App">
      <div className={isLightTheme ? "grid wrap" : "grid wrap grid-dark"}>
        <div className="row" >
          <Router>
            <NavBar 
              isLightTheme={isLightTheme}
            />
            <Switch>
              <Route path='/Projects' component={()=> <Projects isLightTheme={isLightTheme} />} />
            </Switch>
            
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
