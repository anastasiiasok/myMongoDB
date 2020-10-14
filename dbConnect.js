const mongoose = require ("mongoose");
const dbName = 'online_auction_shop'
const dbPath = `mongodb://localhost:27017/${dbName}`

//2 portal opened (putting info there)
const dbConnect = () => {
    mongoose
      .connect(dbPath, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log('You connected to - ', dbPath))
      .catch((err) => {
        console.log('Error', err);
      });
  };

  module.exports = dbConnect;



