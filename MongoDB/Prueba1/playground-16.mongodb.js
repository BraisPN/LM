const database = "braispn";

use(database);

db.getCollection("dances").drop();

db.dances.insertMany([
  {
     "name":"Tango",
     "price":27,
     "places":20,
     "start_date":"1/01/2022",
     "end_date":"1/12/2022",
     "teacher":"Roberto Garcia",
     "hall":1
  },
  {
     "name":"Cha-cha-cha",
     "price":80,
     "places":18,
     "start_date":"1/07/2022",
     "end_date":"1/10/2022",
     "teacher":"Miriam Gutiérrez",
     "hall":1
  },
  {
     "name":"Rock",
     "price":30,
     "places":15,
     "start_date":"1/01/2022",
     "end_date":"1/12/2022",
     "teacher":"Laura Mendiola",
     "hall":1
  },
  {
     "name":"Merengue",
     "price":75,
     "places":12,
     "start_date":"1/01/2022",
     "end_date":"1/12/2022",
     "teacher":"Jesús Lozano",
     "hall":2
  },
  {
     "name":"Salsa",
     "price":32,
     "places":10,
     "start_date":"1/01/2022",
     "end_date":"1/12/2022",
     "teacher":"Jesús Lozano",
     "hall":2
  },
  {
     "name":"Pasodoble",
     "price":3200,
     "places":8,
     "start_date":"1/01/2022",
     "end_date":"1/12/2022",
     "teacher":"Miriam Gutierrez",
     "hall":2
  }
]);

// db.dances.find({}, {_id : 0, name :1});
// con disctint
// db.dances.distinct("name");

// db.dances.find({ price: { $gt: 40 } }, { _id: 0, name: 1 });
// con disctint
// db.dances.distinct("name", { price: { $gt: 40 } });

// db.dances.find().sort({ name: 1 });
// con disctint
// db.dances.distinct("name").sort();

// db.dances.find({ name: "Pasodoble" });

// db.dances.find({ teacher: /Lozano$/ }, { _id: 0, name: 1 });

// db.dances.find().limit(3);