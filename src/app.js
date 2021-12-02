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
    // case "filter":
    //   filterMovies();
    //   break;
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