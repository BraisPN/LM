const database = "braispn"

use(database);

db.getCollection('bookstore').find({ "price": { "$lt": 30 } }, { "_id": 0, "title": 1 })
