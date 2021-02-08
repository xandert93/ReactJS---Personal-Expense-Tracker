const Transaction = require('../models/Transaction');

//the following are referred to as "controller methods"

// @desc     get all transactions
// @route    GET /api/v1/transactions
// @access   Public (since no authentication included)
exports.getTransactions = async (req, res, next) => {
  try {
    const foundTransactions = await Transaction.find({});
    return res.status(200).json({
      success: true,
      count: foundTransactions.length,
      data: foundTransactions,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// @desc     add a transaction
// @route    POST /api/v1/transactions
// @access   Public (since no authentication included)
exports.addTransaction = async (req, res, next) => {
  try {
    const savedTransaction = await new Transaction(req.body).save();
    return res.status(201).json({ success: true, data: savedTransaction });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const errMessages = Object.values(err.errors).map((obj) => obj.message);
      res.status(400).json({ success: false, error: errMessages });
    }
    res.status(500).json({ success: false, error: err.message });
  }
};

// @desc     delete a transaction
// @route    GET /api/v1/transactions/:id
// @access   Public (since no authentication included)
exports.deleteTransaction = async (req, res, next) => {
  try {
    const deletedTransaction = await Transaction.findByIdAndDelete(
      req.params.id
    );
    deletedTransaction !== null
      ? res.status(200).json({ success: true })
      : res.status(404).json({ success: false, error: 'no document found' });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};
