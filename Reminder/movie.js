const movieModal = document.querySelector(".movieInfoList");
let searchString = document.querySelector(".searchText");
const searchBtn = document.querySelector(".searchBtn");
const btn = document.querySelector(".myBtn");
const addWatchListBtn = document.querySelector(".addWatchListBtn");
const watchList = document.querySelector(".watchList");
const checkBoxes = document.querySelectorAll("#checkbox-element");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
const closeWarningBtn = document.querySelector(".closeBtn");
const warningModal = document.querySelector(".warningModal");

watchList.addEventListener("click", buttonClick);
searchBtn.addEventListener("click", getData);
btn.addEventListener("click", openModal);

closeWarningBtn.onclick = function () {
  warningModal.style.display = "none";
  toggleWarning();
};

span.onclick = function () {
  modal.style.display = "none";
  toggleModal();
  Array.from(checkBoxes).forEach((checkbox) => {
    checkbox.removeAttribute("disabled", true);
  });
};

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    toggleModal();

    Array.from(checkBoxes).forEach((checkbox) => {
      checkbox.removeAttribute("disabled", true);
    });
  }
});

function openModal() {
      const movieInfoDiv = document.querySelector(".movieInfoList");
      movieInfoDiv.setAttribute("style", "display:none;");
  const searchItem = document.querySelector(".searchText");
  searchItem.setAttribute("style", "display:block;");
  searchItem.setAttribute("style", "margin:0 !important;");
  searchBtn.setAttribute("style", "display:inline;");
      const label = document.querySelector(".labelSearch");
      label.removeAttribute("style", "display:none;");
  modal.style.display = "block";

  Array.from(checkBoxes).forEach((checkbox) => {
    checkbox.setAttribute("disabled", true);


  });
}

async function getData() {
  let apiString = "http://www.omdbapi.com/?apikey=b58046eb&t=*";

  let apiString1 = apiString.replace("*", searchString.value);

  searchString.value = "";

  let errorMessage = null;
  let movielist = "";

  movielist = await axios.get(apiString1);

  if (movielist.data.Response === "False") {
    errorMessage = "Could not find movie, try again!";
  }

  let resultMovieList = movielist.data;

  printData(resultMovieList, errorMessage);

  addWatchListBtn.addEventListener("click", addToMovieList);
}

function printData(movieList, error1) {
  console.log("hej" + error1);
  const errorDiv = document.querySelector(".errorTextDiv");

  if (error1 != null) {
    console.log(error1);
    const errorText = document.querySelector(".errorText");
    errorText.innerText = error1;
    errorDiv.setAttribute("style", "display:block");
    addWatchListBtn.setAttribute("style", "display:none;");
    const movieInfo = document.querySelector(".movieInfoList");

    movieInfo.setAttribute("style", "display:none;");
  } else {
    if (errorDiv != null) {
      errorDiv.setAttribute("style", "display:none");
      addWatchListBtn.setAttribute("style", "display:block;");
      const movieInfoDiv = document.querySelector(".movieInfoList");
      movieInfoDiv.setAttribute("style", "display:flex;");
    }

    movieModal.children[0].children[0].src = movieList.Poster;
    movieModal.children[1].children[0].innerText = movieList.Title;
    movieModal.children[1].children[1].innerText =
      "Rating" + " " + movieList.imdbRating;
    movieModal.children[1].children[8].innerText = movieList.Plot;
    movieModal.children[1].children[2].innerText =
      "Year:" + " " + movieList.Year;
    movieModal.children[1].children[3].innerText =
      "Runtime:" + " " + movieList.Runtime;
    movieModal.children[1].children[4].innerText =
      "Genre:" + " " + movieList.Genre;
    movieModal.children[1].children[5].innerText =
      "Director:" + " " + movieList.Director;
    movieModal.children[1].children[6].innerText =
      "Writer:" + " " + movieList.Writer;
    movieModal.children[1].children[7].innerText =
      "Actors:" + " " + movieList.Actors;
  }
}

function toggleWarning() {
  const modalWarning = document.querySelector(".warningModal");

  modalWarning.classList.toggle("hidden");
}

function toggleModal() {
  const modal = document.querySelector(".modal");
  modal.classList.toggle("hidden");

  const movieInfo = document.querySelector(".movieInfoList");

  movieInfo.setAttribute("style", "display:none;");

  movieModal.children[0].children[0].src = null;
  movieModal.children[1].children[0].innerText = null;
  movieModal.children[1].children[1].innerText = null;
  movieModal.children[1].children[2].innerText = null;
  movieModal.children[1].children[3].innerText = null;
  movieModal.children[1].children[4].innerText = null;
  movieModal.children[1].children[5].innerText = null;
  movieModal.children[1].children[6].innerText = null;
  movieModal.children[1].children[7].innerText = null;
  movieModal.children[1].children[8].innerText = null;
  addWatchListBtn.setAttribute("style", "display:none;");

  const errorDiv = document.querySelector(".errorTextDiv");
  errorDiv.setAttribute("style", "display:none");
}

