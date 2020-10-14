
const dbConnect = require('./dbConnect');
const mongoose = require('mongoose');
const User = require('./user.js');
const Product = require('./product.js');
const Order = require('./order.js');


dbConnect();

async function createProduct() {
  await Product.insertMany([
    { description: 'Diamond Encrusted Bluetooth Headset' },
    { description: 'Tiffany Tennis Ball Can ' },
    { description: 'Louis Vuitton Skateboard' },
  ]);
}
const createUsers = async () => {
  await User.insertMany([
    {
      name: 'Andrei Pavlov',
      age: 32,
      state: "NJ"
      // favouriteProducts: await Product.find({}, { _id: true }),
    },
    {
      name: 'Dorothy Wright',
      age: 25,
      state:"NY"
      // userOrder: await Order.find({}, { _id: true }),
    },
    {
      name: 'Alexander Underwood',
      age: 30,
      state:"CA"
      //favouriteProducts: await Product.find({}, { _id: true }),
    },
  ]);

  const a = await User.find(
    { name: 'Dorothy Wright' },
    { userOrder: true, _id: false }
  ).populate({ path: 'userOrder', select: 'description' });
  console.log(a[0].userOrder.map((el) => el.description));

  const p = await User.find(
    { name: 'Andrei Pavlov' },
    { favouriteProducts: true, _id: false }
  ).populate({ path: 'favouriteProducts', select: 'description' });
  console.log(p[0].favouriteProducts.map((el) => el.description));
;

const m = await User.find(
  { name: 'Alexander Underwood' },
  { favouriteProducts: true, _id: false }
).populate({ path: 'favouriteProducts', select: 'description' });
console.log(m[0].favouriteProducts.map((el) => el.description));
}
createUsers();



async function createOrders() {
  await Order.insertMany([
    { description: 'Diamond Encrusted Bluetooth Headset', price: 50000, amount: 340 },
    { description: 'Tiffany Tennis Ball Can', price: 1500, amount: 3500 },
    { description: 'Louis Vuitton Skateboard', price: 8250, amount: 4600 },
  ]);
  const getOrders = await Order.find();
  console.log(getOrders);
}
createOrders();
async function logic() {
  await createProduct();
  await createUsers();
  await createOrders();
  mongoose.connection.close(() => {
    console.log('Connection closed');
  });
}

// createUsers();
// createProducts();
// createOrders();
logic();







