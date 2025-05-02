const database = "braispn"

use(database);

// db.createCollection("bookstore");
// // Insert a few documents into the sales collection.
// db.getCollection("bookstore").insertMany( [
//     {
//       "title": "Everyday Italian",
//       "author": "Giada De Laurentiis",
//       "year": 2005,
//       "price": 30
//     },
//     {
//       "title": "Harry Potter",
//       "author": "J K. Rowling",
//       "year": 2005,
//       "price": 29.99
//     },
//     {
//       "title": "XQuery Kick Start",
//       "author": [
//         "James McGovern",
//         "Per Bothner",
//         "Kurt Cagle",
//         "James Linn",
//         "Vaidyanathan Nagarajan"
//       ],
//       "year": 2003,
//       "price": 49.99
//     },
//     {
//       "title": "Learning XML",
//       "author": "Erik T. Ray",
//       "year": 2003,
//       "price": 39.95
//     }
//   ]);



// db.getCollection('bookstore').find({},{"_id":0,"title":1})

// db.getCollection('bookstore').find({ "price": { "$lt": 30 } })

// db.getCollection('bookstore').find({ "price": { "$lt": 30 } }, { "_id": 0, "title": 1 })

// db.getCollection('bookstore').find({ "price": { "$gt": 30 } }, { "_id": 0, "title": 1 }).sort({ "title": 1 })

db.getCollection('bookstore').find({ "year": { "$gte": 2003, "$lte": 2004 } })
