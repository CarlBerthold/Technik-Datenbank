const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


const detailSchema = new Schema ({
    productName: String, 
    sizeHeight: Number, 
    sizeWidth: Number,
    status: Boolean, 
    
});


const Details = mongoose.model ( "Details", detailSchema );
module.exports = Details;