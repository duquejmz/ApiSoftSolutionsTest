import { model, Schema } from 'mongoose'

const productSchema = new Schema({
    name: {
        type: String, // tipo dato
        unique: true,  // unico
        required: [true, 'The category is required'], // requerido
        maxlength: [50, 'Max 50 characters'], // tamaño max
        minlength: [2, 'Min 2 characters']
    },
    price: {
        type: Number, // tipo dato
        required: [true, 'The category is required'], // requerido
        minlength: [3, 'Min 3 characters']
    },
    stock: {
        type: Number,
        required: [true, 'The stock is required']
    }
})

productSchema.set('toJSON', {
    versionKey : false
})


export default model('Product', productSchema, 'Products') // crea la coleccion sino existe y exporta los datos