import React, { useEffect, useState, useCallback } from "react";
import ObtenerTokenSpotify from "../../../../services/serviciosSpotify";
import style from "./ManejoCanciones.module.css";
import { useParams } from "react-router-dom";

export default function ManejoCanciones() {
  let { spotify } = useParams();

  const obtenerCancionesTop = useCallback(
    async (tokenrespuesta) => {
      const URL_TOPTRACKS_SERVICE = `https://api.spotify.com/v1/artists/${spotify}/top-tracks?market=us`;

      const PETICON_CANCIONES = {
        method: "GET",
        headers: { Authorization: tokenrespuesta },
      };

      let respuestaServicio = await fetch(
        URL_TOPTRACKS_SERVICE,
        PETICON_CANCIONES
      );
      let canciones = await respuestaServicio.json();
      return canciones;
    },
    [spotify]
  );

  const [canciones, setCanciones] = useState(null);
  const [carga, setCarga] = useState(true);

  useEffect(
    function () {
      async function fetchData() {
        const tokenrespuesta = await ObtenerTokenSpotify();
        const respuestaCanciones = await obtenerCancionesTop(tokenrespuesta);

        setCarga(false);
        setCanciones(respuestaCanciones.tracks);
      }

      fetchData();
    },
    [spotify, obtenerCancionesTop]
  );

  if (carga) {
    return (
      <>
        <h1>Cargando....</h1>
      </>
    );
  }

  return (
    <>
      <h1>Top 10 Mejores Canciones</h1>
      <br />
      <hr />
      <div className={style.container__manejoCanciones}>
        {canciones.map(function (cancion) {
          return (
            <div key={cancion.id} className={style.card}>
              <img src={cancion.album.images[0].url} alt={cancion.name} />
              <h3>{cancion.name}</h3>
              <p>{cancion.album.name}</p>
              <audio
                src={cancion.preview_url}
                controls
                className="w-100"
              ></audio>
            </div>
          );
        })}
      </div>
    </>
  );
}
