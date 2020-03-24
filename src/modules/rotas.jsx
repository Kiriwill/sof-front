import React, {Component} from 'react';
import {Route, BrowserRouter} from 'react-router-dom'
import Vitrine from './vitrine'
import Detalhe from './detalhe'
import Busca from './busca'
import Cesta from './cesta'

class RouteHandling extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" component={Vitrine}/>
                <Route path="/detalhes" component={Detalhe}/>
                <Route path="/busca" component={Busca}/>       
                <Route path="/cesta" component={Cesta}/>
            </BrowserRouter>
        )
    }
}

export default RouteHandling

