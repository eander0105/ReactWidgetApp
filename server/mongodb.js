const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:admin@widgey-cluster.o4clr.mongodb.net/Widgey-app?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});