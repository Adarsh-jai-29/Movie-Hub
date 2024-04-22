// https://www.omdbapi.com/?apike=aea05c48&t=dis
  const baseUrl = "https://www.omdbapi.com/?apikey=aea05c48&t=";
  const searchInput = document.getElementById('search-input')
  const iconBtn = document.querySelector('.icon-btn')


  const poster = document.querySelector('.image img')
  const heading = document.querySelector('.title')
  const releaseDate = document.querySelector('.release-date')
  const length = document.querySelector('.runtime')
  const type = document.querySelector('.genre')
  const actors = document.querySelector('.cast')
  const review = document.querySelector('.rating')
  
/* <div class="rating">${res.Runtime} </div>  */


  const main = document.querySelector('.container')



function getMovie() {
  fetch(baseUrl+searchInput.value)
   .then(response=>{
  return response.json()

   })
   .then(res=>{

  main.innerHTML = `<div class="image"><img src="${res.Poster}" alt="No image available"></div>
  <div class="info">
   <h2 class="title">${res.Title}</h2>
   <div class="release-date">${res.Released}</div>
   <div class="runtime">${res.Runtime}</div>
   <div class="genre">${res.Genre}e</div>
   <div class="cast">${res.Actors}</div>  
       </div>`


   
  })
  //  .then(Poster=>{
  //  const posterSrc = poster.setAttribute("src", Poster );
  //   console.log(posterSrc)
  
  //  })

}

  iconBtn.addEventListener('click',getMovie)