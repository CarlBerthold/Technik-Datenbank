const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

// TODO: Please make sure you edit the Technik model to whatever makes sense in this case

const technikSchema = new Schema ({
        name: String,
        tarId: String,
        gekauft: Number,
        status: Boolean

});

const Technik = mongoose.model ( "Technik", technikSchema );

module.exports = Technik;
