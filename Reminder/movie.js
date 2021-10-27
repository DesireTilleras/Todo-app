const movieModal = document.querySelector(".movieInfoList");

let searchString = document.querySelector(".searchText");

const searchBtn = document.querySelector("#searchBtn");

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  toggleModal();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    toggleModal();
  }
};

searchBtn.addEventListener("click", getData);

async function getData() {
  let apiString = "http://www.omdbapi.com/?apikey=b58046eb&t=*";

  let apiString1 = apiString.replace("*", searchString.value);

  let errorMessage = null;
  let movielist = "";

  movielist = await axios.get(apiString1);

  if (movielist.data.Response === "False") {

    errorMessage = "Could not find movie, try again!";
  }

  let resultMovieList = movielist.data;

  printData(resultMovieList, errorMessage);
}

function printData(movieList, error1) {


   console.log("hej"+ error1);
       const errorDiv = document.querySelector(".errorTextDiv");

  if (error1 != null) {
      console.log("Här!");
      console.log(error1);
    const errorText = document.querySelector(".errorText");
    errorText.innerText = error1;
    errorDiv.setAttribute("style", "display:block");
  } else {
    

    if(errorDiv!=null){
            errorDiv.setAttribute("style", "display:none");
    }

    console.log(movieList);

  movieModal.children[0].children[0].src = movieList.Poster;
  movieModal.children[1].children[0].innerText = movieList.Title;
  movieModal.children[1].children[1].innerText =
    "Rating" + " " + movieList.imdbRating;
  movieModal.children[1].children[2].innerText = movieList.Plot;

  }
}

function toggleModal() {
  const modal = document.querySelector(".modal");

  modal.classList.toggle();
}
