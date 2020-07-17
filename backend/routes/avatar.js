const upload = require('./middleware'),
      express = require('express'),
      router = express.Router();

const Avatar = require('../models/avatar');

router.post('/upload', upload.single('file'), async (req, res) => {
    console.log(`POST request upload avatar ${req.file.originalname}`);
    console.log(req.file)

    const newAvatar = req.file;

    await Avatar.create(newAvatar)
        .then((resolve) => {
            console.log(`STATUS :: Success`);
            res.status(201).send({name: newAvatar.originalname,
                                mimetype: newAvatar.mimetype,
                                buffer: newAvatar.buffer
            });
        })
        .catch((e) => {
        console.error(`STATUS :: Ops.Something went wrong.`);
            res.status(500).json({
                error: true,
                message: e.toString()
            });
    });
});

module.exports = router;