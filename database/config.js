require('dotenv')
const mongoose = require('mongoose')

const dbUri = process.env.MONGO_CNN || 'mongodb+srv://jimenezcamila137:hef31bys90J*@cluster0.ezdkolb.mongodb.net/SoftSolutionsTest?retryWrites=true&w=majority&appName=Cluster0'

function dbConnect() {
    mongoose.connect(dbUri)
        .then(() => console.log('Connection to the database'))
        .catch(err => console.error('Error connecting to database:', err));
}
/* const dbConnect = async () => {
    try {
        // connect to database
        await moongose.connect(process.env.MONGO_CNN)
        console.log('Connect to database');
    } catch (error) {
        console.log(error);
    }
} */

module.exports = dbConnect  //Export the function