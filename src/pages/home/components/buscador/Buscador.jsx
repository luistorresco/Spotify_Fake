import React from "react";
import styles from "./Buscador.modele.css";
import { useState } from "react";

export default function Buscador() {
  const [cancion, setCancion] = useState("");
  const [canciones, setCanciones] = useState([]);

  function handleSearch(e) {
    e.preventDefault();
    if (cancion.trim() === "") {
      alert("Ingrese un nombre de canción");
      return;
    }
    setCanciones("");
    getSongs(cancion);
  }
  const option = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f01cc619d9mshfb9603307084d24p180959jsnc10f265a0c4e",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };
  async function getSongs(cancion) {
    try {
      let url = `https://spotify23.p.rapidapi.com/search/?q=${cancion}&type=multi&offset=0&limit=5&numberOfTopResults=5`;
      let data = await fetch(url, option);
      let res = await data.json();
      setCanciones(res.tracks.items);
    } catch (error) {
      console.log("no se encontro nada en su busqueda", error);
    }
  }
  return (
    <>
      <div className="container">
        <form onSubmit={handleSearch} className="searchBox">
          <input
            type="text"
            value={cancion}
            onChange={(e) => setCancion(e.target.value)}
          />
          <button type="submit" className="button">
            Buscar
          </button>
        </form>
        <br />
      </div>

      <div className="resuldado">
        {canciones &&
          canciones.map((cancion, index) => (
            <div key={index} className="card">
              <h3>{cancion.data.name}</h3>
              <img
                src={cancion.data.albumOfTrack.coverArt.sources[0].url}
                alt={cancion.data.name}
              />
              <a href={`https://open.spotify.com/track/${cancion.data.uri.split(":")[2]}`} target="_blank" rel="noopener noreferrer">
                <button className="booton">Escuchar En Spotify</button>
              </a>
              <p className={styles.parrafo}></p>
            </div>
          ))}
      </div>
    </>
  );
}
