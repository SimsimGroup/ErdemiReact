import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'uikit/dist/css/uikit.css';
import 'uikit/dist/js/uikit.js';
import './App.css';
import axios from "axios";
//Components
import Addgood from './components/Good/addgood';
import Goodlist from './components/Good/goodlist';
import AddCatalog from './components/Catalog/addcatalog';
import CatalogList from './components/Catalog/cataloglist';
import Addmodel from './components/Model/addmodel';
import ModelList from './components/Model/modellist';
import Addbrand from './components/Brand/addbrand';
import BrandList from './components/Brand/brandlist';
import Order from './components/Order/order';
import CompleteOrder from './components/Order/completeorder';
import Quiz from './components/Quiz/quiz';
import Addquiz from './components/Quiz/addquiz';
import Addpromo from './components/Promo/addpromo';
import PromoList from './components/Promo/promolist';
import Login from './components/login';
import Layouts  from './components/Layouts/layouts';

axios.defaults.baseURL = 'http://test.exesoft.org:8008/';// for all requests
axios.defaults.headers.common['Authorization'] = 'Bearer a4d5c33e12795c21a3e40a53d94ddfd0'; // for all requests
axios.defaults.headers.common['Accept'] = 'application/json'; // for all requests
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=utf-8'; // for all requests

class App extends Component {
  render() {
    return (
        <Layouts>
            <Switch>
                <Route path='/editgood/:id' component={Addgood}/>
                <Route path='/goodform' component={Addgood}/>
                <Route path='/addtolist' component={Goodlist}/>
                <Route path='/addcatalog' component={AddCatalog}/>
                <Route path='/cataloglist' component={CatalogList}/>
                <Route path='/addmodel' component={Addmodel}/>
                <Route path='/modellist' component={ModelList}/>
                <Route path='/editmodel/:id' component={Addmodel}/>
                <Route path='/addbrand' component={Addbrand}/>
                <Route path='/editbrand/:id' component={Addbrand}/>
                <Route path='/brandlist' component={BrandList}/>
                <Route path='/order' component={Order}/>
                <Route path='/completeorder' component={CompleteOrder}/>
                <Route path='/quiz' component={Quiz}/>
                <Route path='/addquiz' component={Addquiz}/>
                <Route path='/addpromo/:id' component={Addpromo}/>
                <Route path='/promolist' component={PromoList}/>
                <Route path='/login' component={Login} />
            </Switch>
        </Layouts>
        );
    }
}

export default App;
