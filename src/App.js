import './App.css';
import Menu from './components/Menu/Menu.component'
import Header from './components/Header/Header.component'
import NotificationsPage from './pages/Notifications.page'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

function App() {
  return (
    
    <Router>
      <div className="App">
      

      <Menu></Menu>
      <Header></Header>
      
        <Switch>

          <Route path = "/notifications">
            <NotificationsPage></NotificationsPage>
          </Route>

        </Switch>
        

    </div>
    </Router>

  );
}

export default App;
