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
}

fetch("https://yts.mx/api/v2/list_movies.json")
.then(res => res.json())
.then(parsingData)
.then(displaying)