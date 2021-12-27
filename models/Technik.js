const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

// TODO: Please make sure you edit the Technik model to whatever makes sense in this case

const technikSchema = new Schema ({
        hersteller: String,
        art: String,
        watt: String,
        inventarnummer: String,
        geprüft: Boolean,
        jahr: Number,
        bemerkung: String,
        besitzer: String,
        anzahl: Number,
        imgUrl: String,


});

const Technik = mongoose.model ( "Technik", technikSchema );

module.exports = Technik;
