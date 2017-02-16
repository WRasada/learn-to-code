var someObject = {
  friends: [
    {name: "Malfoy"},
    {name: "Crabbe"},
    {name: "Goyle"}
  ],
  color: "baby blue",
  isEvil: true
}

var Movies = [
  {
    title: "In Bruges",
    rating: 4.5,
    hasWatched: false
  },
  {
    title: "Toy Story",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Lion King",
    rating: 4.5,
    hasWatched: true
  },
  {
    title: "Jungle Book",
    rating: 5,
    hasWatched: false
  },
  {
    title: "Transformers",
    rating: 3.5,
    hasWatched: true
  },
  {
    title: "Les Miserables",
    rating: 4.5,
    hasWatched: false
  },
  {
    title: "Mad Max",
    rating: 4.5,
    hasWatched: true
  },
]

function buildString(movie) {
    var result = "You have ";
    if (movie.hasWatched === true) {
      result += "watched ";
    } else {
      result += "not seen ";
    }
    result += "\"" + movie.title + "\"" + " - ";
    result += movie.rating + " stars";
    return result;
  }
