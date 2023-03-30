import mongoose from "mongoose";

const db = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "finance",
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected ${con.connection.host}`);
  } catch (error) {
    console.error(`Error : ${error.message}`);
    process.exit(1);
  }
};

export default db;