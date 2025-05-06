const database = "braispn";

use(database);

db.getCollection("library").drop();

db.createCollection("library");

db.library.insertMany([
    "book":[
       {
          "title":"TCP/IP Illustrated",
          "author":{
             "surname":"Stevens",
             "name":"W."
          },
          "publisher":"Addison-Wesley",
          "price":65.95
       },
       {
          "title":"Advan Programming for Unix environment",
          "author":{
             "surname":"Stevens",
             "name":"W."
          },
          "publisher":"Addison-Wesley",
          "price":65.95
       },
       {
          "title":"Data on the Web",
          "author":[
             {
                "surname":"Abiteboul",
                "name":"Serge"
             },
             {
                "surname":"Buneman",
                "name":"Peter"
             },
             {
                "surname":"Suciu",
                "name":"Dan"
             }
          ],
          "publisher":"Morgan Kaufmann publishers",
          "price":39.95
       },
       {
          "title":"Economics of Technology for Digital TV",
          "editor":{
             "surname":"Gerbarg",
             "name":"Darcy",
             "membership":"CITI"
          },
          "publisher":"Kluwer Academic publishers",
          "price":129.95
       }
    ]
 ]);

db.getCollection("library").find({});

// db.getCollection("library").find({ writer: "J.R.R. Tolkien" })

// db.getCollection("library").find({ actors: "Brad Pitt" })

// db.getCollection("library").find({ franchise: "The Lord of the Rings" })

// db.getCollection("library").find({ year: { $gte: 1990, $lte: 1999 } })

// db.getCollection("library").find({  $or: [{ year: { $lte: 2000 } }, { year: { $gte: 2010 } }],});


