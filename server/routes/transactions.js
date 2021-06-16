const { Router } = require('express');
const router = Router();
const {
  getTransactions,
  createTransaction,
  deleteTransaction,
} = require('../controllers/transactionController');

router.route('/').get(getTransactions).post(createTransaction);

router.route('/:id').delete(deleteTransaction);

module.exports = router;
