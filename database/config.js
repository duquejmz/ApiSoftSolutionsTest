require('dotenv')
const mongoose = require('mongoose')

const dbUri = process.env.MONGO_CNN || 'mongodb+srv://jimenezcamila137:hef31bys90J*@cluster0.ezdkolb.mongodb.net/SoftSolutionsTest?retryWrites=true&w=majority&appName=Cluster0'

function dbConnect() {
    mongoose.connect(dbUri, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.error('Error al conectar a la base de datos:', err));
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