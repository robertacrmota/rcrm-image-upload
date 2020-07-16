const mongoose = require('mongoose');

/**
 *  This is a temporary model for testing image upload
 */
const avatarschema = new mongoose.Schema({
    fieldname: String,
    originalname: String,
    encoding: String,
    mimetype: String,
    buffer: Buffer,
    size: Number
});

module.exports = mongoose.model("Avatar", avatarschema);