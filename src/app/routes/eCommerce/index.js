import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import ProductsList from './routes/ProductsList'
import ProductsGrid from './routes/ProductsGrid'

const eCommerce = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/products-list`}/>
            <Route path={`${match.url}/products-list`} component={ProductsList}/>
            <Route path={`${match.url}/products-grid`} component={ProductsGrid}/>
        </Switch>
    </div>
);

export default eCommerce;
