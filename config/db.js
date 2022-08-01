// import mongoose from 'mongoose';
// const connectDB=async()=>{
//     const uri=`mongodb+srv://arefin:arefin@cluster0.tcrvc.mongodb.net/fiver-backend?retryWrites=true&w=majority`

//     try{
//     mongoose.connect(uri, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         })
//     console.log("Mongoose DB connect successfully")
//     }catch(err){
//         console.log(err);
//         process.exit;
//     }
// }
// export default connectDB;

// import {MongoClient, ServerApiVersion} from 'mongodb';
// const uri = "mongodb+srv://arefin:arefin@cluster0.hkoqlvm.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
