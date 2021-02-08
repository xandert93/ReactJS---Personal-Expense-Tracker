const { connect, connection } = require('mongoose');
const DB_URL = process.env.DB_URL;

const connectDB = async () => {
  try {
    const conn = await connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `MongoDB connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (err) {
    console.log(`Error: ${err.message}`.red);
    process.exit(1);
  }
};

module.exports = { connectDB, connection };
