const mongoose = require('mongoose');

const Avatar = require('./models/avatar');

const resetDB = async () => {
    console.log("reseting db");

    await Avatar.deleteMany({})
                .then(() => console.log("removed all avatars."))
                .catch((err) => console.error("error: could not remove avatars"));
};


module.exports = resetDB;