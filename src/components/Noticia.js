import React, { Component } from 'react';

const Noticia = ({noticia})=> {
    //EXTRAER DATOS
    const {urlToImage, url, title, description, source} = noticia;

    const imagen = <div className="card-image">
        <img src={urlToImage} alt={title} />
        <span className="card-title">{source.name}</span>
    </div>

    return(
        <div className="col s12 m6 l4">
            <div className="card">
                {imagen}
            </div>

            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

            <div className="card-action">
                <a href={url} target="_blank" rel="noopener noreferrer" className="waves-effect waves-light btn">
                    Ver noticia completa
                </a>
            </div>
        </div>
    );

};

export default Noticia;