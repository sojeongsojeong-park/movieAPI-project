//Parsing { title, year, rating, genres, backgroundImage, summary }
function parsingData(data){
  return new Promise((res, rej) => {
    const newDatas = [];
    data.data.movies.map(m => {
      const newData = {
        title: m.title, 
        year: m.year,
        rating: m.rating,
        genres: m.genres[0],
        backgroundImage: m.large_cover_image,
        summary: m.summary
      }
      newDatas.push(newData);
    });
    res(newDatas);
  })
}

function displaying(data){
  for(let i = 0; i<data.length; i++){
    let html = `<div class="movies">
    <h2>${data[i].title} (${data[i].year})</h2>
    <div class="rating">${data[i].rating}/10</div>
    <img src = "${data[i].backgroundImage}"></img>
    <p>${data[i].summary}</p>
    </div>`
    document.getElementById("app").innerHTML +=html;
  }
  return data;
}

fetch("https://yts.mx/api/v2/list_movies.json")
.then(res => res.json())
.then(parsingData)
.then(displaying)
.then(makingButton)

// making button for sorting by genres

function makingButton(data){
  let arrGenres = data.map(d => d.genres);
  //remain unique element
  let uniqGenres = [];
  arrGenres.forEach(e => {
    if(!uniqGenres.includes(e)){
      uniqGenres.push(e);
    }
  }); 


  const buttonBar = document.getElementById("button");
  const GenreMain = document.createElement("div");
  GenreMain.id = "genreMain";
  GenreMain.innerText = "Choose Genres";
  buttonBar.appendChild(GenreMain);

  const GenreFirst = document.createElement("div");
  GenreFirst.className = "button";
  GenreFirst.innerText = uniqGenres[0];
  buttonBar.appendChild(GenreFirst);
  
  const GenreSecond = document.createElement("div");
  GenreSecond.className = "button";
  GenreSecond.innerText = uniqGenres[1];
  buttonBar.appendChild(GenreSecond);

  const GenreThird = document.createElement("div");
  GenreThird.className = "button";
  GenreThird.innerText = uniqGenres[2];
  buttonBar.appendChild(GenreThird);

  const GenreFourth = document.createElement("div");
  GenreFourth.className = "button";
  GenreFourth.innerText = uniqGenres[3];
  buttonBar.appendChild(GenreFourth);

  const GenreFifth = document.createElement("div");
  GenreFifth.className = "button";
  GenreFifth.innerText = uniqGenres[4];
  buttonBar.appendChild(GenreFifth);

}
