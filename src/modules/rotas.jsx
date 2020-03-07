import React, {Component} from 'react';
import {Route, Router, BrowserRouter} from 'react-router-dom'
import Vitrine from './vitrine'
import Detalhe from './detalhe'

class RouteHandling extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" component={Vitrine}/>
                <Route path="/detalhes" component={Detalhe}/>
            </BrowserRouter>
        )
    }
}

export default RouteHandling

