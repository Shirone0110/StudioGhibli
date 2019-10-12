var filmPromise = d3.json(" https://ghibliapi.herokuapp.com/films ")

var pics = ["castle.jpg", "grave.jpg", "totoro.jpg", "kiki.jpg", "yesterday.jpg", "porco.jpg", "pom.jpg", "whisper.jpg", "mononoke.jpg", "yamadas.jpg", "spirited.jpg", "cat.jpg", "howl.jpg", "tales.jpg", "ponyo.jpg", "arrietty.jpg", "poppy.jpg", "wind.jpg", "kaguya.jpg", "marnie.jpg"];


filmPromise.then(
function (film)
{
    d3.select("h1").text("Select a Movie");
    console.log("films", film);
    film_info(film);
},
function (err)
{
    console.log("fail", err);
})

var film_info = function (films)
{
    d3.select("#films")
        .selectAll("p")
        .data(films)
        .enter()
        .append("p")
        .text(function (d) {return d.title;})
        .on("click", function (film)
           {
    removefilm();
        description(film, films.indexOf(film))
    })
}

var removefilm = function()
{
    d3.selectAll("#info *").remove();
}

var description = function (film, index)
{
    var box = d3.select("#info");
    
    box.append("img")
        .attr("src", pics[index])
    
    box.append("p")
        .text("Title: " + film.title)
    
    box.append("p")
        .text("Description: " + film.description)
    
    box.append("p")
        .text("Director: " + film.director)
    
    box.append("p")
        .text("Producer: " + film.producer)
    
    box.append("p")
        .text("Release date: " + film.release_date)
    
    box.append("p")
        .text("Rt score: " + film.rt_score)
}

