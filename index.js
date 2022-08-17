const express = require("express");
const dotenv = require("dotenv");
const app = express();

const gigRoutes = require("./routes/gigRoutes.js");
const jobRoutes = require("./routes/jobRoutes.js");
const getjobRoutes=require("./routes/getjobRoutes.js");
const userRoutes=require("./routes/userRoutes.js");
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://arefin:arefin@cluster0.hkoqlvm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});


console.log("Mongoose DB connect successfully");
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => res.send("Hello World!"));

app.use("/gigs", gigRoutes);
app.use("/postjob", jobRoutes);
app.use("/getjob", getjobRoutes);
app.use('/user',userRoutes);
// handle error
app.use((req,res, next)=>{
  const error=new Error('not Founf') 
  res.status (404) 
  next(error)
  });
  app.use((req,res, next)=>{
  const statusCode=res.statusCode ===200 ? 500 : res.statusCode
   res.status(statusCode)
   res.json({
    messege:error.messege,
     });
  });

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
