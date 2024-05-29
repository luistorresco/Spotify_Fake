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
}