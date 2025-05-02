use('braispn');

db.getCollection('persons').insertMany([
    {"first-name":"Simón",
    "surnames":"Pérez Pérez"
    },
    {"first-name":"Francisco",
    "surnames":"Vaticano Roma",
    "nacionality":"Italian",
    "age":88
    }

]);