import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Gabriel from './Gabriel';
import Ratke from './Ratke';
import usuario from './usuario';
import Livros from './Livros';
import ListaLivros from './ListaLivros';
import CadastroLivro from './CadastroLivro';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Ratke}/>
                <Route path="/Gabriel" exact={true} component={Gabriel}/>
                <Route path="/usuario" exact={true} component={usuario}/>
                <Route path="/Livros" exact={true} component={Livros}/>
                <Route path="/ListaLivros" exact={true} component={ListaLivros}/>
                <Route path="/CadastroLivro" exact={true} component={CadastroLivro}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;