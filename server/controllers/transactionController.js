import Transaction from "../models/transactionModel.js";

const getTransaction = async (req, res) => {
  try {
    const transactions = await Transaction.find().limit(50).sort({ createdOn: -1 });

    res.status(200).json(transactions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export { getTransaction };
