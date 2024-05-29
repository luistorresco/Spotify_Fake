# Spotify Fake
<img width="921" alt="Screenshot 2024-05-29 182013" src="https://github.com/luistorresco/Spotify_fake/assets/114264579/2f699063-c6dc-4926-902a-f423323a3c73">

Esta es una aplicación de ejemplo que utiliza la API de Spotify para obtener información de artistas, álbumes y canciones. Es una aplicación de React creada con Create React App.

## Requisitos

- Node.js
- npm

## Instalación

1. Clona este repositorio en tu máquina local:
git clone git@github.com:luistorresco/Spotify_fake.git

2. Navega al directorio del proyecto:
cd Spotify_Fake

3. Instala las dependencias:
npm install

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto.

2. Dentro del archivo `.env`, configura las siguientes variables de entorno:
REACT_APP_CLIENT_ID=<Tu_Client_ID_de_Spotify> REACT_APP_CLIENT_SECRET=<Tu_Client_Secret_de_Spotify>

Asegúrate de reemplazar `<Tu_Client_ID_de_Spotify>` y `<Tu_Client_Secret_de_Spotify>` con tus propias credenciales de la API de Spotify.

## Uso

1. Inicia la aplicación en modo de desarrollo:
npm start

2. Abre tu navegador y visita la siguiente URL:
http://localhost:3000
La aplicación se cargará y podrás comenzar a utilizarla para buscar artistas, ver sus álbumes y canciones, y reproducir fragmentos de canciones.

## Despliegue

Puedes realizar un despliegue de la aplicación en GitHub Pages utilizando el siguiente comando:

npm run deploy 

Esto generará una versión optimizada de producción y la desplegará en una rama llamada `gh-pages` en tu repositorio.

## Contribución

Si deseas contribuir a este proyecto, siéntete libre de hacer un fork y enviar tus pull requests.

## Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).
