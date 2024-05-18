const Property = require('../models/Property');

const addProperty = async (req, res) => {
    const { place, area, bedrooms, bathrooms, nearby } = req.body;

    try {
        const property = new Property({
            place,
            area,
            bedrooms,
            bathrooms,
            nearby,
            seller: req.user.id
        });

        await property.save();
        res.json(property);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const getProperties = async (req, res) => {
    try {
        const properties = await Property.find().populate('seller', 'firstName lastName email phone');
        res.json(properties);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const updateProperty = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        let property = await Property.findById(id);
        if (!property) {
            return res.status(404).json({ msg: 'Property not found' });
        }

        if (property.seller.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        property = await Property.findByIdAndUpdate(id, updates, { new: true });
        res.json(property);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const deleteProperty = async (req, res) => {
    const { id } = req.params;

    try {
        let property = await Property.findById(id);
        if (!property) {
            return res.status(404).json({ msg: 'Property not found' });
        }

        if (property.seller.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        await Property.findByIdAndRemove(id);
        res.json({ msg: 'Property removed' });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = { addProperty, getProperties, updateProperty, deleteProperty };