function addToMovieList() {
  let listOfTitles = document.querySelectorAll(".addInList");

  let movielistDiv = document.querySelectorAll(".watchDiv");

  console.log(movielistDiv);

  listOfTitles.forEach((title) => {
    if (title.innerText === movieModal.children[1].children[0].innerText) {
      movielistDiv.forEach((movieDiv) => {
        if (movieDiv.children[1].innerText === title.innerText) {

           let warningText = document.querySelector(".warningText");
           warningText.innerText ="This movie is already in your watchlist!";
          warningModal.style.display = "block";

          movieDiv.remove();
        }
      });
    } 
  });

  const listDiv = document.createElement("div");
  listDiv.classList.add("watchDiv");
  listDiv.setAttribute(
    "style",
    "display:inline-block; margin:0 auto; padding:3px;"
  );

  watchList.appendChild(listDiv);

  const posterButton = document.createElement("button");

  posterButton.classList.add("posterBtn");

  listDiv.appendChild(posterButton);

  const image = document.createElement("img");
  image.classList.add("imgInList");
  image.setAttribute("src", movieModal.children[0].children[0].src);

  posterButton.appendChild(image);

  const title = document.createElement("p");
  title.classList.add("movieTitle");
  title.classList.add("addInList");
  title.innerText = movieModal.children[1].children[0].innerText;

  listDiv.appendChild(title);

  const rating = document.createElement("p");
  rating.classList.add("rating");
  rating.setAttribute("style", "display:none;");
  rating.innerText = movieModal.children[1].children[1].innerText;
  listDiv.appendChild(rating);

  const moviePlot = document.createElement("p");
  moviePlot.classList.add("plot");
  moviePlot.setAttribute("style", "display:none;");
  moviePlot.innerText = movieModal.children[1].children[8].innerText;
  listDiv.appendChild(moviePlot);

  const movieYear = document.createElement("p");
  movieYear.classList.add("year");
  movieYear.setAttribute("style", "display:none;");
  movieYear.innerText = movieModal.children[1].children[2].innerText;
  listDiv.appendChild(movieYear);

  const runtime = document.createElement("p");
  runtime.classList.add("runtime");
  runtime.setAttribute("style", "display:none;");
  runtime.innerText = movieModal.children[1].children[3].innerText;
  listDiv.appendChild(runtime);

  const genre = document.createElement("p");
  genre.classList.add("genre");
  genre.setAttribute("style", "display:none;");
  genre.innerText = movieModal.children[1].children[4].innerText;
  listDiv.appendChild(genre);

  const director = document.createElement("p");
  director.classList.add("director");
  director.setAttribute("style", "display:none;");
  director.innerText = movieModal.children[1].children[5].innerText;
  listDiv.appendChild(director);

  const writer = document.createElement("p");
  writer.classList.add("writer");
  writer.setAttribute("style", "display:none;");
  writer.innerText = movieModal.children[1].children[6].innerText;
  listDiv.appendChild(writer);

  const actors = document.createElement("p");
  actors.classList.add("actors");
  actors.setAttribute("style", "display:none;");
  actors.innerText = movieModal.children[1].children[7].innerText;
  listDiv.appendChild(actors);

  const trashBtn = document.createElement("i");
  trashBtn.classList.add("fa");

  trashBtn.classList.add("fa-trash-o");

  trashBtn.classList.add("movie-trash-btn");

  listDiv.appendChild(trashBtn);

modal.style.display = "none";
     toggleModal();
       Array.from(checkBoxes).forEach((checkbox) => {
         checkbox.removeAttribute("disabled", true);
       });
}

function buttonClick(event) {
  let button = event.target;

  console.log(button);

  if (button.classList.contains("movie-trash-btn")) {
    const div = button.parentElement;

    console.log(div);

    div.remove();
  } else if (button.parentElement.classList.contains("posterBtn")) {
    const movieInfo = document.querySelector(".movieInfoList");

    movieInfo.setAttribute("style", "display:flex;");

    const div = button.parentElement.parentElement;

    console.log("hejsan!!!!!");

    console.log(div);
    let poster = div.children[0].children[0].src;
    let title = div.children[1].innerText;
    let rating = div.children[2].innerText;
    let plot = div.children[3].innerText;
    let year = div.children[4].innerText;
    let runtime = div.children[5].innerText;
    let genre = div.children[6].innerText;
    let director = div.children[7].innerText;
    let writer = div.children[8].innerText;
    let actors = div.children[9].innerText;

    const searchItem = document.querySelector(".searchText");    
    searchItem.setAttribute("style", "display:none;");
    searchBtn.setAttribute("style", "display:none;");
    const label = document.querySelector(".labelSearch");
    label.setAttribute("style", "display:none;");

    movieInfo.children[0].children[0].src = poster;
    movieInfo.children[1].children[0].innerText = title;
    movieInfo.children[1].children[1].innerText = rating;
    movieInfo.children[1].children[2].innerText = plot;
    movieInfo.children[1].children[3].innerText = year;
    movieInfo.children[1].children[4].innerText = runtime;
    movieInfo.children[1].children[5].innerText = genre;
    movieInfo.children[1].children[6].innerText = director;
    movieInfo.children[1].children[7].innerText = writer;
    movieInfo.children[1].children[8].innerText = actors;

    console.log(movieInfo);

    modal.style.display = "block";
  }
}
