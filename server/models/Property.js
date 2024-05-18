const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    place: { type: String, required: true },
    area: { type: Number, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    nearby: {
        hospitals: { type: String },
        colleges: { type: String },
    },
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Property = mongoose.model('Property', propertySchema);
module.exports = Property;
