
const http = new XMLHttpRequest() ;
const images = document.querySelectorAll(".myposter,.myposter2,.myposter3");
const titles = document.querySelectorAll(".p1,.p2,.p3");
const dates= document.querySelectorAll(".AA2");
http.open("GET", "https://api.themoviedb.org/3/trending/movie/day?api_key=1553ab3490421bf0773dafffb180c2d8");

http.onload = () => {

  if (http.status > 199 && http.status < 300) {
    const { results } = JSON.parse(http.responseText);
    
    images.forEach((x, i) => x.src = "https://image.tmdb.org/t/p/w200/" + results[i % results.length].poster_path);
    titles.forEach((x, i) => x.textContent = results[i % results.length].title);
    dates.forEach((x, i) => x.textContent = results[i % results.length].release_date);
  }
}

http.send();



document.getElementById("action").addEventListener("click",()=>{

    http.open("GET", "https://api.themoviedb.org/3/movie/now_playing?api_key=2c26f25e2bfb7c767c3cd45376a5a970&language=en-US&page=1");
    const images2 = document.querySelectorAll(".myposter2");
    const titles2 = document.querySelectorAll(".p2,.p3");
    http.onload = () => {
    
      if (http.status > 199 && http.status < 300) {
        const { results } = JSON.parse(http.responseText);
        
        images2.forEach((x, i) => x.src = "https://image.tmdb.org/t/p/w200/" + results[i % results.length].poster_path);
        titles2.forEach((x, i) => x.textContent = results[i % results.length].title);
        
           
      }
    }
    
    http.send();
})
document.getElementById("all").addEventListener("click",()=>{

http.open("GET", "https://api.themoviedb.org/3/trending/movie/day?api_key=1553ab3490421bf0773dafffb180c2d8");

http.onload = () => {

  if (http.status > 199 && http.status < 300) {
    const { results } = JSON.parse(http.responseText);
    
    images.forEach((x, i) => x.src = "https://image.tmdb.org/t/p/w200/" + results[i % results.length].poster_path);
    titles.forEach((x, i) => x.textContent = results[i % results.length].title);
    dates.forEach((x, i) => x.textContent = results[i % results.length].release_date);
  }
}

http.send();

})