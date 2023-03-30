import mongoose from "mongoose";
import KPI from "../models/KPIModel.js";
import Product from "../models/productModel.js";
import Transaction from "../models/transactionModel.js";

import { kpis, products, transactions } from "./data.js";

const seeder = async () => {
  try {
    await mongoose.connection.db.dropDatabase();
    KPI.insertMany(kpis);
    Product.insertMany(products);
    Transaction.insertMany(transactions);
  } catch (e) {
    console.log(e);
  }
};

export default seeder;
