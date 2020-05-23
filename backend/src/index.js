const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

mongoose
  .connect(
    "mongodb+srv://rochasdv:4815926@curso-qo1a9.gcp.mongodb.net/dev-radar?retryWrites=true&w=majority",
// "mongodb://nexidea:Asd48159263@nexidea-shard-00-00-9vctd.mongodb.net:27017,nexidea-shard-00-01-9vctd.mongodb.net:27017,nexidea-shard-00-02-9vctd.mongodb.net:27017/test?ssl=true&replicaSet=nexidea-shard-0&authSource=admin&retryWrites=true&w=majority"
   {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .catch((err) => {
    console.log(err);
  });

// mongoose.connect(
//   "mongodb+srv://nexidea:Asd48159263@nexidea-9vctd.mongodb.net/dev-radar?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

app.use(express.json());
app.use(routes);

app.listen(3333);
