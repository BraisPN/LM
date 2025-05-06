const database = "braispn";

use(database);

db.getCollection("movies").drop();

db.createCollection("movies");

db.movies.insertMany([
  {
    title: "The Shining",
    writer: "Stephen King",
    year: 1980,
    actors: ["Jack Nicholson", "Shelley Duvall"],
  },
  {
    title: "No Country for Old Men",
    writer: "Cormac McCarthy",
    year: 2007,
    actors: ["Tommy Lee Jones", "Javier Bardem"],
  },
  {
    title: "Fight Club",
    writer: "Chuck Palahniuk",
    year: 1999,
    actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
  },
  {
    title: "The Fellowship of the Ring",
    writer: "J.R.R. Tolkien",
    year: 2001,
    franchise: "The Lord of the Rings",
  },
  {
    title: "The Two Towers",
    writer: "J.R.R. Tolkien",
    year: 2002,
    franchise: "The Lord of the Rings",
  },
  {
    title: "The Return of the King",
    writer: "J.R.R. Tolkien",
    year: 2003,
    franchise: "The Lord of the Rings",
    synopsis:
      "The final battle for Middle-earth begins as Frodo and Sam approach Mount Doom.",
  },
  { title: "Inception" },
  { title: "Interstellar" },
]);

db.getCollection("movies").find({});

db.getCollection("movies").find({ writer: "J.R.R. Tolkien" })

db.getCollection("movies").find({ actors: "Brad Pitt" })

db.getCollection("movies").find({ franchise: "The Lord of the Rings" })

db.getCollection("movies").find({ year: { $gte: 1990, $lte: 1999 } })

db.getCollection("movies").find({  $or: [{ year: { $lte: 2000 } }, { year: { $gte: 2010 } }]});
