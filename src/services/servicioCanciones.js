export async function obtenerCancionesTop(tokenrespuesta) {
  const URL_TOPTRACKS_SERVICE =
    "https://api.spotify.com/v1/artists/1wGIhYkKWSq4yACtTkCkSX/top-tracks?market=us";

  const PETICON_CANCIONES = {
    method: "GET",
    headers: { Authorization: tokenrespuesta },
  };

  let respuestaServicio = await fetch(URL_TOPTRACKS_SERVICE, PETICON_CANCIONES);
  let canciones = await respuestaServicio.json();
  return canciones;
}
