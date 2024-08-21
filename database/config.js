require('dotenv')
const moongose = require('mongoose')

const dbConnect = async () => {
    try {
        // connect to database
        await moongose.connect(process.env.MONGO_CNN)
        console.log('Connect to database');
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConnect  //Export the function