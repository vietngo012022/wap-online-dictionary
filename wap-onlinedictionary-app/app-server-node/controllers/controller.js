const connectDB = require("../database/dbconnection");

const getWordFromDictionary = (req, res, next) => {
  const connection = connectDB();
  const word = req.query.word;
  
  connection.connect((err) => {
    if (err) {
      console.error("Database connection to server error:", err);
      return res.status(404).json({
        success: false,
        data: null,
        message: "Internal Data Server Error",
      });
    }
    
    //const query = `SELECT word FROM ${process.env.DB_NAME}.dictionary WHERE word = '${word}'`;
    const query = `SELECT * FROM entries.dictionary WHERE word = '${word}'`;
    connection.query(query, function (err, results) {
      connection.end(); 
      
      if (err) {
        console.error("Database query error:", err);
        return res.status(404).json({
          success: false,
          data: null,
          message: "Internal Server Error",
        });
      }
      
      res.status(200).json({
        success: true,
        data: results,
        message: results.length === 0 ? "Word you search not found" : "Successfully found in dictionary",
      });
    });
  });
};

module.exports = getWordFromDictionary;
