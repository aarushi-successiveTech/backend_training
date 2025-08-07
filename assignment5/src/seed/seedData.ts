import { faker } from "@faker-js/faker";
const Order = require('../models/orderModel'); 
import connectDB from "../config/db";

const statuses = ['pending', 'shipped', 'delivered'];

interface Item {
  productName: string;
  quantity: number;
  price: number;
}

const generateItems = (): Item[] => {
  const itemsCount = faker.number.int({ min: 1, max: 5 });
  const items: Item[] = [];

  for (let i = 0; i < itemsCount; i++) {
    const quantity = faker.number.int({ min: 1, max: 10 });
    const price = parseFloat(faker.commerce.price({ min: 10, max: 100 }));
    items.push({
      productName: faker.commerce.productName(),
      quantity,
      price,
    });
  }

  return items;
};


const calculateTotal = (items: Item[]): number => {
  return items.reduce((sum, item) => sum + item.quantity * item.price, 0);
};


const generateOrders = (count: number) => {
  const orders = [];

  for (let i = 0; i < count; i++) {
    const items = generateItems();
    const totalAmount = +calculateTotal(items).toFixed(2);

    orders.push({
      orderId: faker.string.uuid(),
      customerName: faker.person.fullName(),
      orderDate: faker.date.past({ years: 1 }),
      status: faker.helpers.arrayElement(statuses),
      items,
      totalAmount,
    });
  }

  return orders;
};


const seedOrders = async (): Promise<void> => {
  try {
    await connectDB();

    await Order.deleteMany(); 
    const allOrders = generateOrders(20);
    await Order.insertMany(allOrders); 

    console.log('Orders seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding orders:', error);
    process.exit(1);
  }
};

seedOrders();