const TOKEN_API =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjBmNTczZTVjNmU1ZWVjMDQzMGE1ZWE3ZmQ3ODQzNCIsInN1YiI6IjY1NzRmNDYzNGJmYTU0MDEzODdmNGM1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cL5q_2WhzeSL3L49uADnzfZ4bVF_tfgLUXEt1Z0rbL4";

const basePathImg = "https://image.tmdb.org/t/p/original/";

const app = document.getElementById("app"); // <div id="app"></div>

async function fetchData(route, method = "GET") {
  const url = `https://api.themoviedb.org/3/${route ? route : "movie/popular"}`;

  const res = await fetch(url, {
    method: method,
    headers: {
      Authorization: `Bearer ${TOKEN_API}`,
    },
  });
  const data = await res.json();
  return data;
}

async function getData() {
  const { results } = await fetchData();
  const container = document.createElement("div");// <div></div>
  results.forEach(({ backdrop_path, title, overview, poster_path }) => {
    const card = document.createElement("div"); // <div></div>
    card.className = "card"; // <div class="card"></div>
    card.innerHTML = `
        <div class="card__item">
            <img class="card__img_bg" src="${
              basePathImg + backdrop_path
            }" alt="${title}" />
            <div class="data_card">
                <img class="card__img" src="${
                  basePathImg + poster_path
                }" alt="${title}" />
                <div class="data_text">
                    <h1>${title}</h1>
                    <p>${overview}</p>
                </div>
            </div>
        </div>
    `;

    /*<div>
        <div class="card__item">
            <img class="card__img_bg" src="${basePathImg + backdrop_path}" alt="${title}" />
            <div class="data_card">
                <img class="card__img" src="${basePathImg + poster_path}" alt="${title}" />
                <div class="data_text">
                    <h1>${title}</h1>
                    <p>${overview}</p>
                </div>
            </div>
        </div>  
    </div>*/
    container.appendChild(card);// <div> {card}  </div>
  });
  app.appendChild(container); // <div id="app"> {container} </div>
}
/*
adult: false;
backdrop_path: "/4woSOUD0equAYzvwhWBHIJDCM88.jpg";
genre_ids: (3)[(28, 27, 53)];
id: 1096197;
original_language: "en";
original_title: "No Way Up";
overview: "Characters from different backgrounds are thrown together when the plane they're travelling on crashes into the Pacific Ocean. A nightmare fight for survival ensues with the air supply running out and dangers creeping in from all sides.";
popularity: 2111.241;
poster_path: "/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg";
release_date: "2024-01-18";
title: "No Way Up";
video: false;
vote_average: 6.415;
vote_count: 422;
*/
