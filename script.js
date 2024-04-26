  const baseUrl = "https://www.omdbapi.com/?apikey=aea05c48&t=";
  const searchInput = document.getElementById('search-input')
  const iconBtn = document.querySelector('.icon-btn')
  const myForm = document.querySelector('#my-form')


  const poster = document.querySelector('.image img')
  const heading = document.querySelector('.title')
  const releaseDate = document.querySelector('.release-date')
  const length = document.querySelector('.runtime')
  const type = document.querySelector('.genre')
  const actors = document.querySelector('.cast')
  const review = document.querySelector('.rating')

/* <div class="rating">${res.Runtime} </div>  */


  const main = document.querySelector('.container')




  myForm.addEventListener('submit',
  function(e) {
    e.preventDefault();
  
    fetch(baseUrl+searchInput.value)
     .then(response=>{
    return response.json()
  
     })
     .then(res=>{
  
    main.innerHTML = `<div class="image"><img src="${res.Poster}" alt="No image available"></div>
    <div class="info">
     <h2 class="title">${res.Title}</h2>
     <div class="release-date">Release Date:${res.Released}</div>
     <div class="runtime">Runtime: ${res.Runtime}</div>
     <div class="genre">Genre: ${res.Genre}e</div>
     <div class="cast">Actors: ${res.Actors}</div>  
         </div>`
  
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      main.innerHTML = `<div class="error">An error occurred. Please try again later.</div>`;
    });
      myForm.submit();
  })


