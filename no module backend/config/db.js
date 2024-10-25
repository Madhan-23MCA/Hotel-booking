const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mathanv3303:12345@mobileapp.kxglf.mongodb.net/myDatabaseName', {
    useNewUrlParser: true,
    useUnifiedTopology: true, // recommended for newer MongoDB drivers
})
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.error("DB connection error:", err);
    });
