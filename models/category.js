const {model, Schema} = require('mongoose')

const categorySchema = new Schema({
    name: {
        type: String, // tipo dato
        unique: true,  // unico
        required: [true, 'The name is required'], // requerido
        maxlength: [100, 'Max 100 characters'], // tamaño max
        minlength: [2, 'Min 2 characters']
    }
}
)

module.exports = model('Category', categorySchema, 'Categories')