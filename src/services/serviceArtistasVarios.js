export async function obtenerArtistasTop(token) {
  const a =
    ",711MCceyCBcFnzjGY4Q7Un,5M52tdBnJaKSvOpJGz8mfZ,1fBCIkoPOPCDLUxGuWNvyo,7HL4id2U7FSDJtfKQHMgQx,6mdiAmATAx73kdxrNrnlao,7b85ve82Sh36a3UAx74wut,6H1RjVyNruCmrBEWRbD0VZ,2cnMpRsOVqtPMfq7YiFE6K,568ZhdwyaiCyOGJRtNYhWf";
  const URL_TOPTRACKS_SERVICE = `https://api.spotify.com/v1/artists?ids=29kkCKKGXheHuoO829FxWK${a}`;

  const PETICION_ARTISTAS = {
    method: "GET",
    headers: { Authorization: token },
  };

  try {
    let respuestaServicio = await fetch(
      URL_TOPTRACKS_SERVICE,
      PETICION_ARTISTAS
    );
    let artistas = await respuestaServicio.json();
    return artistas;
  } catch (error) {
    console.error("Error al obtener los artistas:", error);
    return null;
  }
}
