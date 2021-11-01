import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ProductPage from './ProductPage';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'><Home/></Route>
            <Route exact path='/products/:id'><ProductPage/></Route>
            <Route><p>Sorry, couldn't find what you were looking for :/</p></Route>
        </Switch>
    )
}

export default Routes;