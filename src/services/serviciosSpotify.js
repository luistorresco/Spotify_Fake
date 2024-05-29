async function ObtenerTokenSpotify() {
  //1. PREPARO (PA ONDE VOY?, A HACER QUE?, CON QUE DATOS?)
  const URL_TOKEN_SERVICE = "https://accounts.spotify.com/api/token";
  const METODO_HTTP = "POST";
  const CLIENT_ID = "4de359057e48440288113b7de22f9a79";
  const CLIENT_SECRET = "949f039b076a42a5a6c682ed5ed65083";
  const GRANT_TYPE = "client_credentials";

  const PETICION_TOKEN = {
    method: METODO_HTTP,
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=${GRANT_TYPE}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
  };

  //2. INCIAR LA COMUNICACIÓN E IR HASTA EL BACK CON LA PETICION
  let respuestaServidor = await fetch(URL_TOKEN_SERVICE, PETICION_TOKEN);
  let tokenrespuesta = await respuestaServidor.json();

  //3. ENTREGAR EL RESULTADO AL COMPONENTE PARA QUE SE LO PINTE
  //AL USUARIO
  return `${tokenrespuesta.token_type} ${tokenrespuesta.access_token}`;
}

export default ObtenerTokenSpotify;
