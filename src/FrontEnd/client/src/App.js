import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Dashboard from './components/pages/Dashboard';
import TrailerDetail from './components/pages/TrailerDetail';
import Home from './components/pages/Home';
import AppState from './context/AppState';

const App = () => {
    return (
        <div>
            <AppState>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/trailer/:id' component={TrailerDetail} />
                        <Route exact path='/admin' component={Dashboard} />
                    </Switch>
                    <Footer />
                </Router>
            </AppState>
        </div>
    );
};

export default App;
