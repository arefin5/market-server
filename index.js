 import express  from 'express';
 import dotenv from 'dotenv'
const app = express()


import {MongoClient, ServerApiVersion} from 'mongodb';
const uri = "mongodb+srv://arefin:arefin@cluster0.hkoqlvm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

console.log("Mongoose DB connect successfully")
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.get('/', (req, res) => res.send('Hello World!'))
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));
