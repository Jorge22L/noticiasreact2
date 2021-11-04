import React, { Component } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';

class App extends Component {
  state = {
    noticias: []
  }

  componentDidMount(){
    this.consultarNoticias();  
  }

  consultarNoticias = async () =>{
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3ec86d006c134b5e97ed281288b55e2d`;

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias: noticias.articles
    });
  }
  render() { 
    return (
      <Fragment>
        <Header titulo='Noticias React API' />
        <div className="container white contenedor-noticias">
          <ListaNoticias noticias={this.state.noticias} />
        </div>
      </Fragment>
    );
  }
}
 
export default App;
