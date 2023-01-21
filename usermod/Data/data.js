// Devil123 --nikhil
// mongoose.set('strictQuery', true);
// console.log('Hello')
//mongodb+srv://nikhil:Devil123@singh.rdxxovq.mongodb.net/?retryWrites=true&w=majority


const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://nikhil:Devil123@singh.rdxxovq.mongodb.net/users?retryWrites=true&w=majority', { useNewUrlParser: true }).catch(error => {
    console.log(error)
})

function mongoDataBase(person) {

    const Schema = mongoose.Schema;
    const collectionSchema = new Schema({
        name: String,
        email: String,
        number: Number,
        password: String
    });


    const Collection = mongoose.model('Signedin', collectionSchema);
    Collection.create(person, function (err, doc) {
        if (err) return handleError(err);
        console.log(doc);
    });

}

// module.exports = mongoDataBase;


// const newDocument = new Collection(person);
// newDocument.save(function (err, doc) {
//     if (err) return handleError(err);
//     console.log(doc);
// });


// Collection.insertMany([
//     { name: 'John', age: 25 },
//     { name: 'Mike', age: 22 },
//     { name: 'Emily', age: 28 }
// ], function(err, docs) {
//     if (err) return handleError(err);
//     console.log(docs);
// });

function compile()
{
    const userSchema = new mongoose.Schema({
        email: String,
        name: String
    });
    const User = mongoose.model('Signedin', userSchema);
}



function finduser(user) {
    // name = user.name
    // password = user.password

    User.findOne(user, (err, user) => {
        if (user) {
            console.log('User found:', user);
        } else {
            console.log('User not found.');
        }
    });
}

module.exports=
{
    mongoDataBase: mongoDataBase,
    finduser : finduser
};


// User.countDocuments({ email: "example@example.com" }, function (err, count) {
//     if(count > 0){
//     console.log("User found")
//     }else{
//     console.log("User not found")
//     }
// });
