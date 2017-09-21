import React, { Component } from 'react';
import { BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import ListProductores from './productores/list';
import ReadOneProductor from './productores/read'
import { Grid, Cell } from 'react-mdc-web';
import Login from './login';
import "./index.scss";
var auth = require('./auth')

class Home extends Component{
    render(){
        return(<h1>Home</h1>)
    }
}

class Header extends Component{
    render(){
        return(
            <div id="mainHeader">
                <input type="text"placeholder="&#xF349; search"/>
                <i className="mdi mdi-account" />
            </div>
            )
    }
}

class Footer extends Component{
    render(){
        return(<div className="search-footer pagination"></div>)
    }
}

class Logout extends Component{
    componentDidMount(){
        auth.logout()
    }
    render(){
        return(
                <Redirect to={{
                    pathname: '/login',
                    state: { from: this.props.location }
                  }}/>
        )
    }
}

class NavBar extends Component{
  render() {
    return (
        <div>  
            <nav className="mdc-permanent-drawer leftBar">
              <div className="mdc-permanent-drawer__toolbar-spacer"></div>
              <div className="mdc-permanent-drawer__content altura">
                <nav id="icon-with-text-demo" className="mdc-list">
                <Link to='/'  className="mdc-list-item mdc-permanent-drawer--selected" aria-hidden="true"><i className='mdi mdi-home'/>Inicio</Link>
                <Link to='/productores' className="mdc-list-item" aria-hidden="true"><i className="mdi mdi-book" />Productores</Link>
                {
                    auth.loggedIn() 
                        ? 
                    <Link to="/logout" className="mdc-list-item" aria-hidden="true"><i className="mdi mdi-logout" />Cerrar sesion</Link>
                        :
                    <Link to="/login/" className="mdc-list-item" aria-hidden="true"><i className="mdi mdi-login" />Iniciar sesion</Link>
                }
                </nav>
              </div>
            </nav>
          </div>
    );
  }
};

class MainLayout extends Component{
  render() {
    return (
        <Router>
            <Grid>
                    <Cell col={2}>
                        <NavBar />
                    </Cell>
                    <Cell col={8}>
                        <main>
                            <Route exact path="/" component={Home} />
                            <PrivateRoute exact path="/productores" component={ListProductores}/>
                            <PrivateRoute exact path="/productores/:id" component={ReadOneProductor} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/logout" component={Logout} />
                        </main>
                        <Footer />
                    </Cell>
                </Grid>
        </Router>
    );
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    auth.loggedIn() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default MainLayout;
