


const MongoClient  = require("mongodb").MongoClient;
const assert = require("assert");

// Replace the uri string with your MongoDB deployment's connection string.
const url = "mongodb://localhost:27017";

const client = new MongoClient(url,  { useUnifiedTopology: true });

const dbname = 'fruitsDB';

client.connect(function(err){
    assert.equal(null, err);
    console.log("Connected successfully");
    const db = client.db(dbname);
          

       finddocuments(db, function() {
           client.close();
       });
});


const insertDocuments = function(db, callback){

    const collection = db.collection('fruits');

    collection.insertMany([
        { name: 'Apple',
        score:8,
         review:"Great taste"   },

         { name: 'Orange',
        score:5,
         review:"Sour"   },

         { name: 'Banana',
        score:9,
         review:"Good source of potassium"}

    ],
         function(err, result) {
             assert.equal(err, null);
             assert.equal(3, result.result.n);
             assert.equal(3, result.ops.length);
             console.log("Inserted 3 documents into the collection");
             callback(result);
         }
    );
};


const finddocuments = function(db, callback){

    const collection = db.collection('fruits');

    collection.find({}).toArray(function(err,fruits){
        assert.equal(err, null);
        console.log("Found documents");
        console.log(fruits);
        callback(fruits);
    });
}
