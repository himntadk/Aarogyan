const mongoose = require('mongoose')

// mongoose.connect("mongodb://localhost:27017/medico",{useNewUrlParser: true, useUnifiedTopology: true})
// .then(()=> console.log('Database Connection Established!'))
// .catch((err)=>console.log(err));

var password = encodeURIComponent("#Him@nta1234");
var user= encodeURIComponent("himantabiswadeka234");
mongoose.set("strictQuery", false);
mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.izypxdo.mongodb.net/medico?retryWrites=true&w=majority`,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('Database Connection Established!'))
.catch((err)=>console.log(err));