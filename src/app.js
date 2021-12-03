require("./db/connection");
const yargs = require("yargs");
const { addMovie, listMovies, filterMovies, updateMovie, deleteMovie } = require("./movie/movieMethods");

const app = async (args) => {
  switch (process.argv[2]) {
    case "add":
      addMovie({ title: args.title, release: args.release, actor: args.actor, genre: args.genre, rating: args.rating });
      break;
    case "list":
      listMovies();
      break;
    case "filter by":
      filterMovies(process.argv[3], process.argv[4]);
      break;
    case "released before":
      filterMovies(process.argv[2], process.argv[3]);
      break;
    case "released after":
      filterMovies(process.argv[2], process.argv[3]);
      break;
    case "rated above":
      filterMovies(process.argv[2], process.argv[3]);
      break;
    case "rated below":
      filterMovies(process.argv[2], process.argv[3]);
      break;
    case "update":
      updateMovie({ _id: args.id }, { title: args.title, release: args.release, actor: args.actor, genre: args.genre, rating: args.rating });
      break;
    case "delete":
      deleteMovie({ _id: args.id });
      break;
    default:
      console.log("Incorrect command");
  }
}

app(yargs.argv);