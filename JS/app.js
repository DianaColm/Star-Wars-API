//funcion que contiene la API KEY y que inicia el request
function getData() {
  const starWarsRequest = new XMLHttpRequest();
  starWarsRequest.open('GET', `https://swapi.co/api/films/`);
  starWarsRequest.onload = addFilms;
  starWarsRequest.onerror = handleError;
  starWarsRequest.send();
  console.log(starWarsRequest);
}

//funcion por si hay error en el request
function handleError() {
  console.log('se ha presentado un error');
}

//funcion para acceder a la data
function addFilms() {
  const data = JSON.parse(this.responseText);
  // console.log(data);
  const totalFilms = data.results;
  // console.log(totalFilms);
totalFilms.forEach((film) => {
  const filmTitle = film.title;
  const episode = film.episode_id;
  const filmDescription = film.opening_crawl;

paintFilms(filmTitle, filmDescription, episode)
});
};
//funcion para pintar data
function paintFilms (filmTitle, filmDescription, episode){

//template strings
    let template = `<div class="text-center col-md-6">
    <div>
        <h5>Episodio ${episode}: ${filmTitle}</h5>
    </div>
    <div>
        <div class="row">
            <h6 id="movie_description">${filmDescription}</h6>
        </div>
    </div>
</div>`

    const containerMovies = document.getElementById('containerMovies');
    containerMovies.innerHTML += template

};
getData();
