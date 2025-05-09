const database = "braispn";

use(database);

db.getCollection("orders").drop();

db.orders.insertMany([
  {
    order: "o1",
    year: 2022,
    paid: "Y",
    cost: {
      price: 40,
      currency: "NOK",
    },
    items: [
      {
        product: "p1",
        colours: ["blue", "black"],
        quantity: 15,
      },
    ],
    delivery_days: 5,
  },
  {
    order: "o2",
    year: 2022,
    paid: "Y",
    cost: {
      price: 15,
      currency: "EUR",
    },
    items: [
      {
        product: "p2",
        colours: ["white"],
        quantity: 4,
      },
      {
        product: "p3",
        colours: ["white", "black"],
        quantity: 1,
      },
    ],
    delivery_days: 4,
  },
  {
    order: "o3",
    year: 2020,
    paid: "N",
    cost: {
      price: 35,
      currency: "EUR",
    },
    items: [
      {
        product: "p3",
        colours: ["blue", "black"],
        quantity: 4,
      },
    ],
    delivery_days: 4,
  },
  {
    order: "o4",
    year: 2019,
    paid: "Y",
    cost: {
      price: 18,
      currency: "NOK",
    },
    items: [
      {
        product: "p2",
        colours: ["pink", "black"],
        quantity: 14,
      },
      {
        product: "p4",
        colours: ["white"],
        quantity: 1,
      },
    ],
    delivery_days: 2,
  },
  {
    order: "o5",
    year: 2022,
    paid: "Y",
    cost: {
      price: 25,
      currency: "NOK",
    },
    items: [
      {
        product: "p1",
        quantity: 15,
      },
    ],
    delivery_days: 3,
  },
]);


// db.orders.find();

// db.orders.find({ paid: "Y" }, { _id: 0});

// db.orders.find({ paid: "Y" ,year : {$lt : 2020}}, { _id: 0});

// db.orders.find({ $or: [{paid: "N" },{year : {$lt : 2020}}]}, { _id: 0});

// db.orders.find({ "cost.currency": "NOK" }, { _id: 0});

// db.orders.find({ "cost.currency": "NOK" , "cost.price": {$lt: 20}}, { _id: 0});

// db.orders.find({ "items.product": "p2"}, { _id: 0});

// db.orders.find({ "items.cuantity": {$lt: 15}}, { _id: 0});

// db.orders.find({ "items.colours": "blue"}, { _id: 0});

db.orders.find({}, { _id: 0, order: 1, year:1 });
