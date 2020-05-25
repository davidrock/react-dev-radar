const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require('cors');

const app = express();

mongoose
  .connect(
    // "mongodb+srv://rochasdv:4815926@curso-qo1a9.gcp.mongodb.net/dev-radar?retryWrites=true&w=majority",
    "mongodb://root:devradar@localhost:27017/?authSource=admin&readPreference=primary&ssl=false",
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

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);
