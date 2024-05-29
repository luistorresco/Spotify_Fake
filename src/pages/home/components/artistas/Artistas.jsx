import React from "react";
import style from "./Artistas.module.css";
import { Link } from "react-router-dom";

export default function Artistas({ artistas }) {
  return (
    <div className={style.container__artista}>
      {artistas &&
        artistas.map(function (cancion) {
          const partesUrl = cancion.external_urls.spotify.split("/");
          const ultimoParametro = partesUrl[partesUrl.length - 1];

          return (
            <section className="container" key={cancion.id}>
              <div className="row row-cols1 row-cols-md-3">
                <div className={style.card}>
                  <div className="card h-100">
                    <h3 className="canciones">{cancion.name}</h3>
                    <div className={style.icond}>
                      <Link to={"/manejo/" + ultimoParametro}>
                        <img
                          src={cancion.images[0].url}
                          className={style.imagen}
                          alt={cancion.name}
                        />
                        <p className={style.genre}> {cancion.genres[1]}</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
    </div>
  );
}
