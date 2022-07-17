const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://jisnaaj:12345@cluster0.iqk6z.mongodb.net/library");
const schema =mongoose.Schema;
const blogschema = new schema({
    name:String,
    authorname:String,
    image:String,
    price:String,
    starRating:String
});
var blog =mongoose.model("authors",blogschema);
module.exports=blog;








// ("mongodb+srv://jisnaaj:12345@cluster0.iqk6z.mongodb.net/library");