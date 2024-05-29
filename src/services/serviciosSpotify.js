


async function ObtenerTokenSpotify() {
  //1. PREPARO (PA ONDE VOY?, A HACER QUE?, CON QUE DATOS?)
  const URL_TOKEN_SERVICE = "https://accounts.spotify.com/api/token";
  const METODO_HTTP = "POST";
  const VITE_CLIENT_ID = process.env.CLIENT_ID;
  const VITE_CLIENT_SECRET = process.env.CLIENT_SECRET;
  const GRANT_TYPE = "client_credentials";

  const PETICION_TOKEN = {
    method: METODO_HTTP,
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=${GRANT_TYPE}&client_id=${VITE_CLIENT_ID}&client_secret=${VITE_CLIENT_SECRET}`,
  };

  //2. INCIAR LA COMUNICACIÓN E IR HASTA EL BACK CON LA PETICION
  let respuestaServidor = await fetch(URL_TOKEN_SERVICE, PETICION_TOKEN);
  let tokenrespuesta = await respuestaServidor.json();

  //3. ENTREGAR EL RESULTADO AL COMPONENTE PARA QUE SE LO PINTE
  //AL USUARIO
  return `${tokenrespuesta.token_type} ${tokenrespuesta.access_token}`;
}

export default ObtenerTokenSpotify;
