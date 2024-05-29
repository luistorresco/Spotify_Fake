import { useEffect, useState } from "react";
import ObtenerTokenSpotify from "../../services/serviciosSpotify";
import { obtenerCancionesTop } from "../../services/servicioCanciones";
import styleD from "./Home.module.css";
import Canciones from "./components/canciones/Canciones";
import { obtenerArtistasTop } from "../../services/serviceArtistasVarios";
import Artistas from "./components/artistas/Artistas";
import Buscador from "./components/buscador/Buscador";

function Home() {
  const [carga, setCarga] = useState(true);
  // Estado para cancoines
  const [canciones, setCanciones] = useState(null);
  // Estado para artistas
  const [artistas, setArtistas] = useState(null);

  // Canciones
  useEffect(function () {
    ObtenerTokenSpotify().then(function (tokenrespuesta) {
      obtenerCancionesTop(tokenrespuesta).then(function (respuestaCanciones) {
        setCarga(false);
        setCanciones(respuestaCanciones.tracks);
      });
    });
  }, []);

  // Artista

  useEffect(function () {
    ObtenerTokenSpotify().then(function (tokenrespuesta) {
      obtenerArtistasTop(tokenrespuesta).then(function (respuestaArtista) {
        setCarga(false);
        setArtistas(respuestaArtista.artists);
      });
    });
  }, []);

  if (carga) {
    return (
      <>
        <h1>Cargando....</h1>
      </>
    );
  }
  return (
    <>
      <div><Canciones canciones={canciones} /></div>
      <div className={styleD.contenedor_home_artistas}>
        <div><Buscador Buscador={Buscador} /></div>

        <Artistas artistas={artistas} /></div>
    </>
  );
}

export default Home;
